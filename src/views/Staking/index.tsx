import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import styled from 'styled-components'
import StakingBanner from './components/StakingBanner'
import StakingList from './components/StakingList'

const WStaking = styled.div`
  min-height: calc(100vh - 186px);
  padding-bottom: 120px;
`

const Staking = () => {
  return (
    <WStaking>
      <PageMeta />

      <Container>
        <StakingBanner />
      </Container>

      <Container>
        <StakingList />
      </Container>
    </WStaking>
  )
}

export default Staking
