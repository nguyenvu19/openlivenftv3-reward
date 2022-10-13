import { CHAIN_IDS } from 'utils/wagmi'
import TokensInfo from 'views/TokensInfo'

const TokenInfo = () => {
  return <TokensInfo />
}

TokenInfo.chains = CHAIN_IDS

export default TokenInfo
