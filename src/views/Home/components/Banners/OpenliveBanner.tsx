import { Button, Heading, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from 'components/NextLink'
import Image from 'next/image'
import { memo } from 'react'
import styled from 'styled-components'
import { lotteryImage } from './images'
import * as S from './Styled'

const WBanner = styled.div`
  width: 100%;
  height: 100%;
  max-height: 370px;
  position: relative;
  margin-bottom: 40px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 60px;
  }
`
const WBannerMobile = styled.div`
  padding: 30px 14px;
  background: #f4f9ff;
  border: 3px solid #0a79f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
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
        <WBannerMobile>
          <S.StyledSubheading>Hold more NFTs take more values</S.StyledSubheading>
          <S.StyledHeading scale="xl">OPENLIVENFT</S.StyledHeading>
          <NextLinkFromReactRouter to="/lottery">
            <Button>
              <Text color="invertedContrast" bold fontSize="16px" mr="4px">
                Join Now
              </Text>
            </Button>
          </NextLinkFromReactRouter>
        </WBannerMobile>
      ) : (
        <Image src={lotteryImage} alt="LotteryBanner" placeholder="blur" />
      )}
    </WBanner>
  )
}

export default memo(OpenliveBanner)
