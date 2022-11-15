import { Box, Flex, Grid, Image, Text, Button, Link } from '@pancakeswap/uikit'
import MediaCard from 'components/MediaCard'
import styled from 'styled-components'
import { CampaignItem, CAMPAIGN_STATUS } from 'state/campaigns/types'
import { APP_USER_URL } from 'config'
import CampaignImg from '../images/campaign-referrer.jpeg'

const WCardNftVertical = styled.div`
  width: 100%;
  padding: 12px;
  background: #eefbff;
  border: 1px solid rgba(67, 108, 255, 0.3);
  border-radius: 24px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    gap: 60px;
  }

  .card-nft-cover-left {
    width: 100%;
    max-width: 100%;
    border-radius: 10px;
    overflow: hidden;

    ${({ theme }) => theme.mediaQueries.sm} {
      max-width: 240px;
    }
  }

  .card-nft-right {
    width: 100%;
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
    font-size: 14px;
    line-height: 140%;
    min-width: 60px;
    text-align: center;
    padding: 1px 20px;
    margin-bottom: 20px;
    position: absolute;
    top: 2px;
    left: 116%;
    border-radius: 5px;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 16px;
      top: 6px;
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
    }

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

interface Props {
  campaign: CampaignItem
  onClickCampaign?: (campaign: CampaignItem) => void
}
const CardNftVertical: React.FC<Props> = ({ campaign, ...props }) => {
  return (
    <WCardNftVertical
      // onClick={() => {
      //   if (onClickCampaign) onClickCampaign(campaign)
      // }}
      {...props}
    >
      <div className="card-nft-cover-left">
        <MediaCard fileUrl={CampaignImg.src} />
      </div>
      <div className="card-nft-right">
        <CardSubHeading>
          <Text color="textSubtle" fontWeight="700" fontSize={['16px', , '24px']} mb={['24px', , '12px']}>
            REFERRAL TO EARN
          </Text>
          {(() => {
            if (campaign.status === CAMPAIGN_STATUS.END) return <span className="tag-name finish">Finish</span>
            if (campaign.status === CAMPAIGN_STATUS.LIVE) return <span className="tag-name live">Live</span>
            return <span className="tag-name upcoming">Upcoming</span>
          })()}
        </CardSubHeading>

        <div className="card-hold-nft-body">
          <Grid gridTemplateColumns={['1fr 1fr', , '1fr 2fr']}>
            <Text fontSize={[13, , 16]} color="textSubtle" fontWeight={600} pr="8px">
              Email Verification:
            </Text>
            <Flex alignItems="center">
              <Text fontSize={[13, , 16]} bold color="textSubtle" fontWeight={700}>
                20 OP
              </Text>
              <Box width="20px" ml="6px">
                <Image width={30} height={30} src="/images2/tokens/OP.png" />
              </Box>
            </Flex>
          </Grid>
          <Grid gridTemplateColumns={['1fr 1fr', , '1fr 2fr']}>
            <Text fontSize={[13, , 16]} color="textSubtle" fontWeight={600} pr="8px">
              KYC Verification:
            </Text>
            <Flex alignItems="center">
              <Text fontSize={[13, , 16]} bold color="textSubtle" fontWeight={700}>
                20 OP
              </Text>
              <Box width="20px" ml="6px">
                <Image width={30} height={30} src="/images2/tokens/OP.png" />
              </Box>
            </Flex>
          </Grid>
          <Grid gridTemplateColumns={['1fr 1fr', , '1fr 2fr']}>
            <Text fontSize={[13, , 16]} color="textSubtle" fontWeight={600} pr="8px">
              F1 - KYC Verification:
            </Text>
            <Flex alignItems="center">
              <Text fontSize={[13, , 16]} bold color="textSubtle" fontWeight={700}>
                20 OP
              </Text>
              <Box width="20px" ml="6px">
                <Image width={30} height={30} src="/images2/tokens/OP.png" />
              </Box>
            </Flex>
          </Grid>
          <Grid gridTemplateColumns={['1fr 1fr', , '1fr 2fr']}>
            <Text fontSize={[13, , 16]} color="textSubtle" fontWeight={600} pr="8px">
              F1 - Buy 1 NFT:
            </Text>
            <Flex alignItems="center">
              <Text fontSize={[13, , 16]} bold color="textSubtle" fontWeight={700}>
                20 OP
              </Text>
              <Box width="20px" ml="6px">
                <Image width={30} height={30} src="/images2/tokens/OP.png" />
              </Box>
            </Flex>
          </Grid>

          <Grid gridTemplateColumns={['1fr', '1fr 2fr']} gridTemplateRows="26px" mt="6px">
            <Text fontSize={[13, , 16]} color="textSubtle" fontWeight={600} style={{ whiteSpace: 'nowrap' }} pr="8px">
              Swap OPoint to OPV
            </Text>
            <Flex alignItems="center">
              <Link href={APP_USER_URL}>
                <Button scale="sm">Click to join now!</Button>
              </Link>
            </Flex>
          </Grid>
        </div>
      </div>
    </WCardNftVertical>
  )
}

export default CardNftVertical
