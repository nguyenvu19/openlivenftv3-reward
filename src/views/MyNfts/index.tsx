import styled from 'styled-components'
import Container from 'components/Layout/Container'
import { useGraphMyNftsList } from 'state/nfts/hooks'
import { OptionProps } from 'components/Select/Select'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import ConnectWallet from 'components/ConnectWallet'
import CardNftList from './components/CardNftList'
import CardListHeading from './components/CardListHeading'

const WMyNftPage = styled.div`
  padding-bottom: 120px;
`

const MyNftPage: React.FC<React.PropsWithChildren> = () => {
  const { account } = useActiveWeb3React()
  const { myNftsList, setParamsNftsList } = useGraphMyNftsList(account)

  const onOptionChange = (option: OptionProps) => {
    setParamsNftsList((prev) => ({ ...prev, rareName: option.value }))
  }
  const handleLoadMore = () => {
    setParamsNftsList((prev) => ({ ...prev, total: prev.total + prev.pageSize }))
  }

  return (
    <WMyNftPage>
      <Container>
        <CardListHeading onOptionChange={onOptionChange} />
      </Container>

      <Container mt={['12px', null, null, '16px']}>
        {account ? (
          <CardNftList total={myNftsList.total} myNftsList={myNftsList.data} handleLoadMore={handleLoadMore} />
        ) : (
          <ConnectWallet />
        )}
      </Container>
    </WMyNftPage>
  )
}

export default MyNftPage
