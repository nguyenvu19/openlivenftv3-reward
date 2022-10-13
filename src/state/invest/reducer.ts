import { createReducer } from '@reduxjs/toolkit'
import { setInvestList } from './actions'
import { InvestPackageResultType } from './types'

export interface InvestState {
  investList: InvestPackageResultType | null | undefined
}

export const initialState: InvestState = {
  investList: undefined,
}

export default createReducer<InvestState>(initialState, (builder) =>
  builder.addCase(setInvestList, (state, { payload }) => {
    state.investList = payload.investList
  }),
)
