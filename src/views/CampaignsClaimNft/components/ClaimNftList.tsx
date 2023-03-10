import styled from 'styled-components'
import CardNftWithActionClaim from 'components/Card/CardNftWithActionClaim'
import { MyNftItem } from 'state/nfts/types'
import { CampaignItem } from 'state/campaigns/types'
import { EmptyStyled } from 'views/Campaigns/styled'
import { Button } from '@pancakeswap/uikit'

const WClaimNftList = styled.div`
  width: 100%;
  .nft-claim-content {
    display: flex;
    flex-flow: row wrap;
    row-gap: 12px;
    margin: 0 -12px;
    ${({ theme }) => theme.mediaQueries.sm} {
      row-gap: 24px;
    }
  }
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
const WTableFooter = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`

const ClaimNftList: React.FC<{
  campaign?: CampaignItem
  listNftUser?: MyNftItem[]
  total?: number
  onClaim?: (item: any, cb: () => void) => void
  handleLoadMore?: () => void
}> = ({ campaign, listNftUser, total, onClaim, handleLoadMore }) => {
  return (
    <WClaimNftList>
      {listNftUser?.length > 0 ? (
        <div className="nft-claim-content">
          {listNftUser?.map((nft) => (
            <WCardNftItem key={nft.tokenId}>
              <CardNftWithActionClaim campaign={campaign} nftItem={nft} onClaim={onClaim} />
            </WCardNftItem>
          ))}
          {listNftUser?.length > 0 && (
            <WTableFooter>
              <Button scale="sm" disabled={total <= listNftUser?.length} onClick={handleLoadMore}>
                Load More
              </Button>
            </WTableFooter>
          )}
        </div>
      ) : listNftUser === undefined ? (
        <div className="nft-claim-content">
          {[1, 2, 3].map((index) => (
            <WCardNftItem key={index}>
              <CardNftWithActionClaim />
            </WCardNftItem>
          ))}
        </div>
      ) : (
        <EmptyStyled>No Data</EmptyStyled>
      )}
    </WClaimNftList>
  )
}

export default ClaimNftList
