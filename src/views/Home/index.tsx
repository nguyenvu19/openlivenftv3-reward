import PageSection from 'components/PageSection'
import { PageMeta } from 'components/Layout/Page'
import Container from 'components/Layout/Container'
import MetricsSection from './components/MetricsSection'
import OpenliveBanner from './components/Banners/OpenliveBanner'
import CardHoldNft from './components/CardHoldNft'
import CardNftList from './components/CardNftList'

const Home: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <PageMeta />

      <Container>
        <OpenliveBanner />
      </Container>

      <Container>
        <CardHoldNft />
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
