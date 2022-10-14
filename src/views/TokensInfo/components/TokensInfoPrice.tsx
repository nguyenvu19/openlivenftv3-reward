import { useTranslation } from '@pancakeswap/localization'
import { Progress, Tooltip } from 'antd'
import { Box, Button, Flex, Image, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import BoxInforDetailItem from './BoxInforDetailItem'

const text = (
  <Box>
    <Text fontSize={['12px', , '13px']} color="#000" style={{ cursor: 'pointer' }}>
      24h Low/High
    </Text>
    <Text mt="8px" fontSize={['12px', , '13px']} color="#000" style={{ cursor: 'pointer' }}>
      1m Low/High
    </Text>
    <Text mt="8px" fontSize={['12px', , '13px']} color="#000" style={{ cursor: 'pointer' }}>
      1y Low/High
    </Text>
  </Box>
)

const WTokensInfoPrice = styled.div`
  width: 100%;
`
const WTokenInfoPriceDetail = styled.div`
  border-top: 0.5px solid #5b708f;
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 24px;
    flex-direction: row;
  }
`

const WProgress = styled.div`
  width: 130px;
  .ant-progress-inner {
    overflow: unset;
    .ant-progress-bg {
      background: #c9d0df;
      height: 4px !important;
      &::before {
        content: '';
        position: absolute;
        right: -4px;
        top: 6px;
        width: 10px;
        height: 10px;
        background: #c9d0df;
        border-radius: 4px;
        transform: rotate(45deg);
      }
      &::after {
        content: '';
        position: absolute;
        right: -8px;
        top: 13.5px;
        width: 20px;
        height: 12px;
        background: #eefbff;
      }
    }
  }
`

const TokensInfoPrice = () => {
  const { t } = useTranslation()
  return (
    <>
      <WTokensInfoPrice>
        <Text>{t('OpenLive NFT Price (OPV)')}</Text>
        <Flex alignItems="center" mt="14px">
          <Text as="h2" color="#000" fontSize={['16px', , '24px']} fontWeight="700" pb="4px" mb="0" mr="24px">
            $0.1325
          </Text>
          <Flex alignItems="center" width="72px" padding="6px" style={{ background: '#D71515' }} borderRadius="8px">
            <Image width={10} height={10} src="/imgTokensInfo/down-white.png" mr="8px" />
            <Text fontSize={['12px', , '14px']} color="#fff" fontWeight="600">
              0.02%
            </Text>
          </Flex>
        </Flex>
        {/*  */}
        <Flex alignItems="center" mt="14px">
          <Text color="#5B708F" fontSize={['12px', , '14px']} fontWeight="700" mb="0" mr="16px">
            0.000006863 BTC
          </Text>
          <Flex width={80} alignItems="center">
            <Image width={10} height={10} src="/imgTokensInfo/down-red.png" mr="8px" />
            <Text fontSize={['12px', , '14px']} color="#D71515" fontWeight="600">
              0.02%
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" mt="14px">
          <Text color="#5B708F" fontSize={['12px', , '14px']} fontWeight="700" mb="0" mr="16px">
            0.000006863 ETH
          </Text>
          <Flex width={80} alignItems="center">
            <Image width={10} height={10} src="/imgTokensInfo/down-red.png" mr="8px" />
            <Text fontSize={['12px', , '14px']} color="#D71515" fontWeight="600">
              5.04%
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" flexWrap="wrap" mt="14px">
          <Flex alignItems="center">
            <Flex alignItems="center">
              <Text color="#5B708F" fontSize={['12px', , '14px']} fontWeight="400" mb="0" mr="4px">
                {t('Low')}:
              </Text>
              <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700" mb="0" mr={['4px', , '16px']}>
                $0.1283
              </Text>
            </Flex>
            <WProgress>
              <Progress percent={60} showInfo={false} />
            </WProgress>
            <Flex alignItems="center" ml={['4px', , '24px']} mr={['4px', , '16px']}>
              <Text color="#5B708F" fontSize={['12px', , '14px']} fontWeight="400" mb="0" mr="4px">
                {t('High')}:
              </Text>
              <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700" mb="0">
                $0.1329
              </Text>
            </Flex>
          </Flex>

          <Tooltip color="#fff" placement="bottom" title={text} trigger={['click']}>
            <Button
              mt={['16px', , 0, 0]}
              width="61px"
              height="27px"
              padding="0 4px"
              scale="sm"
              style={{ background: '#EDF0F3', boxShadow: 'none' }}
            >
              <Text fontSize={['12px', , '14px']} color="#5B708F" fontWeight="600">
                24h
              </Text>
              <Image width={10} height={10} src="/imgTokensInfo/down-outline.png" ml="8px" />
            </Button>
          </Tooltip>
        </Flex>
      </WTokensInfoPrice>
      <WTokenInfoPriceDetail>
        <BoxInforDetailItem />
      </WTokenInfoPriceDetail>
    </>
  )
}

export default TokensInfoPrice
