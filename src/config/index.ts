import { getFullDecimalMultiplier } from 'utils/getFullDecimalMultiplier'
import env from '../../env'

// Constants config env file
export const APP_URL = env.NEXT_PUBLIC_APP_URL
export const APP_USER_URL = env.NEXT_PUBLIC_APP_USER_URL
export const APP_USER_API = env.NEXT_PUBLIC_APP_USER_API
export const APP_USER_METADATA = env.NEXT_PUBLIC_APP_USER_API_METADATA

export const GRAPH_API_OPV = env.NEXT_PUBLIC_APP_GRAPH_API

export const DEFAULT_CHAIN_ID = +env.NEXT_PUBLIC_DEFAULT_CHAIN_ID
export const TOKEN_ADDRESS = env.NEXT_PUBLIC_TOKEN_ADDRESS
export const CONTRACT_ADDRESS = env.NEXT_PUBLIC_CONTRACT_ADDRESS
export const NFT_ADDRESS = env.NEXT_PUBLIC_NFT_ADDRESS
export const CONTRACT_FARM = env.NEXT_PUBLIC_CONTRACT_FARM
export const CONTRACT_STAKING = env.NEXT_PUBLIC_CONTRACT_STAKING

//  Others
export const BSC_BLOCK_TIME = 3

// CAKE_PER_BLOCK details
// 40 CAKE is minted per block
// 20 CAKE per block is sent to Burn pool (A farm just for burning cake)
// 10 CAKE per block goes to CAKE syrup pool
// 9 CAKE per block goes to Yield farms and lottery
// CAKE_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// CAKE/Block in src/views/Home/components/CakeDataRow.tsx = 15 (40 - Amount sent to burn pool)
export const CAKE_PER_BLOCK = 40
export const BLOCKS_PER_DAY = (60 / BSC_BLOCK_TIME) * 60 * 24
export const BLOCKS_PER_YEAR = BLOCKS_PER_DAY * 365 // 10512000
export const CAKE_PER_YEAR = CAKE_PER_BLOCK * BLOCKS_PER_YEAR
export const BASE_URL = APP_URL
export const BASE_ADD_LIQUIDITY_URL = `${BASE_URL}/add`
export const DEFAULT_TOKEN_DECIMAL = getFullDecimalMultiplier(18)
export const DEFAULT_GAS_LIMIT = 250000
export const BOOSTED_FARM_GAS_LIMIT = 500000
export const AUCTION_BIDDERS_TO_FETCH = 500
export const RECLAIM_AUCTIONS_TO_FETCH = 500
export const AUCTION_WHITELISTED_BIDDERS_TO_FETCH = 500
export const IPFS_GATEWAY = 'https://ipfs.io/ipfs'
