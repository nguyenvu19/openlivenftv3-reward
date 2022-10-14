import { nftRewardConfig } from './nftRewardConfig'

/* eslint-disable camelcase */
export interface NftType {
  amount: string
  block_number: string
  block_number_minted: string
  contract_type: string
  last_metadata_sync: string
  last_token_uri_sync: string
  metadata: null
  name: string
  owner_of: string
  symbol: string
  token_address: string
  token_hash: string
  token_id: string
  token_uri: string
}

export interface NftResponse {
  total: number
  page: number
  page_size: number
  cursor: any
  result: NftType[]
}

export type NftReward = {
  id: number
  name: string
  price_usd: number
  bonus_opv: number
  dividend_usdt_percent: number
  reward_per_date: number
}
