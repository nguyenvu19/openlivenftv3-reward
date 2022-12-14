import useSWR from 'swr'
import BigNumber from 'bignumber.js'
import { useContractStaking } from 'hooks/useContract'
import { FAST_INTERVAL } from 'config/constants'
import { useSelector } from 'react-redux'
import { AppState, useAppDispatch } from 'state'

import { useCallback, useEffect, useState } from 'react'
import { gql } from 'graphql-request'
import { graphqlOpv } from 'utils/graphql'
import { StakingHistory, STAKING_STATUS } from './types'
import { setStakingHistory } from './actions'

export const useStakingHistory = (
  address: string,
): { stakingHistory: StakingHistory[] | null | undefined; fetchStakingHistory: () => void } => {
  const dispatch = useAppDispatch()

  const contractStaking = useContractStaking()

  const { mutate } = useSWR(
    ['staking-history', [address]],
    async () => {
      if (address && contractStaking) {
        try {
          const { deposits } = await contractStaking.getUserInfo(address)
          if (deposits?.length > 0) {
            const parseDeposits = deposits.map((item) => {
              const currentTime = new Date().getTime()
              const startTime = +item.start.toString() * 1000
              const endTime = +item.finish.toString() * 1000
              return {
                amount: new BigNumber(+item.amount.toString()).shiftedBy(-18).toNumber(),
                apr: +item.apr.toString(),
                checkpoint: +item.checkpoint.toString(),
                fee: +item.fee.toString(),
                isUnStake: item.isUnStake,
                planId: item.plan,
                poolId: item.poolId,
                userAddress: item.userAddress,
                start: startTime,
                finish: endTime,
                poolStatus: currentTime >= endTime ? STAKING_STATUS.END : STAKING_STATUS.LIVE,
              }
            })
            dispatch(setStakingHistory(parseDeposits))
          } else {
            dispatch(setStakingHistory([]))
          }
        } catch (error) {
          console.error('useStakingHistory', error)
          dispatch(setStakingHistory(null))
        }
      }
    },
    { refreshInterval: FAST_INTERVAL },
  )

  const stakingHistory = useSelector((state: AppState) => state.staking.stakingHistory)
  return { stakingHistory, fetchStakingHistory: mutate }
}

// fetch staking with draw History graphql
const graphStakingClaimWithdrawHistories = async () => {
  try {
    const query = gql`
      query stakingClaimPools {
        stakingWithdrawHistories {
          id
          planId
          poolId
          startTime
          transactionHash
          userAddress
          createdTime
        }
      }
    `
    const data = await graphqlOpv.request(query)
    return data
  } catch (error) {
    console.error('Failed staking Claim Pools', error)
    return null
  }
}

interface ResponseClaimStakingWithdrawHistories {
  dataWithdraw: StakingHistory[] | undefined | null
}

export const useClaimWithdrawHistories = (): {
  stakingWithdrawHistories: ResponseClaimStakingWithdrawHistories
  fetchStakingWithdrawHistories: () => void
} => {
  const [stakingWithdrawHistories, setStakingWithdrawHistories] = useState<ResponseClaimStakingWithdrawHistories>({
    dataWithdraw: undefined,
  })

  const fetchStakingWithdrawHistories = useCallback(async () => {
    const result = await graphStakingClaimWithdrawHistories()
    setStakingWithdrawHistories({
      dataWithdraw: result?.stakingWithdrawHistories || null,
    })
  }, [])

  useEffect(() => {
    fetchStakingWithdrawHistories()
  }, [fetchStakingWithdrawHistories])

  return { stakingWithdrawHistories, fetchStakingWithdrawHistories }
}

// fetch staking with deposit History graphql
const graphStakingClaimDepositHistories = async () => {
  try {
    const query = gql`
      query stakingClaimPools {
        stakingDepositHistories {
          amount
          apr
          createdTime
          endTime
          id
          planId
          poolId
          startTime
          status
          transactionHash
          userAddress
        }
      }
    `
    const data = await graphqlOpv.request(query)
    return data
  } catch (error) {
    console.error('Failed staking Claim Pools', error)
    return null
  }
}

interface ResponseClaimStakingDepositHistories {
  dataDeposit: StakingHistory[] | undefined | null
}

export const useClaimDepositHistories = (): {
  stakingDepositHistories: ResponseClaimStakingDepositHistories
  fetchStakingDepositHistories: () => void
} => {
  const [stakingDepositHistories, setStakingDepositHistories] = useState<ResponseClaimStakingDepositHistories>({
    dataDeposit: undefined,
  })

  const fetchStakingDepositHistories = useCallback(async () => {
    const result = await graphStakingClaimDepositHistories()
    setStakingDepositHistories({
      dataDeposit: result?.stakingDepositHistories || null,
    })
  }, [])

  useEffect(() => {
    fetchStakingDepositHistories()
  }, [fetchStakingDepositHistories])

  return { stakingDepositHistories, fetchStakingDepositHistories }
}
