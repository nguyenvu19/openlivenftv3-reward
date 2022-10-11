import { Flex, Heading } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import CardNftVertical from '../CardNftVertical'

const WLiveAndUpComing = styled.div`
  padding-bottom: 70px;
`

const LiveAndUpComing = () => {
  const router = useRouter()
  return (
    <WLiveAndUpComing>
      <Flex justifyContent="center" mb="40px">
        <Heading size="xxl" as="h2">
          Live & Upcoming
        </Heading>
      </Flex>
      <FlexGap gap="30px" flexDirection="column">
        <CardNftVertical onClick={() => router.push(`${router.pathname}/claim`)} />
        <CardNftVertical />
      </FlexGap>
    </WLiveAndUpComing>
  )
}

export default LiveAndUpComing
