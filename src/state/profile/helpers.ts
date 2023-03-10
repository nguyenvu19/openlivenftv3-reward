import { Profile } from 'state/types'
import { PancakeProfile } from 'config/abi/types/PancakeProfile'
import profileABI from 'config/abi/pancakeProfile.json'
import { API_PROFILE } from 'config/constants/endpoints'
import { multicallv2 } from 'utils/multicall'
import { getPancakeProfileAddress } from 'utils/addressHelpers'

export interface GetProfileResponse {
  hasRegistered: boolean
  profile?: Profile
}

const transformProfileResponse = (
  profileResponse: Awaited<ReturnType<PancakeProfile['getUserProfile']>>,
): Partial<Profile> => {
  const { 0: userId, 1: numberPoints, 2: teamId, 3: collectionAddress, 4: tokenId, 5: isActive } = profileResponse

  return {
    userId: userId.toNumber(),
    points: numberPoints.toNumber(),
    teamId: teamId.toNumber(),
    tokenId: tokenId.toNumber(),
    collectionAddress,
    isActive,
  }
}

export const getUsername = async (address: string): Promise<string> => {
  try {
    const response = await fetch(`${API_PROFILE}/api/users/${address.toLowerCase()}`)

    if (!response.ok) {
      return ''
    }

    const { username = '' } = await response.json()

    return username
  } catch (error) {
    return ''
  }
}

export const getProfile = async (address: string): Promise<GetProfileResponse> => {
  try {
    const profileCalls = ['hasRegistered', 'getUserProfile'].map((method) => {
      return { address: getPancakeProfileAddress(), name: method, params: [address] }
    })
    const profileCallsResult = await multicallv2({
      abi: profileABI,
      calls: profileCalls,
      options: { requireSuccess: false },
    })
    const [[hasRegistered], profileResponse] = profileCallsResult
    if (!hasRegistered) {
      return { hasRegistered, profile: null }
    }

    const { userId, points, teamId, tokenId, collectionAddress, isActive } = transformProfileResponse(profileResponse)

    const profile = {
      userId,
      points,
      teamId,
      tokenId,
      collectionAddress,
      isActive,
      username: undefined,
      nft: undefined,
      team: undefined,
    } as Profile

    return { hasRegistered, profile }
  } catch (e) {
    console.error(e)
    return null
  }
}
