import { useMemo } from 'react'
import { Flex, Text } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import styled from 'styled-components'
import { CAMPAIGN_STATUS, CAMPAIGN_TYPE } from 'state/campaigns/types'
import { EmptyStyled } from 'views/Campaigns/styled'
import CardNftVertical from '../CardNftVertical'
import CardIntroduceBuyNft from '../CardIntroduceBuyNft'
import CardNftVerticalReferrer from '../CardNftVerticalReferrer'

const WHoldNftComplete = styled.div`
  padding-bottom: 100px;
`

const HoldNftComplete = ({ campaigns }) => {
  const campaignEnd = useMemo(
    () => campaigns?.filter((campaign) => campaign.status === CAMPAIGN_STATUS.END),
    [campaigns],
  )
  return (
    <WHoldNftComplete>
      <Flex justifyContent="center" mb={['12px', , '42px']}>
        <Text as="h2" fontSize={['16px', , '24px']} fontWeight="700" color="textSubtle">
          Completed
        </Text>
      </Flex>
      <FlexGap gap="30px" flexDirection="column">
        <div id="RenderCardIntroBuyNftComplete" />

        {campaignEnd?.length > 0 ? (
          <>
            {campaignEnd?.map((campaign) => {
              switch (campaign.type) {
                case CAMPAIGN_TYPE.INTRO_BUY_NFT:
                  return <CardIntroduceBuyNft key={campaign.id} campaign={campaign} />
                case CAMPAIGN_TYPE.REFERRAL_TO_EARN:
                  return <CardNftVerticalReferrer key={campaign.id} campaign={campaign} />
                default:
                  return <CardNftVertical key={campaign.finish} campaign={campaign} style={{ cursor: 'not-allowed' }} />
              }
            })}
          </>
        ) : (
          <EmptyStyled>No Data</EmptyStyled>
        )}
      </FlexGap>
    </WHoldNftComplete>
  )
}

export default HoldNftComplete
