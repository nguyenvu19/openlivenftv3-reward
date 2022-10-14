import { PageMeta } from 'components/Layout/Page'
import Container from 'components/Layout/Container'
import { useCampaigns, usePollCoreCampaignsData } from 'state/campaigns/hooks'
import OpenliveBanner from './components/Banners/OpenliveBanner'
import LiveAndUpComing from './components/LiveAndUpComing'
import HoldNftComplete from './components/HoldNftComplete'

const Campaigns: React.FC<React.PropsWithChildren> = () => {
  usePollCoreCampaignsData() // list campaign data

  const { data: campaigns } = useCampaigns()

  return (
    <>
      <PageMeta />

      <Container>
        <OpenliveBanner />
      </Container>

      <Container>
        <LiveAndUpComing campaigns={campaigns} />
      </Container>

      <Container>
        <HoldNftComplete campaigns={campaigns} />
      </Container>
    </>
  )
}

export default Campaigns
