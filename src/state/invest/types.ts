import { PaginationApiType } from 'state/resultType'

/* eslint-disable camelcase */
export interface MetaData {
  key: string
  title: string
  value: string
}

export interface InvestPackageType {
  _id: string
  avatar: string
  bonus_token: number
  createdAt: number
  currency_bonus_token: string
  currency_invest: string
  dividend_rate: number
  meta_data: MetaData
  price_invest: number
  rare: number
  status: boolean
  title: string
  updatedAt: number
}

export interface InvestPackageResultType extends PaginationApiType {
  rows: InvestPackageType[]
}

export interface MyInvestItem {
  _id: string
  package_id: string
  customer_id: string
  price_invest: number
  price_usd_invest: number
  currency_invest: string
  bonus_token: number
  currency_bonus_token: string
  dividend_rate: number
  nft_id: number
  nft_image: string
  customer_sign_address: string
  customer_sign_date: number
  customer_sign_message: string
  customer_sign_signature: string
  admin_sign_address: string
  admin_sign_date: number
  admin_sign_message: string
  admin_sign_signature: string
  total_bonus_percent: number
  link_contract: string
  status: true
  createdAt: number
  updatedAt: number
  package: InvestPackageType
}
export interface MyInvestList extends PaginationApiType {
  rows: MyInvestItem[]
}
