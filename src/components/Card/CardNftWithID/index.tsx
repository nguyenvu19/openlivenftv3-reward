import { Button, Flex, Text } from '@pancakeswap/uikit'
import MediaCard from 'components/MediaCard'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const WCardNftWithID = styled.div`
  max-width: 100%;
  background: #eefbff;
  border: 1px solid #00438e;
  box-shadow: 8px 10px 4px rgb(0 0 0 / 25%);
  overflow: hidden;
  border-radius: 20px;
  margin-top: 16px;
  .card-nft-cover {
    width: 100%;
    overflow: hidden;
    max-width: 100%;
    text-align: center;
    img {
      width: 100%;
      max-width: 100%;
    }
  }
  .investment-item-content {
    padding: 0 0 24px;
  }
`

const CardNftWithID = () => {
  const router = useRouter()
  return (
    <WCardNftWithID>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <div className="card-nft-cover">
          <MediaCard fileUrl="https://s3.ap-southeast-1.amazonaws.com/openlivenft/investPackage/TOPAZ.mp4" />
        </div>
        <div className="investment-item-content">
          <Text fontSize={[16, , 32]} fontWeight="bold" mt={['16px', null, null, '32']} color="#292929">
            HEMATITE
          </Text>
          <div className="investment-content" style={{ textAlign: 'center' }}>
            <Button
              onClick={() => router.push(`${router.pathname}/nft-details`)}
              height={['32px', null, null, null, '48px']}
              mt={['16px', null, null, '32px']}
              type="button"
              scale="md"
            >
              ID.1
            </Button>
          </div>
        </div>
      </Flex>
    </WCardNftWithID>
  )
}

export default CardNftWithID
