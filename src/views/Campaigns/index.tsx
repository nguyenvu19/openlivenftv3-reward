import { PageMeta } from 'components/Layout/Page'
import Container from 'components/Layout/Container'
import OpenliveBanner from './components/Banners/OpenliveBanner'
import LiveAndUpComing from './components/LiveAndUpComing'

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
    </>
  )
}

export default Campaigns
