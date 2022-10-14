import { useTranslation } from '@pancakeswap/localization'
import { Box, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { Table } from 'antd'
import { TablePaginationConfig } from 'antd/es/table'
import { FilterValue } from 'antd/es/table/interface'
import { useState } from 'react'
import styled from 'styled-components'
// import TokensInforItem from './TokensInforItem'

interface TableParams {
  pagination?: TablePaginationConfig
  sortField?: string
  sortOrder?: string
  filters?: Record<string, FilterValue>
}

const WCardTableTeamWallet = styled.div`
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
  ul.ant-pagination {
    li.ant-pagination-prev,
    .ant-pagination-next {
      button {
        background: #007ca2;
        border: none;
        border-radius: 50%;
        color: #fff;
      }
    }
    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      .ant-pagination-item-link-icon {
        color: #007ca2;
      }
    }
    .ant-pagination-item {
      background: transparent;
      border: none;
      &:hover {
        a {
          color: #000000;
        }
      }
    }
    .ant-pagination-options {
      .ant-select-selector {
        border: 2px solid #08a7b7;
        border-radius: 4px;
      }
      .ant-select-arrow {
        color: #08a7b7;
      }
    }
    .ant-pagination-item-active {
      border: 2px solid #08a7b7;
      background: #eefbff;
      border-radius: 4px;
      font-weight: 700;
      > a {
        color: #000000;
      }
    }
  }
`

const CardTableTeamWallet = () => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      render: (text) => {
        return <div className="team-wallet-item-id">{text}</div>
      },
    },
    {
      title: <div style={{ textAlign: 'left' }}>{t('Name')}</div>,
      dataIndex: 'name',
      render: (text) => {
        return (
          <div className="team-wallet-item-name" style={{ textAlign: 'left' }}>
            {text}
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Address')}</div>,
      dataIndex: 'address',
      render: (text) => {
        return (
          <div className="team-wallet-item-name" style={{ textAlign: 'center' }}>
            {text}
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'right' }}>{t('Balance')}</div>,
      dataIndex: 'balance',
      render: (text, record) => {
        return (
          <div className="team-wallet-item-balance" style={{ textAlign: 'right' }}>
            <Box>
              <Text bold color="#000000" fontSize={['12px', , '14px']}>
                {text}
              </Text>
              <Text color="#292929" fontSize={['12px', , '14px']}>
                {record.usdValue > 0 ? (
                  <>
                    {' '}
                    &asymp; ({record.usdValue} {record.currency})
                  </>
                ) : (
                  ''
                )}
              </Text>
            </Box>
          </div>
        )
      },
    },
  ]
  const data = [
    {
      id: 1,
      name: 'Team',
      address: '0x03xcba...323s23afc3021',
      balance: '25.0012M',
      usdValue: 12312,
      currency: 'USDT',
    },
    {
      id: 2,
      name: 'Liquidity',
      address: '0x03xcba...323s23afc3021',
      balance: '0',
      usdValue: 0,
      currency: 'USDT',
    },
    {
      id: 3,
      name: 'Marketing',
      address: '0x03xcba...323s23afc3021',
      balance: '25.0012M',
      usdValue: 12312,
      currency: 'USDT',
    },
  ]
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })
  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    })
  }
  return (
    <WCardTableTeamWallet>
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
        dataSource={data}
        scroll={{ x: 400 }}
        rowKey={(record) => record.id}
        pagination={tableParams.pagination}
        onChange={handleTableChange}
      />
    </WCardTableTeamWallet>
  )
}

export default CardTableTeamWallet
