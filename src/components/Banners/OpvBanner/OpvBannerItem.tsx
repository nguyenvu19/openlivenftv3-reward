import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

const WOpvBannerItem = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  max-height: 370px;
  position: relative;
`

const OpvBannerItem = () => {
  return (
    <WOpvBannerItem>
      <Box>
        <img src="/images2/lottery.png" alt="LotteryBanner" />
      </Box>
    </WOpvBannerItem>
  )
}

export default OpvBannerItem
