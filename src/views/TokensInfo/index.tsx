import { useTranslation } from '@pancakeswap/localization'
import { Heading } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import styled from 'styled-components'
import CardTableMarketPlace from './components/CardTableMarketPlace'
import CardTableTeamWallet from './components/CardTableTeamWallet'
import CardTokensInfo from './components/CardTokensInfo'

const MyNftH2 = styled(Heading)`
  font-size: 16px;
  margin-bottom: 0;
  ${({ theme }) => theme.mediaQueries.sm} {
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
          <MyNftH2 scale="lg" color="#007CA2" mt="32px" mb="32px">
            {t('Team Wallets')}
          </MyNftH2>
        </Heading>
        <CardTableTeamWallet />
      </Container>
    </>
  )
}

export default TokensInfo
