import Container from 'components/Layout/Container'
import CardTokensInfo from './components/CardTokensInfo'

const TokensInfo: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <Container>
        <CardTokensInfo />
      </Container>

      <Container mt={[null, null, null, '32px']}>{/* <CardNftList /> */}</Container>
    </>
  )
}

export default TokensInfo
