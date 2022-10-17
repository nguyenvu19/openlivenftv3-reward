import { useTranslation } from '@pancakeswap/localization'
import { Heading } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import styled from 'styled-components'
import CardTableMarketPlace from './components/CardTableMarketPlace'
import CardTableTeamWallet from './components/CardTableTeamWallet'
import CardTokensInfo from './components/CardTokensInfo'

const MyNftH2 = styled.div`
  font-size: 16px;
  margin: 16px 0;
  color: #007ca2;
  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 32px 0;
    font-size: 32px;
  }
`
const TokensInfo: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()
  return (
    <>
      <Container>
        <CardTokensInfo />
      </Container>

      <Container>
        <CardTableMarketPlace />
      </Container>

      <Container>
        <Heading textAlign="left" scale="xl">
          <MyNftH2>{t('Team Wallets')}</MyNftH2>
        </Heading>
        <CardTableTeamWallet />
      </Container>
    </>
  )
}

export default TokensInfo
