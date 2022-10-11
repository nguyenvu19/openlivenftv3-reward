import { PageMeta } from 'components/Layout/Page'
import Container from 'components/Layout/Container'
import OpenliveBanner from './components/Banners/OpenliveBanner'
import LiveAndUpComing from './components/LiveAndUpComing'
import HoldNftComplete from './components/HoldNftComplete'

const Campaigns: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <PageMeta />

      <Container>
        <OpenliveBanner />
      </Container>

      <Container>
        <LiveAndUpComing />
      </Container>

      <Container>
        <HoldNftComplete />
      </Container>
    </>
  )
}

export default Campaigns
