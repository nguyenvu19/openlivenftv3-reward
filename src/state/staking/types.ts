export interface StakingItemType {
  poolId: number
  planId: number
  apr: number
  time: number
  totalStakedAmount: number
  min: number
  max: number
}

export interface StakingHistory {
  amount: number
  apr: number
  checkpoint: number
  fee: number
  finish: number
  isUnStake: boolean
  plan: number
  poolId: number
  start: number
  userAddress: string
}
