import { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Button, Flex, Skeleton, Text } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import MediaCard from 'components/MediaCard'
import { CampaignItem } from 'state/campaigns/types'
import { NftType } from 'state/nfts/types'
import styled from 'styled-components'
import useNftMetaDataByUrl from 'state/nfts/fetchNftMetaDataByUrl'

const WCardNftWithActionClaim = styled.div`
  background: #eefbff;
  border: 1px solid rgba(67, 108, 255, 0.3);
  border-radius: 12px;

  overflow: hidden;
  ${({ theme }) => theme.mediaQueries.sm} {
    background: #eefbff;
    border: 1px solid #00438e;
    box-shadow: 8px 10px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }

  .card-nft-cover {
    max-width: 100%;
    text-align: center;
    img {
      width: 100%;
    }
  }

  .card-nft-body {
    padding: 14px;
    ${({ theme }) => theme.mediaQueries.sm} {
      padding: 24px;
    }
  }

  .card-nft-footer {
    padding: 12px 12px 20px;
  }
`

const CardNftWithActionClaim: React.FC<{
  campaign?: CampaignItem
  nftItem?: NftType
  onClaim?: (item: any, cb: () => void) => void
}> = ({ campaign, nftItem, onClaim }) => {
  const [loading, setLoading] = useState(false)
  const handleClaimNow = () => {
    if (campaign && nftItem) {
      setLoading(true)
      onClaim({ nftItem, campaign }, () => {
        setLoading(false)
      })
    }
  }

  const nftMetaData = useNftMetaDataByUrl(nftItem?.token_uri)

  if (!nftItem) {
    return (
      <WCardNftWithActionClaim>
        <Skeleton height={515} />
      </WCardNftWithActionClaim>
    )
  }
  return (
    <WCardNftWithActionClaim>
      <div className="card-nft-cover">
        <MediaCard fileUrl={nftMetaData?.image} />
      </div>
      <div className="card-nft-body">
        <Text fontSize={['16px', , '24px']} fontWeight="bold" mb={['14px']}>
          NFT By: {nftItem ? nftItem.token_id : <Skeleton height="14px" width="80px" />}
        </Text>
        <FlexGap flexDirection="column" rowGap="10px">
          <Flex justifyContent="space-between">
            <Text fontSize={['13px', , '16px']}>Total Reward By:</Text>
            <Text fontSize={['13px', , '16px']} fontWeight="bold">
              {campaign ? (
                <CurrencyFormat
                  value={campaign.totalPool}
                  displayType="text"
                  thousandSeparator
                  suffix={` OPV`}
                  renderText={(t) => t}
                />
              ) : (
                <Skeleton height="14px" width="80px" />
              )}
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize={['13px', , '16px']}>Total Claimed:</Text>
            <Text fontSize={['13px', , '16px']} fontWeight="bold">
              {campaign ? (
                <CurrencyFormat
                  value={campaign.currentPool}
                  displayType="text"
                  thousandSeparator
                  suffix={` OPV`}
                  renderText={(t) => t}
                />
              ) : (
                <Skeleton height="14px" width="80px" />
              )}
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize={['13px', , '16px']}>Available Claim:</Text>
            <Text fontSize={['13px', , '16px']} fontWeight="bold">
              {campaign ? (
                <CurrencyFormat
                  value={campaign.totalPool - campaign.currentPool}
                  displayType="text"
                  thousandSeparator
                  suffix={` OPV`}
                  renderText={(t) => t}
                />
              ) : (
                <Skeleton height="14px" width="80px" />
              )}
            </Text>
          </Flex>
        </FlexGap>
      </div>
      <div className="card-nft-footer">
        <Flex justifyContent="center">
          <Button scale="sm" isLoading={loading} onClick={handleClaimNow}>
            CLAIM NOW
          </Button>
          {/* <Button scale="sm" disabled>
            CLAIMED
          </Button> */}
        </Flex>
      </div>
    </WCardNftWithActionClaim>
  )
}

export default CardNftWithActionClaim
