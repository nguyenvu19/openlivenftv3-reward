import styled from 'styled-components'
import CardNftWithID from 'components/Card/CardNftWithID'
import { MyNftItem } from 'state/nfts/types'
import { Button } from '@pancakeswap/uikit'

const WCardMyNftList = styled.div`
  display: flex;
  row-gap: 24px;
  margin: 0 -6px;
  flex-flow: row wrap;
  padding-bottom: 100px;
`
const WCardNftItem = styled.div`
  width: 100%;
  padding: 0 12px 12px;
  flex: 1 1 100%;
  max-width: 100%;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 1 50%;
    max-width: 50%;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex: 1 1 33.33%;
    max-width: 33.33%;
  }
`
const EmptyStyled = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 24px;
  background: #eefbff;
  border: 1px solid rgba(67, 108, 255, 0.3);
  border-radius: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
`
const WTableFooter = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`

interface Props {
  total: number
  myNftsList?: MyNftItem[]
  handleLoadMore: () => void
}
const CardMyNftList: React.FC<Props> = ({ total, myNftsList, handleLoadMore }) => {
  return (
    <WCardMyNftList>
      {myNftsList?.length > 0 ? (
        <>
          {myNftsList.map((myInvestItem) => (
            <WCardNftItem key={myInvestItem.id}>
              <CardNftWithID myInvestItem={myInvestItem} />
            </WCardNftItem>
          ))}
          {myNftsList?.length > 0 && (
            <WTableFooter>
              <Button scale="sm" disabled={total > myNftsList?.length} onClick={handleLoadMore}>
                Load More
              </Button>
            </WTableFooter>
          )}
        </>
      ) : myNftsList === undefined ? (
        <>
          {[1, 2, 3].map((index) => (
            <WCardNftItem key={index}>
              <CardNftWithID />
            </WCardNftItem>
          ))}
        </>
      ) : (
        <EmptyStyled>No Data</EmptyStyled>
      )}
    </WCardMyNftList>
  )
}

export default CardMyNftList
