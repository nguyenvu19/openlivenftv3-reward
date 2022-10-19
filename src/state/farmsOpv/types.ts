export type FarmsItemType = {
  poolId: number
  name: string
  symbol1: string
  symbol2: string
  logo1: string
  logo2: string
  contract: string
  tokenAddress1: string
  tokenAddress2: string
  lpToken: string

  fromTime: number
  locked: boolean
  poolEnded: boolean
  poolStatus: string
  rewardPerBlock: number
  toTime: number
  tokenAddress: string
  totalAmount: number
  finalAmount: number
  userInfo?: any
  userDividends: number
}
