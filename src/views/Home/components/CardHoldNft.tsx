import { useMemo } from 'react'
import { Box, Flex, Image, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import ImgDecoration01 from '../images/decoration01.png'
import ImgDecoration02 from '../images/decoration02.png'

const WCardHoldNft = styled.div`
  padding: 30px 14px;
  margin-bottom: 40px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 60px;
  }

  background: #f4f9ff;
  border: 3px solid #0a79f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  border-radius: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 50px;
  }

  .condition-left {
    width: 360px;
    position: absolute;
    top: 0;
    left: -140px;
    display: none;
    ${({ theme }) => theme.mediaQueries.md} {
      display: block;
    }
  }
  .condition-right {
    width: 360px;
    position: absolute;
    top: 0;
    right: -140px;
    display: none;
    ${({ theme }) => theme.mediaQueries.md} {
      display: block;
    }
  }

  .card-hold-nft-header {
    color: #529bf0;
    font-weight: 700;
    font-size: 28px;
    line-height: 45px;
    position: relative;
    width: fit-content;
    margin-bottom: 12px;

    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 48px;
      line-height: 65px;
    }

    .card-header-label {
      color: #8a5300;
      font-weight: 700;
      font-size: 12px;
      line-height: 140%;

      padding: 1px 5px;
      margin-bottom: 20px;

      position: absolute;
      top: -10px;
      left: 110%;

      background: #ffaf51;
      border-radius: 5px;

      ${({ theme }) => theme.mediaQueries.md} {
        font-size: 16px;
      }

      &:before {
        content: '';
        position: absolute;
        left: -10px;
        top: 50%;
        transform: translateY(-50%);

        width: 10px;
        height: 10px;
        border-width: 6px;
        border-style: solid;
        border-color: transparent #ffaf51 transparent transparent;
      }
    }
  }

  .card-hold-nft-body {
    width: 100%;
    max-width: 460px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
`

const WCountDown = styled.div`
  display: flex;
  align-items: center;
`
const CardHoldNft = () => {
  const renderCountdownCard = useMemo(() => {
    return (
      <WCountDown>
        <Flex alignItems="center">
          <Box background="#529BF0" borderRadius="10px" padding="2px 8px">
            <Text color="#fff" fontSize={[10, , 24]} fontWeight={700}>
              10
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Days
          </Text>
        </Flex>
        <Flex ml="4px" alignItems="center">
          <Box background="#529BF0" borderRadius="10px" padding="2px 8px">
            <Text color="#fff" fontSize={[10, , 24]} fontWeight={700}>
              12
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Hours
          </Text>
        </Flex>
        <Flex ml="4px" alignItems="center">
          <Box background="#529BF0" borderRadius="10px" padding="2px 8px">
            <Text color="#fff" fontSize={[10, , 24]} fontWeight={700}>
              16
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Minutes
          </Text>
        </Flex>
        <Flex ml="4px" alignItems="center">
          <Box background="#529BF0" borderRadius="10px" padding="2px 8px">
            <Text color="#fff" fontSize={[10, , 24]} fontWeight={700}>
              22
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Second
          </Text>
        </Flex>
      </WCountDown>
    )
  }, [])
  return (
    <WCardHoldNft>
      <img className="condition-left" src={ImgDecoration01.src} alt="" />
      <img className="condition-right" src={ImgDecoration02.src} alt="" />
      <div className="card-hold-nft-header">
        HOLD NFT
        <div className="card-header-label">New</div>
      </div>
      <div className="card-hold-nft-body">
        <Flex justifyContent="space-between">
          <Text fontSize={[16, , 24]} fontWeight={500}>
            Reward:
          </Text>
          <Flex alignItems="center">
            <Text fontSize={[16, , 24]} fontWeight={700}>
              100,000
            </Text>
            <Box width="20px" ml="6px">
              <Image width={30} height={30} src="/images2/opvIcon.png" />
            </Box>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between">
          <Text fontSize={[16, , 24]} fontWeight={500}>
            Durations:
          </Text>
          <Text fontSize={[16, , 24]} fontWeight={700}>
            90 Days
          </Text>
        </Flex>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Text fontSize={[16, , 24]} fontWeight={500}>
            Start:
          </Text>
          <Flex>{renderCountdownCard}</Flex>
        </Flex>
      </div>
    </WCardHoldNft>
  )
}

export default CardHoldNft