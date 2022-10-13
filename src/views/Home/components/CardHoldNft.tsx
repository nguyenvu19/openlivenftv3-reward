import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Image, Skeleton, Text } from '@pancakeswap/uikit'
import CurrencyFormat from 'react-currency-format'
import styled from 'styled-components'
import useCountTime, { STEEP_COUNT } from 'hooks/useCountTime'
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
const CardHoldNft = ({ campaignNew }) => {
  const router = useRouter()
  const { weekdays, days, hours, minutes, seconds, step } = useCountTime(campaignNew?.start, campaignNew?.finish)

  const renderCountdownCard = useMemo(() => {
    return (
      <WCountDown>
        <Flex alignItems="center">
          <Box
            background="#529BF0"
            borderRadius="10px"
            padding="2px 8px"
            minWidth={['10px', , '40px']}
            style={{ textAlign: 'center' }}
          >
            <Text color="#fff" fontSize={[10, , 24]} fontWeight={700}>
              {weekdays * 7 + days}
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Days
          </Text>
        </Flex>
        <Flex ml="4px" alignItems="center">
          <Box
            background="#529BF0"
            borderRadius="10px"
            padding="2px 8px"
            minWidth={['10px', , '40px']}
            style={{ textAlign: 'center' }}
          >
            <Text color="#fff" fontSize={[10, , 24]} fontWeight={700}>
              {hours}
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Hours
          </Text>
        </Flex>
        <Flex ml="4px" alignItems="center">
          <Box
            background="#529BF0"
            borderRadius="10px"
            padding="2px 8px"
            minWidth={['10px', , '40px']}
            style={{ textAlign: 'center' }}
          >
            <Text color="#fff" fontSize={[10, , 24]} fontWeight={700}>
              {minutes}
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Minutes
          </Text>
        </Flex>
        <Flex ml="4px" alignItems="center">
          <Box
            background="#529BF0"
            borderRadius="10px"
            padding="2px 8px"
            minWidth={['10px', , '40px']}
            style={{ textAlign: 'center' }}
          >
            <Text color="#fff" fontSize={[10, , 24]} fontWeight={700}>
              {seconds}
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Second
          </Text>
        </Flex>
      </WCountDown>
    )
  }, [weekdays, days, hours, minutes, seconds])

  if (!campaignNew) {
    return (
      <WCardHoldNft style={{ cursor: 'not-allowed' }}>
        <Skeleton height={['160px', , '230px']} />
      </WCardHoldNft>
    )
  }
  return (
    <WCardHoldNft style={{ cursor: 'pointer' }} onClick={() => router.push('/campaigns')}>
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
              {campaignNew !== undefined ? (
                <CurrencyFormat
                  value={campaignNew?.totalPool}
                  displayType="text"
                  thousandSeparator
                  suffix={` USDT`}
                  renderText={(t) => t}
                />
              ) : (
                '--'
              )}
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
            {`${campaignNew ? campaignNew.duration : '--'} Days`}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" flexWrap="wrap">
          <Text fontSize={[16, , 24]} fontWeight={500}>
            {(() => {
              if (step === STEEP_COUNT.SOON) return 'Start in:'
              if (step === STEEP_COUNT.START) return 'End in:'
              return 'Ended:'
            })()}
          </Text>
          <Flex>{renderCountdownCard}</Flex>
        </Flex>
      </div>
    </WCardHoldNft>
  )
}

export default CardHoldNft
