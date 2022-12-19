import { createReducer } from '@reduxjs/toolkit'
import { setOwnerStaking, setOwnerContract } from './actions'
import { Owner } from './types'

export const initialState: Owner = {
  owner: '',
}

export default createReducer<Owner>(initialState, (builder) =>
  builder
    .addCase(setOwnerStaking, (state, { payload }) => {
      return { ...state, owner: payload.ownerStaking }
    })

    .addCase(setOwnerContract, (state, { payload }) => {
      return { ...state, owner: payload.ownerContract }
    }),
)
