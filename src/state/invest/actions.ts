import { createAction } from '@reduxjs/toolkit'
import { InvestPackageResultType, MyInvestList } from './types'

export const setInvestList = createAction<{ investList: InvestPackageResultType | null | undefined }>(
  'invest/setInvestList',
)

export const setMyInvestList = createAction<{ myInvestList: MyInvestList | null | undefined }>('invest/setMyInvestList')
