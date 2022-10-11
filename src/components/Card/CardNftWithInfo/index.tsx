import { Box, Flex, Text } from '@pancakeswap/uikit'
import Column from 'components/Layout/Column'
import { FlexGap } from 'components/Layout/Flex'
import MediaCard from 'components/MediaCard'
import styled from 'styled-components'

const WCardNftWithInfo = styled.div`
  background: #eefbff;
  border: 1px solid #00438e;
  box-shadow: 8px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  overflow: hidden;

  .card-nft-cover {
    max-width: 100%;
    text-align: center;
    img {
      width: 100%;
    }
  }

  .card-nft-body {
    padding: 24px;
  }
`

const CardNftWithInfo = () => {
  return (
    <WCardNftWithInfo>
      <div className="card-nft-cover">
        <MediaCard fileUrl="abc.mp4" />
      </div>
      <div className="card-nft-body">
        <Text fontSize={[20]} fontWeight="bold" mb="14px">
          HEMATITE
        </Text>
        <FlexGap flexDirection="column" rowGap="10px">
          <Flex justifyContent="space-between">
            <Text>Price:</Text>
            <Text fontWeight="bold">500 USDT</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Reward:</Text>
            <Text fontWeight="bold">500 OPV</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Dividend:</Text>
            <Text fontWeight="bold">0%</Text>
          </Flex>
        </FlexGap>
      </div>
    </WCardNftWithInfo>
  )
}

export default CardNftWithInfo
