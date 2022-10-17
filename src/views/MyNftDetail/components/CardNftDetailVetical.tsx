import { Box, Flex, Grid, Image, Link, Text } from '@pancakeswap/uikit'
import MediaCard from 'components/MediaCard'
import { NFT_ADDRESS } from 'config'
import { formatCode } from 'helpers'
import { useEffect, useState } from 'react'
import { MyNftItem, NftMetaData } from 'state/nfts/types'
import styled from 'styled-components'
import { getBscScanLinkForNft } from 'utils'

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
    padding: 24px;
    background: #f6fbfd;
    border-radius: 24px;
    ${({ theme }) => theme.mediaQueries.sm} {
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
  const [nftMetaData, setNftMetaData] = useState<NftMetaData | undefined | null>()
  const ownerName = nftMetaData?.attributes?.find((o) => o.trait_type === 'Owner Name')
  const dividend = nftMetaData?.attributes?.find((o) => o.trait_type === 'Devident')
  const reward01 = nftMetaData?.attributes?.find((o) => o.trait_type === 'reward_01')
  const opvBonus = nftMetaData?.attributes?.find((o) => o.trait_type === 'OPV Bonus')

  useEffect(() => {
    async function fetchNftMetaData() {
      if (myNftDetail) {
        try {
          fetch(myNftDetail.tokenUri)
            .then((res) => res.json())
            .then((res) => {
              if (res) {
                setNftMetaData(res)
              } else {
                setNftMetaData(null)
              }
            })
        } catch (error) {
          setNftMetaData(null)
        }
      }
    }
    fetchNftMetaData()
  }, [myNftDetail])

  if (!myNftDetail) return <></>
  return (
    <WCardNftVertical {...props}>
      <div className="card-nft-vertical-content">
        <div className="card-nft-cover-left">
          <MediaCard fileUrl={nftMetaData?.image} />
        </div>
        <Box>
          <CardSubHeading>
            <Text color="#292929" fontWeight="700" fontSize="24px">
              {myNftDetail.rareName}
            </Text>
          </CardSubHeading>
          <Text color="rgba(41, 41, 41, 0.6)" fontWeight="400" fontSize="16px" mt="24px" mb="24px">
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
              <Flex alignItems="center">
                <Link
                  style={{ display: 'inline' }}
                  external
                  href={getBscScanLinkForNft(undefined, myNftDetail.tokenId)}
                >
                  {myNftDetail.tokenId}
                </Link>
                <Box width="20px" ml="6px">
                  <Image width={30} height={30} src="/images2/link-icons.png" />
                </Box>
              </Flex>
            </Grid>
            <Grid gridTemplateColumns={['1fr 1fr', , '1fr 1fr']}>
              <Text color="#292929" fontSize={[13, , 16]}>
                NFT Contract:
              </Text>
              <Flex alignItems="center">
                <Link style={{ display: 'inline' }} external href="/">
                  {formatCode(NFT_ADDRESS, 5, 5)}
                </Link>
                <Box width="20px" ml="6px">
                  <Image width={30} height={30} src="/images2/link-icons.png" />
                </Box>
              </Flex>
            </Grid>
            <Grid gridTemplateColumns={['1fr 1fr', , '1fr 1fr']}>
              <Text color="#292929" fontSize={[13, , 16]}>
                Dividend:
              </Text>
              <Flex alignItems="center">
                <Link style={{ display: 'inline' }} external href="/">
                  {dividend?.value}
                </Link>
                <Box width="20px" ml="6px">
                  <Image width={30} height={30} src="/images2/link-icons.png" />
                </Box>
              </Flex>
            </Grid>

            <Grid gridTemplateColumns={['1fr', '1fr 1fr']} gridTemplateRows="26px">
              <Text color="#292929" fontSize={[13, , 16]}>
                Daily Holder Reward:
              </Text>
              <Flex alignItems="center">
                <Link style={{ display: 'inline' }} external href="/">
                  {reward01?.value} OPV
                </Link>
                <Box width="20px" ml="6px">
                  <Image width={30} height={30} src="/images2/link-icons.png" />
                </Box>
              </Flex>
            </Grid>
            <Grid gridTemplateColumns={['1fr', '1fr 1fr']} gridTemplateRows="26px">
              <Text color="#292929" fontSize={[13, , 16]}>
                OPV Bonus:
              </Text>
              <Flex alignItems="center">
                <Link
                  style={{ display: 'inline' }}
                  external
                  href={getBscScanLinkForNft(undefined, myNftDetail.tokenId)}
                >
                  {opvBonus?.value} OPV
                </Link>
                <Box width="20px" ml="6px">
                  <Image width={30} height={30} src="/images2/link-icons.png" />
                </Box>
              </Flex>
            </Grid>
            {/* <Hr /> */}
            {/* <Text color="#292929" fontWeight="700" fontSize={[16, , 20]}>
              Properties
            </Text>
            <Grid gridTemplateColumns={['1fr', '1fr 1fr']} gridTemplateRows="26px">
              <Text color="#292929" fontSize={[13, , 16]}>
                Category:
              </Text>
              <Text color="#292929" fontWeight="700" fontSize={[13, , 16]} bold>
                Action Card
              </Text>
            </Grid>
            <Grid gridTemplateColumns={['1fr', '1fr 1fr']} gridTemplateRows="26px">
              <Text color="#292929" fontSize={[13, , 16]}>
                Identification:
              </Text>
              <Text color="#292929" fontWeight="700" fontSize={[13, , 16]} bold>
                Admin
              </Text>
            </Grid> */}
          </div>
        </Box>
      </div>
    </WCardNftVertical>
  )
}

export default CardNftDetailVertical
