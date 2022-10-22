import useSWR from 'swr'
import BigNumber from 'bignumber.js'
import { useContractStaking } from 'hooks/useContract'
import { FAST_INTERVAL } from 'config/constants'
import { useSelector } from 'react-redux'
import { AppState, useAppDispatch } from 'state'
import { setStakingHistory } from './actions'
import { StakingHistory } from './types'

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
              return {
                amount: new BigNumber(+item.amount.toString()).shiftedBy(-18).toNumber(),
                apr: +item.apr.toString(),
                checkpoint: +item.checkpoint.toString(),
                fee: +item.fee.toString(),
                finish: +item.finish.toString(),
                isUnStake: item.isUnStake,
                plan: item.plan,
                poolId: item.poolId,
                start: +item.start.toString(),
                userAddress: item.userAddress,
              }
            })
            dispatch(setStakingHistory(parseDeposits))
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
