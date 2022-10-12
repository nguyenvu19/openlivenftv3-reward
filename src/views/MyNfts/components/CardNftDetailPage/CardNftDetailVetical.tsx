import { Box, Flex, Grid, Image, Link, Text } from '@pancakeswap/uikit'
import MediaCard from 'components/MediaCard'
import styled from 'styled-components'

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

const Hr = styled.hr`
  width: 100%;
`
const CardSubHeading = styled.div`
  width: fit-content;
  position: relative;
`

const CardNftDetailVertical = (props) => {
  return (
    <WCardNftVertical {...props}>
      <div className="card-nft-vertical-content">
        <div className="card-nft-cover-left">
          <MediaCard fileUrl="abc.mp4" />
        </div>
        <Box>
          <CardSubHeading>
            <Text color="#292929" fontWeight="700" fontSize="24px">
              HEMATITE
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
                Admin
              </Text>
            </Grid>
            <Grid gridTemplateColumns={['1fr 1fr', , '1fr 1fr']}>
              <Text color="#292929" fontSize={[13, , 16]}>
                NFT ID:
              </Text>
              <Flex alignItems="center">
                <Link style={{ display: 'inline' }} external href="/">
                  1
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
                  0x123..12312
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
                  0%
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
                  D0.5 OPV per day
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
                <Link style={{ display: 'inline' }} external href="/">
                  500 OPV ( $0.2 )
                </Link>
                <Box width="20px" ml="6px">
                  <Image width={30} height={30} src="/images2/link-icons.png" />
                </Box>
              </Flex>
            </Grid>
            <Hr />
            <Text color="#292929" fontWeight="700" fontSize={[16, , 20]}>
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
            </Grid>
          </div>
        </Box>
      </div>
    </WCardNftVertical>
  )
}

export default CardNftDetailVertical
