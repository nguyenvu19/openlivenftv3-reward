import Container from 'components/Layout/Container'
import styled from 'styled-components'
import ClaimNftList from './components/ClaimNftList'

const WCampaignsClaimNft = styled.div`
  padding-bottom: 100px;
`
const CampaignsClaimNft: React.FC<React.PropsWithChildren> = () => {
  return (
    <WCampaignsClaimNft>
      <Container>
        <ClaimNftList />
      </Container>
    </WCampaignsClaimNft>
  )
}

export default CampaignsClaimNft
