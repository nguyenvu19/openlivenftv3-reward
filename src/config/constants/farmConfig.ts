import { CONTRACT_FARM, TOKEN_ADDRESS } from 'config'
import { DEFAULT_CHAIN_ID } from '../index'
import { WBNB } from '../../../packages/swap-sdk/src/constants'

export const configInfoPool = {
  logo1: '/images/tokens/0x36c7b164f85d6f775cd128966d5819c7d36feff3.png',
  logo2: '/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png',
  name: 'OPV-BNB LPs',
  symbol1: 'OPV',
  symbol2: 'BNB',
  contractAddress: CONTRACT_FARM, // farm testnet
  tokenAddress1: TOKEN_ADDRESS, // opv
  tokenAddress2: WBNB[DEFAULT_CHAIN_ID].address, // wbnb
  lpTokenAddress: '0x93c4a5d89d3a5dcc3b17395f0c730e9e0ca0763d', // lps
}
