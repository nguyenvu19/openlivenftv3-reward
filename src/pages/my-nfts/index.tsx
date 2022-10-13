import { CHAIN_IDS } from 'utils/wagmi'
import MyNfts from '../../views/MyNfts'

const MyNftPage = () => {
  return <MyNfts />
}

MyNftPage.chains = CHAIN_IDS

export default MyNftPage
