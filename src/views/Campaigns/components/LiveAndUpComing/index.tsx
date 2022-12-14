import { useCallback, useMemo } from 'react'
import orderBy from 'lodash/orderBy'
import { Flex, Text } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { CampaignItem, CAMPAIGN_STATUS, CAMPAIGN_TYPE } from 'state/campaigns/types'
import { EmptyStyled } from 'views/Campaigns/styled'
import CardNftVertical from '../CardNftVertical'
import CardNftVerticalReferrer from '../CardNftVerticalReferrer'
import CardIntroduceBuyNft from '../CardIntroduceBuyNft'

const WLiveAndUpComing = styled.div`
  padding-bottom: 24px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 72px;
  }
`

const LiveAndUpComing = ({ campaigns }) => {
  const router = useRouter()
  const campaignLive = useMemo(() => {
    if (campaigns) {
      let data = campaigns.filter((campaign) =>
        [CAMPAIGN_STATUS.LIVE, CAMPAIGN_STATUS.COMING].includes(campaign.status),
      )
      data = orderBy(data, ['position'], ['asc'])
      return data
    }
    return undefined
  }, [campaigns])

  const handleChangeToRouterClaim = useCallback(
    (campaign: CampaignItem) => {
      if (campaign.status === CAMPAIGN_STATUS.LIVE) {
        router.push(`${router.pathname}/claim/${campaign.id}`)
      }
    },
    [router],
  )

  return (
    <WLiveAndUpComing>
      <Flex justifyContent="center" mb={['12px', , '42px']}>
        <Text as="h2" fontSize={['16px', , '24px']} fontWeight="700" color="textSubtle">
          Live & Upcoming
        </Text>
      </Flex>
      <FlexGap gap="30px" flexDirection="column">
        {campaignLive?.length > 0 ? (
          <>
            {campaignLive?.map((campaign) => {
              switch (campaign.type) {
                case CAMPAIGN_TYPE.INTRO_BUY_NFT:
                  return <CardIntroduceBuyNft key={campaign.id} campaign={campaign} />
                case CAMPAIGN_TYPE.REFERRAL_TO_EARN:
                  return <CardNftVerticalReferrer key={campaign.id} campaign={campaign} />
                default:
                  return (
                    <CardNftVertical
                      key={campaign.id}
                      campaign={campaign}
                      style={{ cursor: campaign.status === CAMPAIGN_STATUS.LIVE ? 'pointer' : 'not-allowed' }}
                      onClickCampaign={handleChangeToRouterClaim}
                    />
                  )
              }
            })}
          </>
        ) : (
          <EmptyStyled>No Data</EmptyStyled>
        )}
      </FlexGap>
    </WLiveAndUpComing>
  )
}

export default LiveAndUpComing
