import { useCallback, useMemo } from 'react'
import { Flex, Heading } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { CampaignItem, CAMPAIGN_STATUS } from 'state/campaigns/types'
import { EmptyStyled } from 'views/Campaigns/styled'
import CardNftVertical from '../CardNftVertical'

const WLiveAndUpComing = styled.div`
  padding-bottom: 70px;
`

const LiveAndUpComing = ({ campaigns }) => {
  const router = useRouter()
  const campaignLive = useMemo(
    () => campaigns?.filter((campaign) => [CAMPAIGN_STATUS.LIVE, CAMPAIGN_STATUS.COMING].includes(campaign.status)),
    [campaigns],
  )

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
      <Flex justifyContent="center" mb="40px">
        <Heading size="xxl" as="h2">
          Live & Upcoming
        </Heading>
      </Flex>
      <FlexGap gap="30px" flexDirection="column">
        {campaignLive?.length > 0 ? (
          <>
            {campaignLive?.map((campaign) => (
              <CardNftVertical
                key={campaign.finish}
                campaign={campaign}
                style={{ cursor: campaign.status === CAMPAIGN_STATUS.LIVE ? 'pointer' : 'not-allowed' }}
                onClickCampaign={handleChangeToRouterClaim}
              />
            ))}
          </>
        ) : (
          <EmptyStyled>No Data</EmptyStyled>
        )}
      </FlexGap>
    </WLiveAndUpComing>
  )
}

export default LiveAndUpComing
