import styled from 'styled-components'
import { Heading, useMatchBreakpoints } from '@pancakeswap/uikit'

const WBanner = styled.div`
  width: 100%;
  height: 100%;
  max-height: 370px;
  position: relative;
  margin-bottom: 24px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 60px;
  }
`

export const StyledSubheading = styled(Heading)`
  font-size: 20px;
  color: white;
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 24px;
    &.lottery {
      font-size: 20px;
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    -webkit-text-stroke: unset;
  }
  margin-bottom: 8px;
`
const OpenliveBanner = () => {
  const { isMobile } = useMatchBreakpoints()
  return (
    <WBanner>
      {isMobile ? (
        <img src="/images2/lottery.png" alt="LotteryBanner" />
      ) : (
        <img src="/images2/lottery.png" alt="LotteryBanner" />
      )}
    </WBanner>
  )
}

export default OpenliveBanner
