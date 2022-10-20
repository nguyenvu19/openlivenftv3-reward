import { createReducer } from '@reduxjs/toolkit'
import { setStakingList } from './actions'
import { StakingItemType } from './types'

export interface InvestState {
  stakingList: StakingItemType[] | null | undefined
}

export const initialState: InvestState = {
  stakingList: undefined,
}

export default createReducer<InvestState>(initialState, (builder) =>
  builder.addCase(setStakingList, (state, { payload }) => {
    state.stakingList = payload.stakingList
  }),
)
