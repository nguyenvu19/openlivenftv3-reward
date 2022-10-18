import { createReducer } from '@reduxjs/toolkit'
import { setTokenInfo, setInfoMarketPair, setBossTeamWallets } from './actions'

export interface InfoTokenState {
  tokenInfo: any
  infoMarketPair: any
  bossTeamWallets: any
}

export const initialState: InfoTokenState = {
  tokenInfo: {
    params: {},
    data: undefined,
  },
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
    .addCase(setTokenInfo, (state, { payload }) => {
      state.tokenInfo = payload
    })
    .addCase(setInfoMarketPair, (state, { payload }) => {
      state.infoMarketPair = payload
    })
    .addCase(setBossTeamWallets, (state, { payload }) => {
      state.bossTeamWallets = payload
    }),
)
