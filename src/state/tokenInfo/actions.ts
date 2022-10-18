import { createAction } from '@reduxjs/toolkit'
import { InfoMarketPair } from './types'

export const setInfoMarketPair = createAction<{ params: any; data: InfoMarketPair }>('tokenInfo/setInfoMarketPair')
