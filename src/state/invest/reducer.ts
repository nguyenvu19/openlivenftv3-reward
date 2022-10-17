import { createReducer } from '@reduxjs/toolkit'
import { setInvestList, setMyInvestList } from './actions'
import { InvestPackageResultType, MyInvestList } from './types'

export interface InvestState {
  investList: InvestPackageResultType | null | undefined
  myInvestList: MyInvestList | null | undefined
}

export const initialState: InvestState = {
  investList: undefined,
  myInvestList: undefined,
}

export default createReducer<InvestState>(initialState, (builder) =>
  builder
    .addCase(setInvestList, (state, { payload }) => {
      state.investList = payload.investList
    })
    .addCase(setMyInvestList, (state, { payload }) => {
      state.myInvestList = payload.myInvestList
    }),
)
