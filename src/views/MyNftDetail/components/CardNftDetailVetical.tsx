import { Box, Flex, Grid, Image, Link, Skeleton, Text } from '@pancakeswap/uikit'
import MediaCard from 'components/MediaCard'
import { NFT_ADDRESS } from 'config'
import { formatCode } from 'helpers'
import useNftMetaDataByUrl from 'state/nfts/fetchNftMetaDataByUrl'
import { MyNftItem } from 'state/nfts/types'
import styled from 'styled-components'
import { getBlockExploreLink, getBscScanLinkForNft } from 'utils'

const WCardNftVertical = styled.div`
  width: 100%;
  padding: 24px;
  background: rgba(238, 251, 255, 0.2);
  border: 1px solid #0aadad;
  border-radius: 8px;

  .card-nft-vertical-content {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    background: #f6fbfd;
    border-radius: 24px;
    ${({ theme }) => theme.mediaQueries.sm} {
      padding: 24px;
      gap: 60px;
    }
    .card-nft-cover-left {
      width: 100%;
      max-width: 100%;

      ${({ theme }) => theme.mediaQueries.sm} {
        max-width: 425px;
      }
    }
    .card-hold-nft-body {
      display: flex;
      flex-direction: column;
      row-gap: 6px;
      ${({ theme }) => theme.mediaQueries.sm} {
        row-gap: 16px;
      }
      a {
        color: #007ca2;
        font-weight: 700;
        text-decoration: none;
      }
    }
  }
`

// const Hr = styled.hr`
//   width: 100%;
// `
const CardSubHeading = styled.div`
  width: fit-content;
  position: relative;
`

interface Props {
  myNftDetail: MyNftItem
  [t: string]: any
}
const CardNftDetailVertical: React.FC<Props> = ({ myNftDetail, ...props }) => {
  const nftMetaData = useNftMetaDataByUrl(myNftDetail?.tokenUri)

  const ownerName = nftMetaData?.attributes?.find((o) => o.trait_type === 'Owner Name')
  const dividend = nftMetaData?.attributes?.find((o) => o.trait_type === 'Devident')
  const reward01 = nftMetaData?.attributes?.find((o) => o.trait_type === 'reward_01')
  const opvBonus = nftMetaData?.attributes?.find((o) => o.trait_type === 'OPV Bonus')

  if (!myNftDetail) {
    return (
      <WCardNftVertical>
        <Skeleton height="520px" />
      </WCardNftVertical>
    )
  }
  return (
    <WCardNftVertical {...props}>
      <div className="card-nft-vertical-content">
        <div className="card-nft-cover-left">
          <MediaCard fileUrl={nftMetaData?.image} />
        </div>
        <Box>
          <CardSubHeading>
            <Text color="#292929" fontWeight="700" fontSize={['24px']}>
              {myNftDetail.rareName}
            </Text>
          </CardSubHeading>
          <Text
            color="rgba(41, 41, 41, 0.6)"
            fontWeight="400"
            fontSize={['13px', '16px']}
            bold
            mt={['13px', , '24px']}
            mb={['13px', , '24px']}
          >
            This NFT will give you some unique benefits.
          </Text>
          <div className="card-hold-nft-body">
            <Grid gridTemplateColumns={['1fr 1fr', , '1fr 1fr']}>
              <Text color="#292929" fontSize={[13, , 16]}>
                Owner:
              </Text>
              <Text color="#292929" fontSize={[13, , 16]} fontWeight="700">
                {ownerName?.value}
              </Text>
            </Grid>
            <Grid gridTemplateColumns={['1fr 1fr', , '1fr 1fr']}>
              <Text color="#292929" fontSize={[13, , 16]}>
                NFT ID:
              </Text>
              {myNftDetail.tokenId !== undefined && (
                <Link
                  style={{ display: 'inline' }}
                  external
                  href={getBscScanLinkForNft(undefined, myNftDetail.tokenId)}
                >
                  <Flex alignItems="center">
                    <Text color="#007CA2" fontSize={['13px', '16px']} fontWeight="700">
                      {myNftDetail.tokenId}
                    </Text>
                    <Box width={['14px', , '24px']} ml="6px">
                      <Image width={30} height={30} src="/images2/link-icons.png" />
                    </Box>
                  </Flex>
                </Link>
              )}
            </Grid>
            <Grid gridTemplateColumns={['1fr 1fr', , '1fr 1fr']}>
              <Text color="#292929" fontSize={[13, , 16]}>
                NFT Contract:
              </Text>
              <Link style={{ display: 'inline' }} external href={getBlockExploreLink(NFT_ADDRESS, 'address')}>
                <Flex alignItems="center">
                  <Text color="#007CA2" fontSize={['13px', '16px']} fontWeight="700">
                    {formatCode(NFT_ADDRESS, 5, 5)}
                  </Text>
                  <Box width={['13px', , '20px']} ml="6px">
                    <Image width={30} height={30} src="/images2/link-icons.png" />
                  </Box>
                </Flex>
              </Link>
            </Grid>
            <Grid gridTemplateColumns={['1fr 1fr', , '1fr 1fr']}>
              <Text color="#292929" fontSize={[13, , 16]}>
                Dividend:
              </Text>
              {dividend?.value !== undefined && (
                <Link style={{ display: 'inline' }} external href="/">
                  <Flex alignItems="center">
                    <Text color="#007CA2" fontSize={['13px', '16px']} fontWeight="700">
                      {dividend?.value}
                    </Text>
                    <Box width={['13px', , '20px']} ml="6px">
                      <Image width={30} height={30} src="/images2/link-icons.png" />
                    </Box>
                  </Flex>
                </Link>
              )}
            </Grid>

            <Grid gridTemplateColumns={['1fr 1fr', '1fr 1fr']}>
              <Text color="#292929" fontSize={[13, , 16]}>
                Daily Holder Reward:
              </Text>
              {reward01?.value !== undefined && (
                <Link style={{ display: 'inline' }} external href="/">
                  <Flex alignItems="center">
                    <Text color="#007CA2" fontSize={['13px', '16px']} fontWeight="700">
                      {reward01?.value} OPV
                    </Text>
                    <Box width={['13px', , '20px']} ml="6px">
                      <Image width={30} height={30} src="/images2/link-icons.png" />
                    </Box>
                  </Flex>
                </Link>
              )}
            </Grid>
            <Grid gridTemplateColumns={['1fr 1fr', '1fr 1fr']}>
              <Text color="#292929" fontSize={[13, , 16]}>
                OPV Bonus:
              </Text>
              {opvBonus?.value !== undefined && (
                <Link
                  style={{ display: 'inline' }}
                  external
                  href={getBscScanLinkForNft(undefined, myNftDetail.tokenId)}
                >
                  <Flex alignItems="center">
                    <Text color="#007CA2" fontSize={['13px', '16px']} fontWeight="700">
                      {opvBonus?.value} OPV
                    </Text>
                    <Box width={['13px', , '20px']} ml="6px">
                      <Image width={30} height={30} src="/images2/link-icons.png" />
                    </Box>
                  </Flex>
                </Link>
              )}
            </Grid>
          </div>
        </Box>
      </div>
    </WCardNftVertical>
  )
}

export default CardNftDetailVertical
