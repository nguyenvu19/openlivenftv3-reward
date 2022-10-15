import Container from 'components/Layout/Container'
import { useMyInvestList } from 'state/invest/hooks'
import { OptionProps } from 'components/Select/Select'
import CardNftList from './components/CardNftList'
import CardListHeading from './components/CardListHeading'

const MyNftPage: React.FC<React.PropsWithChildren> = () => {
  const { myInvestList, setParamsMyInvestList } = useMyInvestList()
  const onOptionChange = (option: OptionProps) => {
    setParamsMyInvestList((prev) => ({ ...prev, nft_name: option.value }))
  }
  return (
    <>
      <Container>
        <CardListHeading onOptionChange={onOptionChange} />
      </Container>

      <Container mt={[null, null, null, '32px']}>
        <CardNftList myInvestList={myInvestList} />
      </Container>
    </>
  )
}

export default MyNftPage
