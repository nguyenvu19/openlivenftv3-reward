import { useMemo } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Box, Flex, Grid, Image, Text } from '@pancakeswap/uikit'
import MediaCard from 'components/MediaCard'
import styled from 'styled-components'
import { CampaignItem, CAMPAIGN_STATUS } from 'state/campaigns/types'
import { formatDate } from 'helpers'
import useCountTime, { STEEP_COUNT } from 'hooks/useCountTime'

const WCardNftVertical = styled.div`
  width: 100%;
  padding: 12px;
  background: #eefbff;
  border: 1px solid rgba(67, 108, 255, 0.3);
  border-radius: 24px;
  cursor: pointer;

  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
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
const WCountDown = styled.div`
  display: flex;
  align-items: center;
`

interface Props {
  campaign: CampaignItem
  onClickCampaign?: (campaign: CampaignItem) => void
  [t: string]: any
}
const CardNftVertical: React.FC<Props> = ({ campaign, onClickCampaign, ...props }) => {
  const { weekdays, days, hours, minutes, seconds, step } = useCountTime(campaign?.start, campaign.finish)

  const renderCountdownCard = useMemo(() => {
    return (
      <WCountDown onClick={() => onClickCampaign && onClickCampaign(campaign)}>
        <Flex alignItems="center">
          <Box background="#529BF0" borderRadius="10px" padding="2px 8px">
            <Text color="#fff" fontSize={[10, , 24]} bold minWidth="14px" textAlign="center">
              {weekdays * 7 + days}
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Days
          </Text>
        </Flex>
        <Flex ml="4px" alignItems="center">
          <Box background="#529BF0" borderRadius="10px" padding="2px 8px">
            <Text color="#fff" fontSize={[10, , 24]} bold minWidth="14px" textAlign="center">
              {hours}
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Hours
          </Text>
        </Flex>
        <Flex ml="4px" alignItems="center">
          <Box background="#529BF0" borderRadius="10px" padding="2px 8px">
            <Text color="#fff" fontSize={[10, , 24]} bold minWidth="14px" textAlign="center">
              {minutes}
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Minutes
          </Text>
        </Flex>
        <Flex ml="4px" alignItems="center">
          <Box background="#529BF0" borderRadius="10px" padding="2px 8px">
            <Text color="#fff" fontSize={[10, , 24]} bold minWidth="14px" textAlign="center">
              {seconds}
            </Text>
          </Box>
          <Text fontSize={[10, , 13]} ml="3px">
            Second
          </Text>
        </Flex>
      </WCountDown>
    )
  }, [weekdays, days, hours, minutes, seconds, onClickCampaign, campaign])

  if (!campaign) return <></>
  return (
    <WCardNftVertical
      onClick={() => {
        if (onClickCampaign) onClickCampaign(campaign)
      }}
      {...props}
    >
      <div className="card-nft-cover-left">
        <MediaCard fileUrl="https://s3.ap-southeast-1.amazonaws.com/openlivenft/investPackage/TOPAZ.mp4" />
      </div>
      <Box>
        <CardSubHeading>
          <Text color="textSubtle" fontWeight="700" fontSize={['16px', , '24px']} mb={['24px', , '12px']}>
            HOLD NFT
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
              Total Reward:
            </Text>
            <Flex alignItems="center">
              <Text fontSize={[13, , 16]} bold color="textSubtle" fontWeight={700}>
                <CurrencyFormat value={campaign.totalPool} displayType="text" thousandSeparator renderText={(t) => t} />
              </Text>
              <Box width="20px" ml="6px">
                <Image width={30} height={30} src="/images2/opvIcon.png" />
              </Box>
            </Flex>
          </Grid>
          <Grid gridTemplateColumns={['1fr 1fr', , '1fr 2fr']}>
            <Text fontSize={[13, , 16]} color="textSubtle" fontWeight={600} pr="8px">
              Total Claimed:
            </Text>
            <Text fontSize={[13, , 16]} bold color="textSubtle" fontWeight={700}>
              <CurrencyFormat
                value={campaign.currentPool}
                displayType="text"
                thousandSeparator
                suffix={` OPV`}
                renderText={(t) => t}
              />
            </Text>
          </Grid>
          <Grid gridTemplateColumns={['1fr 1fr', , '1fr 2fr']}>
            <Text fontSize={[13, , 16]} color="textSubtle" fontWeight={600} pr="8px">
              Durations:
            </Text>
            <Text fontSize={[13, , 16]} bold color="textSubtle" fontWeight={700}>
              {campaign?.duration ? Math.round(campaign.duration / 1000 / 60 / 60 / 24) : '--'} Days
            </Text>
          </Grid>
          <Grid gridTemplateColumns={['1fr 1fr', , '1fr 2fr']}>
            <Text fontSize={[13, , 16]} color="textSubtle" fontWeight={600} pr="8px">
              Start:
            </Text>
            <Text fontSize={[13, , 16]} bold color="textSubtle" fontWeight={700}>
              {formatDate(campaign.start)}
            </Text>
          </Grid>

          <Grid gridTemplateColumns={['1fr', '1fr 2fr']} gridTemplateRows="26px">
            <Text fontSize={[13, , 16]} color="textSubtle" fontWeight={600} style={{ whiteSpace: 'nowrap' }} pr="8px">
              {(() => {
                if (step === STEEP_COUNT.SOON) return 'Start in:'
                if (step === STEEP_COUNT.START) return 'End in:'
                return 'Ended:'
              })()}
            </Text>
            <Flex>{renderCountdownCard}</Flex>
          </Grid>
        </div>
      </Box>
    </WCardNftVertical>
  )
}

export default CardNftVertical
