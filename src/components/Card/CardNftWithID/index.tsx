import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Button, Flex, Skeleton, Text } from '@pancakeswap/uikit'
import MediaCard from 'components/MediaCard'
import { MyNftItem } from 'state/nfts/types'
import useNftMetaDataByUrl from 'state/nfts/fetchNftMetaDataByUrl'

const WCardNftWithID = styled.div`
  max-width: 100%;
  margin-top: 16px;
  background: #eefbff;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0px 0px 3px rgb(0, 0, 0, 20%);
  ${({ theme }) => theme.mediaQueries.sm} {
    border: 1px solid #00438e;
    border-radius: 20px;
    box-shadow: 8px 10px 4px rgb(0, 0, 0, 25%);
  }
  .card-nft-with-id-content {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    padding: 16px;

    ${({ theme }) => theme.mediaQueries.sm} {
      flex-direction: column;
      padding: 0;
    }

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
    .investment-item-body {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      padding: 0 0 24px;
      ${({ theme }) => theme.mediaQueries.sm} {
        flex-direction: column;
      }
    }
  }
`

interface Props {
  myInvestItem?: MyNftItem
}
const CardNftWithID: React.FC<Props> = ({ myInvestItem }) => {
  const router = useRouter()
  const nftMetaData = useNftMetaDataByUrl(myInvestItem?.tokenUri)

  if (!myInvestItem) {
    return (
      <WCardNftWithID>
        <Skeleton height={400} />
      </WCardNftWithID>
    )
  }
  return (
    <WCardNftWithID>
      <div className="card-nft-with-id-content">
        <div className="card-nft-cover">
          <MediaCard fileUrl={nftMetaData?.image} />
        </div>
        <div className="investment-item-body">
          <Text color="#292929" fontSize={[24, , 32]} fontWeight="bold" mt={['16px', null, '32']} textAlign="center">
            {myInvestItem.rareName}
          </Text>
          <div className="investment-content" style={{ textAlign: 'center' }}>
            <Button
              type="button"
              scale="md"
              height={['32px', null, null, null, '48px']}
              mt={['16px', null, null, '16px']}
              onClick={() => router.push(`${router.pathname}/detail/${myInvestItem.tokenId}`)}
            >
              ID: {myInvestItem.tokenId}
            </Button>
          </div>
        </div>
      </div>
    </WCardNftWithID>
  )
}

export default CardNftWithID
