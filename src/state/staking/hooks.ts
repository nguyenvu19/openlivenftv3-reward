import { roundNumber } from 'helpers'
import { useState } from 'react'
import useSWR from 'swr'
import { StakingHistory, StakingItemType, STAKING_STATUS } from './types'

export function useStakingEarn(account?: string, stakingList?: StakingItemType[], stakingHistory?: StakingHistory[]) {
  const [opvEarned, setOpvEarned] = useState<number | undefined>()
  useSWR(
    ['staking-earned', account, stakingList, stakingHistory],
    async () => {
      if (account && stakingList && stakingHistory) {
        let totalEarn = 0
        const currentTime = new Date().getTime()
        for (let i = 0; i < stakingHistory.length; i++) {
          const stakingHistoryItem = stakingHistory[i]
          const fPackage = stakingList.find(
            (item) => item.planId === stakingHistoryItem.planId && item.poolId === stakingHistoryItem.poolId,
          )

          let timeWasLocked = (currentTime - stakingHistoryItem.start) / 1000 / 60 / 60 / 24 // day reward locked
          timeWasLocked = timeWasLocked > fPackage.time ? fPackage.time : timeWasLocked // all day locked

          const percentPerDay = ((stakingHistoryItem.apr / 1e18) * 100 * 30 * 84600) / 360
          if (stakingHistoryItem.poolStatus === STAKING_STATUS.LIVE) {
            const rewardPerPackage = ((percentPerDay * stakingHistoryItem.amount) / 100) * timeWasLocked
            totalEarn += rewardPerPackage
          }
          if (stakingHistoryItem.poolStatus === STAKING_STATUS.END) {
            const rewardPerPackage = ((percentPerDay * stakingHistoryItem.amount) / 100) * timeWasLocked
            totalEarn += rewardPerPackage
          }
        }

        setOpvEarned(roundNumber(totalEarn, { scale: 5, scaleSmall: 2 }))
      }
    },
    { refreshInterval: 1000 },
  )
  return { opvEarned }
}
