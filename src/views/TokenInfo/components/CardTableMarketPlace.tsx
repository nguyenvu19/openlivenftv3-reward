import { useTranslation } from '@pancakeswap/localization'
import { Box, Flex, Image, Link, Text } from '@pancakeswap/uikit'
import { Table } from 'antd'
import CurrencyFormat from 'react-currency-format'
import { roundNumber } from 'helpers'
import { useInfoMarketPairs } from 'state/tokenInfo/fetchInfoMarketPair'
import styled from 'styled-components'

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
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          margin-left: 5px;
        }
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
      render: (text, record) => {
        return (
          <Link external href={record.marketUrl}>
            <Flex
              alignItems="center"
              className="staking-item-source"
              style={{ transform: 'translateY(6px)', whiteSpace: 'nowrap' }}
            >
              <Box width={24} height={24} mr="8px">
                <Image
                  width={24}
                  height={24}
                  src={`https://s2.coinmarketcap.com/static/img/exchanges/64x64/${record.exchangeId}.png`}
                />
              </Box>
              {text}
            </Flex>
          </Link>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Pairs')}</div>,
      dataIndex: 'marketPair',
      render: (text, record) => {
        return (
          <div className="tokens-item-pairs" style={{ textAlign: 'center' }}>
            {text}
            {record.dexerUrl && (
              <Link external href={record.dexerUrl}>
                <Box width={24} height={24} mr="8px">
                  <Image
                    width={24}
                    height={24}
                    src="https://s2.coinmarketcap.com/static/cloud/img/dex/dexer-flag.png"
                  />
                </Box>
              </Link>
            )}
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Price')}</div>,
      dataIndex: 'price',
      render: (text) => {
        return (
          <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
            ${roundNumber(text, { scale: 4 })}
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>{t('+2% Depth')}</div>,
      dataIndex: 'depthUsdPositiveTwo',
      render: (text) => {
        return (
          <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
            {text ? (
              <CurrencyFormat
                value={roundNumber(text, { scale: 2 })}
                thousandSeparator
                displayType="text"
                prefix="$"
                renderText={(txt) => txt}
              />
            ) : (
              '-'
            )}
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>{t('-2% Depth')}</div>,
      dataIndex: 'depthUsdNegativeTwo',
      render: (text) => {
        return (
          <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
            {text ? (
              <CurrencyFormat
                value={roundNumber(text, { scale: 2 })}
                thousandSeparator
                displayType="text"
                prefix="$"
                renderText={(txt) => txt}
              />
            ) : (
              '-'
            )}
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Volume')}</div>,
      dataIndex: 'volumeUsd',
      render: (text) => {
        return (
          <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
            <CurrencyFormat
              value={Math.round(text)}
              thousandSeparator
              displayType="text"
              prefix="$"
              renderText={(txt) => txt}
            />
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Confidence')}</div>,
      dataIndex: 'confidence',
      render: () => {
        return (
          <div className="tokens-item-confidend" style={{ textAlign: 'center' }}>
            <p data-confidend="High">High</p>
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Liquidity Score')}</div>,
      dataIndex: 'effectiveLiquidity',
      render: (text) => {
        return (
          <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
            {Math.round(text)}
          </div>
        )
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

  // const text = (
  //   <Box>
  //     <Text fontSize={['12px', , '13px']} color="#000" style={{ cursor: 'pointer' }}>
  //       24h Low/High
  //     </Text>
  //     <Text mt="8px" fontSize={['12px', , '13px']} color="#000" style={{ cursor: 'pointer' }}>
  //       1m Low/High
  //     </Text>
  //     <Text mt="8px" fontSize={['12px', , '13px']} color="#000" style={{ cursor: 'pointer' }}>
  //       1y Low/High
  //     </Text>
  //   </Box>
  // )
  return (
    <WCardTableMarketPlace>
      <Flex alignItems="center" justifyContent="space-between" mb="32px" mt="16px">
        <Text color="#007CA1" fontWeight="700" fontSize={[12, 14, 24]} mb="0">
          {t('OpenLive NFT Markets')}
        </Text>
        <Flex alignItems="center">
          <Text color="#5B708F" fontWeight="600" fontSize={[12, , 14]} mb="0">
            {t('Pair')}
          </Text>
          {/* <Tooltip color="#fff" placement="bottom" title={text} trigger={['click']}>
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
          </Tooltip> */}
        </Flex>
      </Flex>
      <Table
        columns={columns}
        scroll={{ x: 400 }}
        rowKey={(record) => record.id}
        dataSource={infoMarketPair?.data?.marketPairs || []}
        pagination={false}
      />
    </WCardTableMarketPlace>
  )
}

export default CardTableMarketPlace
