import { Button, Flex, Text } from '@pancakeswap/uikit'
import { FlexGap } from 'components/Layout/Flex'
import MediaCard from 'components/MediaCard'
import styled from 'styled-components'

const WCardNftWithActionClaim = styled.div`
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

  .card-nft-footer {
    padding: 0 12px 12px;
  }
`

const CardNftWithActionClaim = () => {
  return (
    <WCardNftWithActionClaim>
      <div className="card-nft-cover">
        <MediaCard fileUrl="https://s3.ap-southeast-1.amazonaws.com/openlivenft/investPackage/TOPAZ.mp4" />
      </div>
      <div className="card-nft-body">
        <Text fontSize={[20]} fontWeight="bold" mb="14px">
          NFT By: ID
        </Text>
        <FlexGap flexDirection="column" rowGap="10px">
          <Flex justifyContent="space-between">
            <Text>Total Reward By:</Text>
            <Text fontWeight="bold">NFT ID</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Total Claimed:</Text>
            <Text fontWeight="bold">500 OPV</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Avaible Claim:</Text>
            <Text fontWeight="bold">(auto by seccond)</Text>
          </Flex>
        </FlexGap>
      </div>
      <div className="card-nft-footer">
        <Flex justifyContent="center">
          <Button scale="sm">CLAIM NOW</Button>
          <Button scale="sm" disabled>
            CLAIMED
          </Button>
        </Flex>
      </div>
    </WCardNftWithActionClaim>
  )
}

export default CardNftWithActionClaim
