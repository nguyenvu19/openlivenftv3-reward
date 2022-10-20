/* eslint-disable no-constant-condition */
/* eslint-disable no-await-in-loop */
import { FAST_INTERVAL } from 'config/constants'
import { useSelector } from 'react-redux'
import { AppState, useAppDispatch } from 'state'
import useSWR from 'swr'
import { getContractStaking } from 'utils/contractHelpers'

export const FARM_STATUS = {
  LIVE: 'live',
  END: 'end',
}

export const useStakingListData = (poolId = 1) => {
  const dispatch = useAppDispatch()

  useSWR(
    ['staking-list', [poolId]],
    async () => {
      const contractStaking = getContractStaking()

      if (contractStaking) {
        const arr: any[] = []
        try {
          let count = 0
          while (true) {
            count += 1
            const poolInfo = await contractStaking.getPlanInfo(poolId, count)
            const apr = +poolInfo.apr.toString()
            const time = +poolInfo.time.toString()
            const totalStakedAmount = +poolInfo.totalStakedAmount.toString()

            if (apr === 0 && time === 0 && totalStakedAmount === 0) break

            arr.push({
              apr,
              time,
              totalStakedAmount,
            })
          }
          console.log('arr', arr)

          // dispatch(
          //   setFarmsData({
          //     farmsData: pFarmsList,
          //     totalUserDividendsAllPool: pTotalUserDividendsAllPool,
          //   }),
          // )
        } catch (error) {
          console.error('useStakingListData', error)
        }
      }
    },
    { refreshInterval: FAST_INTERVAL },
  )

  const { farmsData, totalUserDividendsAllPool } = useSelector((state: AppState) => state.farmsOpv)
  return { farmsData, totalUserDividendsAllPool, fetchFarmsData: () => null }
}
