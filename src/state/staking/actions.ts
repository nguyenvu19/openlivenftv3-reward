import { createAction } from '@reduxjs/toolkit'
import { StakingItemType } from './types'

export const setStakingList = createAction<{ stakingList: StakingItemType[] | null | undefined }>(
  'staking/setStakingList',
)
