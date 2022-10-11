import { Flex, Heading } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import styled from 'styled-components'
import CardNftVertical from '../CardNftVertical'

const WLiveAndUpComing = styled.div`
  padding-bottom: 70px;
`

const LiveAndUpComing = () => {
  return (
    <WLiveAndUpComing>
      <Flex justifyContent="center" mb="40px">
        <Heading size="xxl" as="h2">
          Live & Upcoming
        </Heading>
      </Flex>
      <FlexGap gap="30px" flexDirection="column">
        <CardNftVertical />
        <CardNftVertical />
      </FlexGap>
    </WLiveAndUpComing>
  )
}

export default LiveAndUpComing
