import { createAction } from '@reduxjs/toolkit'
import { OtherCurrencyType } from './types'

export const setOtherCurrencyList = createAction<{ otherCurrencyList: OtherCurrencyType[] | null | undefined }>(
  'currency/setOtherCurrencyList',
)
