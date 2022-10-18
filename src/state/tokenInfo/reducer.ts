import { createReducer } from '@reduxjs/toolkit'
import { setInfoMarketPair, setBossTeamWallets } from './actions'

export interface InfoTokenState {
  infoMarketPair: any
  bossTeamWallets: any
}

export const initialState: InfoTokenState = {
  infoMarketPair: {
    params: {},
    data: undefined,
  },
  bossTeamWallets: {
    params: {},
    data: undefined,
  },
}

export default createReducer<InfoTokenState>(initialState, (builder) =>
  builder
    .addCase(setInfoMarketPair, (state, { payload }) => {
      state.infoMarketPair = payload
    })
    .addCase(setBossTeamWallets, (state, { payload }) => {
      state.bossTeamWallets = payload
    }),
)
