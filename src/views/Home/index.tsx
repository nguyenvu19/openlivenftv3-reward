import Container from 'components/Layout/Container'
import { usePollCoreCampaignsData, useCampaigns } from 'state/campaigns/hooks'
import { useOtherCurrencyList } from 'state/otherCurrency/hooks'
import OpvBanner from 'components/Banners/OpvBanner'
import MetricsSection from './components/MetricsSection'
import CardHoldNft from './components/CardHoldNft'
import CardNftList from './components/CardNftList'

const Home: React.FC<React.PropsWithChildren> = () => {
  useOtherCurrencyList() // list currency data
  usePollCoreCampaignsData() // list campaign data

  const { data: campaigns } = useCampaigns()

  return (
    <>
      <Container>
        <OpvBanner />
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
