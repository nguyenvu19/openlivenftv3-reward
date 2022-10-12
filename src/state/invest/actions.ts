import { createAction } from '@reduxjs/toolkit'
import { InvestPackageResultType } from './types'

export const setInvestList = createAction<{ investList: InvestPackageResultType | null | undefined }>(
  'invest/setInvestList',
)
