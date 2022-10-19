import { createReducer } from '@reduxjs/toolkit'
import { setFarmsData } from './actions'
import { FarmsItemType } from './types'

export interface InvestState {
  farmsData: FarmsItemType[] | null | undefined
  totalUserDividendsAllPool: number | null | undefined
}

export const initialState: InvestState = {
  farmsData: undefined,
  totalUserDividendsAllPool: undefined,
}

export default createReducer<InvestState>(initialState, (builder) =>
  builder.addCase(setFarmsData, (state, { payload }) => {
    state.farmsData = payload.farmsData
    state.totalUserDividendsAllPool = payload.totalUserDividendsAllPool
  }),
)
