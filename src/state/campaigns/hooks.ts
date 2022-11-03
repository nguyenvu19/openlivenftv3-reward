import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import BigNumber from 'bignumber.js'
import moment from 'moment'
import { useContractCampaigns } from 'hooks/useContract'
import { AppState, useAppDispatch } from 'state'
import { useFastRefreshEffect } from 'hooks/useRefreshEffect'
import { campaignsSelector } from './selectors'
import { fetchCampaignsPublicDataAsync } from '.'
import { CampaignItem } from './types'

export const usePollCoreCampaignsData = () => {
  const dispatch = useAppDispatch()

  useFastRefreshEffect(() => {
    dispatch(fetchCampaignsPublicDataAsync())
  }, [dispatch])
}

export const useCampaigns = () => {
  return useSelector(useMemo(() => campaignsSelector(), []))
}

export const useCampaignItem = (campaignId?: string | number): CampaignItem | undefined => {
  const campaigns = useSelector((state: AppState) => state.campaigns.data)
  return useMemo(() => {
    return campaigns?.find((campaign) => campaign.id === +campaignId)
  }, [campaignId, campaigns])
}

export const useCheckIsNftClaimed = (
  campaignId?: string | number,
  tokenId?: string | number,
): {
  isClaimed?: boolean
  fetchClaimTime: () => void
} => {
  const [isClaimed, setClaimTime] = useState(true)
  const contractCampaign = useContractCampaigns()
  const fetchClaimTime = useCallback(async () => {
    if (contractCampaign && campaignId && tokenId) {
      const lastTimeClaim = await (await contractCampaign.claimTimeByCampaigns(campaignId, tokenId)).toNumber()
      const currentTime = new Date(moment(new Date()).format('YYYY/MM/DD')).getTime()
      if (lastTimeClaim * 1000 >= currentTime) {
        setClaimTime(true)
      } else {
        setClaimTime(false)
      }
    }
  }, [campaignId, contractCampaign, tokenId])

  useEffect(() => {
    fetchClaimTime()
  }, [fetchClaimTime])
  return { isClaimed, fetchClaimTime }
}

export const useAvailableClaim = (
  campaignId?: string | number,
  tokenId?: string | number,
): {
  availableClaim?: number
  fetchAvailableClaim: () => void
} => {
  const [availableClaim, setAvailableClaim] = useState<number | undefined>()
  const contractCampaign = useContractCampaigns()

  const fetchAvailableClaim = useCallback(async () => {
    if (contractCampaign && campaignId && tokenId) {
      const result = await contractCampaign.calculateReward(tokenId, campaignId)
      setAvailableClaim(new BigNumber(result.totalAmount.toString()).shiftedBy(-18).toNumber())
    }
  }, [campaignId, contractCampaign, tokenId])

  useEffect(() => {
    fetchAvailableClaim()
  }, [fetchAvailableClaim])

  return { availableClaim, fetchAvailableClaim }
}
