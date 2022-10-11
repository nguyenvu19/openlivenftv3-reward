import { PageMeta } from 'components/Layout/Page'
import Container from 'components/Layout/Container'
import CardNftDetailVertical from './CardNftDetailVetical'

const CardNftDetailPage: React.FC<React.PropsWithChildren> = () => {
  return (
    <>
      <Container>
        <CardNftDetailVertical />
      </Container>
    </>
  )
}

export default CardNftDetailPage
