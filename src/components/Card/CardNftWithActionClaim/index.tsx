import { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Button, Flex, Skeleton, Text } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import MediaCard from 'components/MediaCard'
import { CampaignItem } from 'state/campaigns/types'
import { NftType } from 'state/nfts/types'
import styled from 'styled-components'

const WCardNftWithActionClaim = styled.div`
  background: #eefbff;
  border: 1px solid #00438e;
  box-shadow: 8px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  overflow: hidden;

  .card-nft-cover {
    max-width: 100%;
    text-align: center;
    img {
      width: 100%;
    }
  }

  .card-nft-body {
    padding: 24px;
  }

  .card-nft-footer {
    padding: 0 12px 12px;
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
        <MediaCard fileUrl="https://s3.ap-southeast-1.amazonaws.com/openlivenft/investPackage/TOPAZ.mp4" />
      </div>
      <div className="card-nft-body">
        <Text fontSize={[20]} fontWeight="bold" mb="14px">
          NFT By: {nftItem ? nftItem.token_id : <Skeleton height="14px" width="80px" />}
        </Text>
        <FlexGap flexDirection="column" rowGap="10px">
          <Flex justifyContent="space-between">
            <Text>Total Reward By:</Text>
            <Text fontWeight="bold">
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
            <Text>Total Claimed:</Text>
            <Text fontWeight="bold">
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
            <Text>Avaible Claim:</Text>
            <Text fontWeight="bold">
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
