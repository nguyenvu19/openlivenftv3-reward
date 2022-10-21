import { useTranslation } from '@pancakeswap/localization'
import { Box, Button, Flex, Image, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { Table, Tooltip } from 'antd'
import styled from 'styled-components'
import { useInfoMarketPairs } from 'state/tokenInfo/fetchInfoMarketPair'
import MobileListContainer from 'components/MobileListContainer'
import MarketPriceItemMobile from './MarketPriceItemMobile'
import Source from './DataItems/Source'
import MarketPair from './DataItems/MarketPair'
import MarketPrice from './DataItems/MarketPrice'
import DepthUsdPositive from './DataItems/DepthUsdPositive'
import VolumeUsd from './DataItems/VolumeUsd'
import Confidence from './DataItems/Confidence'
import EffectiveLiquidity from './DataItems/Confidence copy'

const WCardTableMarketPlace = styled.div`
  width: 100%;
  padding: 12px;
  background: #eefbff;
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 16px 24px;
  }
  .table-header-market-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    margin-bottom: 16px;
    border-bottom: 0.5px solid rgb(91, 101, 143, 0.3);
    ${({ theme }) => theme.mediaQueries.sm} {
      margin-bottom: 32px;
      border: unset;
    }
  }
  .ant-table {
    background: transparent;

    .ant-table-thead
      > tr
      > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
      display: none;
    }

    .ant-table-thead {
      .ant-table-cell {
        font-size: 13px;
        font-weight: bold;
        padding: 12px 6px;
        background: transparent;
        border-bottom: 1px solid #292929;
        ${({ theme }) => theme.mediaQueries.sm} {
          font-size: 16px;
          padding: 12px;
        }
        &:first-child {
          padding-left: 0;
        }
      }
    }

    .ant-table-tbody {
      .ant-table-cell {
        font-size: 12px;
        font-weight: 600;
        padding: 12px 6px;
        background: transparent;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        ${({ theme }) => theme.mediaQueries.sm} {
          font-size: 14px;
          padding: 12px;
        }
        &:first-child {
          padding-left: 0;
        }
      }
    }
  }
`

const CardTableMarketPlace = () => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  const { infoMarketPair } = useInfoMarketPairs()

  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      render: (_, __, index) => {
        return <div className="staking-item-id">{index + 1}</div>
      },
    },
    {
      title: t('Source'),
      dataIndex: 'exchangeName',
      render: (_, record) => {
        return (
          <Flex style={{ transform: 'translateY(6px)' }}>
            <Source record={record} />
          </Flex>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Pairs')}</div>,
      dataIndex: 'marketPair',
      render: (_, record) => {
        return <MarketPair record={record} />
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Price')}</div>,
      dataIndex: 'price',
      render: (_, record) => {
        return <MarketPrice record={record} />
      },
    },
    {
      title: <div style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>{t('+2% Depth')}</div>,
      dataIndex: 'depthUsdPositiveTwo',
      render: (_, record) => {
        return <DepthUsdPositive value={record.depthUsdPositiveTwo} />
      },
    },
    {
      title: <div style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>{t('-2% Depth')}</div>,
      dataIndex: 'depthUsdNegativeTwo',
      render: (_, record) => {
        return <DepthUsdPositive value={record.depthUsdNegativeTwo} />
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Volume')}</div>,
      dataIndex: 'volumeUsd',
      render: (text) => {
        return <VolumeUsd value={text} />
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Confidence')}</div>,
      dataIndex: 'confidence',
      render: (text) => {
        return <Confidence value={text} />
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Liquidity Score')}</div>,
      dataIndex: 'effectiveLiquidity',
      render: (text) => {
        return <EffectiveLiquidity value={text} />
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Updated')}</div>,
      dataIndex: 'text',
      render: () => {
        return (
          <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
            Recently
          </div>
        )
      },
    },
  ]

  return (
    <WCardTableMarketPlace>
      <div className="table-header-market-price">
        <Text color="#007CA1" fontWeight="700" fontSize={[12, 14, 24]} mb="0">
          {t('OpenLive NFT Markets')}
        </Text>
        <Flex alignItems="center">
          <Text color="#5B708F" fontWeight="600" fontSize={[12, , 14]} mr="12px">
            {t('Pair')}
          </Text>
          <Tooltip
            color="#fff"
            placement="bottom"
            title={
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
            }
            trigger={['click']}
          >
            <Button
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
      </div>
      {isMobile ? (
        <MobileListContainer
          total={infoMarketPair.total}
          dataSource={infoMarketPair?.data?.marketPairs || []}
          renderItem={(item, index) => <MarketPriceItemMobile index={index + 1} marketPriceItem={item} />}
        />
      ) : (
        <Table
          columns={columns}
          scroll={{ x: 400 }}
          rowKey={(record) => record.id}
          dataSource={infoMarketPair?.data?.marketPairs || []}
          pagination={false}
        />
      )}
    </WCardTableMarketPlace>
  )
}

export default CardTableMarketPlace
