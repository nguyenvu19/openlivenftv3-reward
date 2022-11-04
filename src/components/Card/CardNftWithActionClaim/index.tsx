import { useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Button, Flex, Skeleton, Text } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import MediaCard from 'components/MediaCard'
import { CampaignItem } from 'state/campaigns/types'
import { MyNftItem } from 'state/nfts/types'
import styled from 'styled-components'
import useNftMetaDataByUrl from 'state/nfts/fetchNftMetaDataByUrl'
import { useAvailableClaim, useCheckIsNftClaimed } from 'state/campaigns/hooks'
import FormatAmount from 'components/FormatAmount'

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
  nftItem?: MyNftItem
  onClaim?: (item: any, cb: () => void) => void
}> = ({ campaign, nftItem, onClaim }) => {
  const [loading, setLoading] = useState(false)

  const nftMetaData = useNftMetaDataByUrl(nftItem?.tokenUri)

  /* Check is claimed */
  const { isClaimed, fetchClaimTime } = useCheckIsNftClaimed(campaign?.id, nftItem?.tokenId)
  const { availableClaim, fetchAvailableClaim } = useAvailableClaim(campaign?.id, nftItem?.tokenId)

  const handleClaimNow = () => {
    if (campaign && nftItem) {
      setLoading(true)
      onClaim({ nftItem, campaign }, () => {
        fetchClaimTime()
        fetchAvailableClaim()
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
        <MediaCard fileUrl={nftMetaData?.image} />
      </div>
      <div className="card-nft-body">
        <Text fontSize={['16px', , '24px']} fontWeight="bold" mb={['14px']}>
          NFT ID: {nftItem ? nftItem.tokenId : <Skeleton height="14px" width="80px" />}
        </Text>
        <FlexGap flexDirection="column" rowGap="10px">
          <Flex justifyContent="space-between">
            <Text fontSize={['13px', , '16px']}>Total Reward:</Text>
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
              {availableClaim !== undefined ? (
                <FormatAmount value={availableClaim} suffix={` OPV`} />
              ) : (
                <Skeleton height="14px" width="80px" />
              )}
            </Text>
          </Flex>
        </FlexGap>
      </div>
      <div className="card-nft-footer">
        <Flex justifyContent="center">
          {isClaimed ? (
            <Button scale="sm" disabled>
              CLAIMED
            </Button>
          ) : (
            <Button scale="sm" isLoading={loading} onClick={handleClaimNow}>
              CLAIM NOW
            </Button>
          )}
        </Flex>
      </div>
    </WCardNftWithActionClaim>
  )
}

export default CardNftWithActionClaim
