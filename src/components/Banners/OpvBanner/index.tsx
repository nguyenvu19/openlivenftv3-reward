import { Heading } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { APP_USER_URL } from 'config'
import SlickCarousel from 'components/SlickCarousel'
import OpvBannerItem from './OpvBannerItem'

const WOpvBanner = styled.div`
  display: block;
  width: 100%;
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
const OpvBanner = () => {
  return (
    <WOpvBanner as="a" href={APP_USER_URL} target="_blank">
      <SlickCarousel arrows={false} dots={false} infinite speed={500} slidesToShow={1} slidesToScroll={1}>
        <OpvBannerItem />
      </SlickCarousel>
    </WOpvBanner>
  )
}

export default OpvBanner
