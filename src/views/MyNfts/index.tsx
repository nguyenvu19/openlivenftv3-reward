import Container from 'components/Layout/Container'
import CardNftList from './components/CardNftList'
import CardListHeading from './components/CardListHeading'

const MyNftPage: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <Container>
        <CardListHeading />
      </Container>

      <Container mt={[null, null, null, '32px']}>
        <CardNftList />
      </Container>
    </>
  )
}

export default MyNftPage
