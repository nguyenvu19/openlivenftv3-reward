import { Button, Heading, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { NextLinkFromReactRouter } from 'components/NextLink'
import Image from 'next/image'
import { memo } from 'react'
import styled from 'styled-components'
import { lotteryImage, lotteryMobileImage } from './images'
import * as S from './Styled'

const WBanner = styled.div`
  width: 100%;
  min-height: 300px;
  position: relative;
`
const RightWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
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
  const { isMobile, isDesktop } = useMatchBreakpoints()
  return (
    <S.Wrapper>
      <S.Inner>
        <WBanner>
          {isMobile && (
            <S.LeftWrapper>
              <S.StyledSubheading>Hold more NFTs take more values</S.StyledSubheading>
              <S.StyledHeading scale="xl">OPENLIVENFT</S.StyledHeading>
              <NextLinkFromReactRouter to="/lottery">
                <Button>
                  <Text color="invertedContrast" bold fontSize="16px" mr="4px">
                    Join Now
                  </Text>
                </Button>
              </NextLinkFromReactRouter>
            </S.LeftWrapper>
          )}
          <RightWrapper>
            {isDesktop ? (
              <Image src={lotteryImage} alt="LotteryBanner" placeholder="blur" />
            ) : (
              <Image
                className="mobile"
                src={lotteryMobileImage}
                alt="LotteryBanner"
                width={190}
                height={144}
                placeholder="blur"
              />
            )}
          </RightWrapper>
        </WBanner>
      </S.Inner>
    </S.Wrapper>
  )
}

export default memo(OpenliveBanner)
