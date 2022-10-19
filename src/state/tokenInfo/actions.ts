import { createAction } from '@reduxjs/toolkit'
import { InfoMarketPair } from './types'

export const setTokenInfo = createAction<{ params: any; data: any }>('tokenInfo/setTokenInfo')

export const setInfoMarketPair = createAction<{ params: any; data: InfoMarketPair }>('tokenInfo/setInfoMarketPair')

export const setBossTeamWallets = createAction<{ params: any; data: any }>('tokenInfo/setBossTeamWallets')
