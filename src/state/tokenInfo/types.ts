export interface InfoMarketPair {
  baseCurrencyId: number
  baseSymbol: string
  category: string
  depthUsdNegativeTwo: number
  depthUsdPositiveTwo: number
  effectiveLiquidity: number
  exchangeId: number
  exchangeName: string
  exchangeNotice: string
  exchangeSlug: string
  feeType: string
  lastUpdated: string
  liquidity: number
  marketId: number
  marketPair: string
  marketReputation: number
  marketScore: string
  marketUrl: string
  outlierDetected: number
  price: number
  priceExcluded: number
  quote: number
  quoteCurrencyId: number
  quoteSymbol: string
  volumeBase: number
  volumeExcluded: number
  volumeQuote: number
  volumeUsd: number
}

export interface BossTeamWalletItem {
  _id: string
  title: string
  address: string
  createdAt: number
  updatedAt: number
  deletedAt: number
}
