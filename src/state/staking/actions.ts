import { createAction } from '@reduxjs/toolkit'
import { FarmsItemType } from './types'

export const setFarmsData = createAction<{
  farmsData: FarmsItemType[] | null | undefined
  totalUserDividendsAllPool: number
}>('farmsOpv/setFarmsData')
