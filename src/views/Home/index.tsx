import Container from 'components/Layout/Container'
import { usePollCoreCampaignsData, useCampaigns } from 'state/campaigns/hooks'
import { useOtherCurrencyList } from 'state/currency/hooks'
import MetricsSection from './components/MetricsSection'
import OpenliveBanner from './components/Banners/OpenliveBanner'
import CardHoldNft from './components/CardHoldNft'
import CardNftList from './components/CardNftList'

const Home: React.FC<React.PropsWithChildren> = () => {
  useOtherCurrencyList() // list currency data
  usePollCoreCampaignsData() // list campaign data

  const { data: campaigns } = useCampaigns()

  return (
    <>
      <Container>
        <OpenliveBanner />
      </Container>

      <Container>
        <CardHoldNft campaignNew={campaigns?.[campaigns.length - 1]} />
      </Container>

      <Container>
        <CardNftList />
      </Container>

      <Container>
        <MetricsSection />
      </Container>
    </>
  )
}

export default Home
