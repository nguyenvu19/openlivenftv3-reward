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
