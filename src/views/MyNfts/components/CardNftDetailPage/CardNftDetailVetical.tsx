import { useMemo } from 'react'
import { Box, Flex, Grid, Image, Text } from '@pancakeswap/uikit'
import MediaCard from 'components/MediaCard'
import styled from 'styled-components'

const WCardNftVertical = styled.div`
  width: 100%;
  padding: 24px;
  background: #eefbff;
  border: 1px solid rgba(67, 108, 255, 0.3);
  border-radius: 24px;
  cursor: pointer;

  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    gap: 60px;
  }
  .card-nft-cover-left {
    width: 100%;
    max-width: 100%;

    ${({ theme }) => theme.mediaQueries.sm} {
      max-width: 240px;
    }
  }

  .card-hold-nft-body {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    ${({ theme }) => theme.mediaQueries.sm} {
      row-gap: 16px;
    }
  }
`
const CardSubHeading = styled.div`
  width: fit-content;
  position: relative;
  .tag-name {
    font-weight: 700;
    font-size: 12px;
    line-height: 140%;
    min-width: 60px;
    text-align: center;
    padding: 1px 5px;
    margin-bottom: 20px;
    position: absolute;
    top: 0px;
    left: 116%;
    border-radius: 5px;

    &.upcoming {
      color: #fff;
      background: #ffaf51;
      &:before {
        border-color: transparent #ffaf51 transparent transparent;
      }
    }
    &.live {
      color: #fff;
      background: #008d0e;
      &:before {
        border-color: transparent #008d0e transparent transparent;
      }
    }
    &.finish {
      color: #fff;
      background: #d71515;
      &:before {
        border-color: transparent #d71515 transparent transparent;
      }
    }
  }
`
const WCountDown = styled.div`
  display: flex;
  align-items: center;
`
const CardNftDetailVertical = (props) => {
  const renderCountdownCard = useMemo(() => {
    return (
      <WCountDown>
        <Flex alignItems="center">
          <Box background="#529BF0" borderRadius="10px" padding="2px 8px">
            <Text color="#fff" fontSize={[10, , 24]} bold>
              10
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Days
          </Text>
        </Flex>
        <Flex ml="4px" alignItems="center">
          <Box background="#529BF0" borderRadius="10px" padding="2px 8px">
            <Text color="#fff" fontSize={[10, , 24]} bold>
              12
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Hours
          </Text>
        </Flex>
        <Flex ml="4px" alignItems="center">
          <Box background="#529BF0" borderRadius="10px" padding="2px 8px">
            <Text color="#fff" fontSize={[10, , 24]} bold>
              16
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Minutes
          </Text>
        </Flex>
        <Flex ml="4px" alignItems="center">
          <Box background="#529BF0" borderRadius="10px" padding="2px 8px">
            <Text color="#fff" fontSize={[10, , 24]} bold>
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
    <WCardNftVertical {...props}>
      <div className="card-nft-cover-left">
        <MediaCard fileUrl="abc.mp4" />
      </div>
      <Box>
        <CardSubHeading>
          <Text color="#292929" fontWeight="700" fontSize="24px" mb="10px">
            HEMATITE
          </Text>
        </CardSubHeading>
        <Text color="rgba(41, 41, 41, 0.6)" fontWeight="400" fontSize="16px" mb="10px">
          This NFT will give you some unique benefits.
        </Text>
        <div className="card-hold-nft-body">
          <Grid gridTemplateColumns={['1fr 1fr', , '1fr 2fr']}>
            <Text fontSize={[13, , 16]}>Total Reward:</Text>
            <Flex alignItems="center">
              <Text fontSize={[13, , 16]} bold>
                100,000
              </Text>
              <Box width="20px" ml="6px">
                <Image width={30} height={30} src="/images2/opvIcon.png" />
              </Box>
            </Flex>
          </Grid>
          <Grid gridTemplateColumns={['1fr 1fr', , '1fr 2fr']}>
            <Text fontSize={[13, , 16]}>Total Claimed:</Text>
            <Text fontSize={[13, , 16]} bold>
              0 OPV
            </Text>
          </Grid>
          <Grid gridTemplateColumns={['1fr 1fr', , '1fr 2fr']}>
            <Text fontSize={[13, , 16]}>Durations:</Text>
            <Text fontSize={[13, , 16]} bold>
              90 Days
            </Text>
          </Grid>
          <Grid gridTemplateColumns={['1fr 1fr', , '1fr 2fr']}>
            <Text fontSize={[13, , 16]}>Start:</Text>
            <Text fontSize={[13, , 16]} bold>
              Sep 30 2022
            </Text>
          </Grid>

          <Grid gridTemplateColumns={['1fr', '1fr 2fr']} gridTemplateRows="26px">
            <Text fontSize={[13, , 16]}>Status:</Text>
            <Flex>{renderCountdownCard}</Flex>
          </Grid>
        </div>
      </Box>
    </WCardNftVertical>
  )
}

export default CardNftDetailVertical
