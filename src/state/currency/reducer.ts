import { createReducer } from '@reduxjs/toolkit'
import { setOtherCurrencyList } from './actions'
import { OtherCurrencyType } from './types'

export interface InvestState {
  otherCurrencyList: OtherCurrencyType[] | null | undefined
}

export const initialState: InvestState = {
  otherCurrencyList: undefined,
}

export default createReducer<InvestState>(initialState, (builder) =>
  builder.addCase(setOtherCurrencyList, (state, { payload }) => {
    state.otherCurrencyList = payload.otherCurrencyList
  }),
)
