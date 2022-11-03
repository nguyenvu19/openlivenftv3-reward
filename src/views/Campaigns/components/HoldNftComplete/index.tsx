import { useMemo } from 'react'
import { Flex, Heading, Text } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import styled from 'styled-components'
import { CAMPAIGN_STATUS } from 'state/campaigns/types'
import { EmptyStyled } from 'views/Campaigns/styled'
import CardNftVertical from '../CardNftVertical'

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
        {campaignEnd?.length > 0 ? (
          <>
            {campaignEnd?.map((campaign) => (
              <CardNftVertical key={campaign.finish} campaign={campaign} style={{ cursor: 'not-allowed' }} />
            ))}
          </>
        ) : (
          <EmptyStyled>No Data</EmptyStyled>
        )}
      </FlexGap>
    </WHoldNftComplete>
  )
}

export default HoldNftComplete
