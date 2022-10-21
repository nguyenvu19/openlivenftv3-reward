import { useTranslation } from '@pancakeswap/localization'
import { Heading } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import styled from 'styled-components'
import CardTableMarketPlace from './components/CardTableMarketPlace'
import CardTableTeamWallets from './components/CardTableTeamWallets'
import CardTokensInfo from './components/CardTokensInfo'

const TokenInfoContainer = styled.div`
  padding-bottom: 120px;
`
const MyNftH2 = styled.div`
  color: #007ca2;
  font-size: 16px;
  margin: 16px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 32px;
    margin: 32px 0;
  }
`
const TokenInfo: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()
  return (
    <TokenInfoContainer>
      <Container mb={['24px', , '48px']}>
        <CardTokensInfo />
      </Container>

      <Container mb={['24px', , '48px']}>
        <CardTableMarketPlace />
      </Container>

      <Container>
        <Heading textAlign="left" scale="xl">
          <MyNftH2>{t('Team Wallets')}</MyNftH2>
        </Heading>
        <CardTableTeamWallets />
      </Container>
    </TokenInfoContainer>
  )
}

export default TokenInfo
