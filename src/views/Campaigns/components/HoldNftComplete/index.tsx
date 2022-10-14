import { useMemo } from 'react'
import { Flex, Heading } from '@pancakeswap/uikit'
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
      <Flex justifyContent="center" mb="40px">
        <Heading size="xxl" as="h2">
          Completed
        </Heading>
      </Flex>
      <FlexGap gap="30px" flexDirection="column">
        {campaignEnd?.length > 0 ? (
          <>
            {campaignEnd?.map((campaign) => (
              <CardNftVertical key={campaign.finish} campaign={campaign} />
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
