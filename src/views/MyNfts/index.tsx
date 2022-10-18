import Container from 'components/Layout/Container'
import { useGraphMyNftsList } from 'state/nfts/hooks'
import { OptionProps } from 'components/Select/Select'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import ConnectWallet from 'components/ConnectWallet'
import CardNftList from './components/CardNftList'
import CardListHeading from './components/CardListHeading'

const MyNftPage: React.FC<React.PropsWithChildren> = () => {
  const { account } = useActiveWeb3React()
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
        {account ? (
          <CardNftList total={myNftsList.total} myNftsList={myNftsList.data} handleLoadMore={handleLoadMore} />
        ) : (
          <ConnectWallet />
        )}
      </Container>
    </>
  )
}

export default MyNftPage
