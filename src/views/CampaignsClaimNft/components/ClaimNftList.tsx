import styled from 'styled-components'
import CardNftWithActionClaim from 'components/Card/CardNftWithActionClaim'

const WClaimNftList = styled.div`
  display: flex;
  flex-flow: row wrap;
  row-gap: 24px;
  margin: 0 -6px;
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
const ClaimNftList = () => {
  return (
    <WClaimNftList>
      {[1, 2, 3, 3, 4, 5, 6, 7].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <WCardNftItem key={index}>
          <CardNftWithActionClaim />
        </WCardNftItem>
      ))}
    </WClaimNftList>
  )
}

export default ClaimNftList
