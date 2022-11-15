import { useCallback, useMemo } from 'react'
import { Flex, Text } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { CampaignItem, CAMPAIGN_STATUS } from 'state/campaigns/types'
import { EmptyStyled } from 'views/Campaigns/styled'
import CardNftVertical from '../CardNftVertical'
import CardNftVerticalReferrer from '../CardNftVerticalReferrer'

const WLiveAndUpComing = styled.div`
  padding-bottom: 24px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 72px;
  }
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
      <Flex justifyContent="center" mb={['12px', , '42px']}>
        <Text as="h2" fontSize={['16px', , '24px']} fontWeight="700" color="textSubtle">
          Live & Upcoming
        </Text>
      </Flex>
      <FlexGap gap="30px" flexDirection="column">
        <CardNftVerticalReferrer
          campaign={{
            currentPool: 2.51,
            duration: 7776000000,
            finish: 1674175933000,
            id: 1,
            loading: false,
            start: 1666399933000,
            status: 1,
            totalPool: 100000,
          }}
        />
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
