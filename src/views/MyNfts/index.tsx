import Container from 'components/Layout/Container'
import { useGraphMyNftsList } from 'state/nfts/hooks'
import { OptionProps } from 'components/Select/Select'
import CardNftList from './components/CardNftList'
import CardListHeading from './components/CardListHeading'

const MyNftPage: React.FC<React.PropsWithChildren> = () => {
  const { myNftsList, setParamsNftsList } = useGraphMyNftsList()

  const onOptionChange = (option: OptionProps) => {
    setParamsNftsList((prev) => ({ ...prev, rareName: option.value }))
  }
  const handleLoadMore = () => {
    setParamsNftsList((prev) => ({ ...prev, total: prev.total + prev.pageSize }))
  }

  return (
    <>
      <Container>
        <CardListHeading onOptionChange={onOptionChange} />
      </Container>

      <Container mt={[null, null, null, '32px']}>
        <CardNftList total={myNftsList.total} myNftsList={myNftsList.data} handleLoadMore={handleLoadMore} />
      </Container>
    </>
  )
}

export default MyNftPage
