import { useTranslation } from '@pancakeswap/localization'
import { Box, Button, Flex, Image, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { Table, Tooltip } from 'antd'
import styled from 'styled-components'
// import TokensInforItem from './TokensInforItem'

const WCardTableMarketPlace = styled.div`
  margin-top: 24px;
  width: 100%;
  padding: 0px 12px;
  background: #eefbff;
  border-radius: 12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 16px 24px;
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
      .tokens-item-pairs {
        color: #007ca1;
      }
      .tokens-item-confidend {
        p {
          color: #fff;
          padding: 4px 16px;
          border-radius: 8px;
          &[data-confidend='High'] {
            background: #008d0e;
          }
          &[data-confidend='N/A'] {
            background: #d6d6d6;
          }
        }
      }
    }
  }
`

const CardTableMarketPlace = () => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      render: (text) => {
        return <div className="staking-item-id">{text}</div>
      },
    },
    {
      title: t('source'),
      dataIndex: 'source',
      render: (text, record) => {
        return (
          <Flex alignItems="center" className="staking-item-source" style={{ transform: 'translateY(6px)' }}>
            <Box width={24} height={24} mr="8px">
              <Image width={24} height={24} src={record.currency} />
            </Box>
            {text}
          </Flex>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Pairs')}</div>,
      dataIndex: 'pairs',
      render: (text) => {
        return (
          <div className="tokens-item-pairs" style={{ textAlign: 'center' }}>
            {text}
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Price')}</div>,
      dataIndex: 'price',
      render: () => {
        return (
          <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
            0.00001 OPV
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Depth')}</div>,
      dataIndex: 'depth',
      render: (text) => {
        return (
          <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
            {text}
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Volume')}</div>,
      dataIndex: 'volume',
      render: (text) => {
        return (
          <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
            {text}
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Volume %')}</div>,
      dataIndex: 'volume2',
      render: (text) => {
        return (
          <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
            {text}
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Confidence')}</div>,
      dataIndex: 'confidence',
      render: (text, record) => {
        return (
          <div className="tokens-item-confidend" style={{ textAlign: 'center' }}>
            <p data-confidend={record.confidence}>{text}</p>
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Liquidity')}</div>,
      dataIndex: 'liquidity',
      render: (text) => {
        return (
          <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
            {text}
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Updated')}</div>,
      dataIndex: 'updated',
      render: (text) => {
        return (
          <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
            {text}
          </div>
        )
      },
    },
  ]
  const data = [
    {
      id: 1,
      source: 'MEXC',
      currency: '/imgTokensInfo/mexc.png',
      pairs: 'OPV/USDT',
      price: '$0.1327',
      depth: '$23.327',
      volume: '-',
      volume2: '94.07%',
      confidence: 'High',
      liquidity: '4',
      updated: 'Recently',
    },
    {
      id: 2,
      source: 'PancakeSwap (V2)',
      currency: '/imgTokensInfo/pankcake.png',
      pairs: 'OPV/USDT',
      price: '$0.1327',
      depth: '$23.327',
      volume: '-',
      volume2: '94.07%',
      confidence: 'N/A',
      liquidity: '4',
      updated: 'Recently',
    },
  ]

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
  return (
    <WCardTableMarketPlace>
      <Flex alignItems="center" justifyContent="space-between" mb="32px" mt="16px">
        <Text color="#007CA1" fontWeight="700" fontSize={[12, 14, 24]} mb="0">
          {t('OpenLive NFT Markets')}
        </Text>
        <Flex alignItems="center">
          <Text color="#5B708F" fontWeight="600" fontSize={[12, , 14]} mb="0" mr="24px">
            {t('Pair')}
          </Text>
          <Tooltip color="#fff" placement="bottom" title={text} trigger={['click']}>
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
      </Flex>
      {/* {isMobile ? (
        <>
          {data.map((item) => {
            return <TokensInforItem item={item} id={0} />
          })}
        </>
      ) : (
        <Table
          columns={columns}
          scroll={{ x: 400 }}
          rowKey={(record) => record.id}
          dataSource={data}
          pagination={false}
        />
      )} */}
      <Table
        columns={columns}
        scroll={{ x: 400 }}
        rowKey={(record) => record.id}
        dataSource={data}
        pagination={false}
      />
    </WCardTableMarketPlace>
  )
}

export default CardTableMarketPlace
