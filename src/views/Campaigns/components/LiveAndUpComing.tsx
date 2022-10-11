import { Heading } from '@pancakeswap/uikit'
import styled from 'styled-components'

const WLiveAndUpComing = styled.div`
  padding: 30px 14px;
  margin-bottom: 40px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 60px;
  }
`

const LiveAndUpComing = () => {
  return (
    <WLiveAndUpComing>
      <Heading>Live & Upcoming</Heading>
    </WLiveAndUpComing>
  )
}

export default LiveAndUpComing
