import { createReducer } from '@reduxjs/toolkit'
import { setInfoMarketPair } from './actions'

export interface InfoTokenState {
  infoMarketPair: any
}

export const initialState: InfoTokenState = {
  infoMarketPair: {
    params: {},
    data: undefined,
  },
}

export default createReducer<InfoTokenState>(initialState, (builder) =>
  builder.addCase(setInfoMarketPair, (state, { payload }) => {
    state.infoMarketPair = payload
  }),
)
