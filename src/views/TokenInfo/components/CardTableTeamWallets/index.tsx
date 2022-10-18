import { useTranslation } from '@pancakeswap/localization'
import { Link, Text } from '@pancakeswap/uikit'
import { Table } from 'antd'
import { TablePaginationConfig } from 'antd/es/table'
import { FilterValue } from 'antd/es/table/interface'
import { formatCode } from 'helpers'
import { useOPVBusdPrice } from 'hooks/useBUSDPrice'
import { useState } from 'react'
import { useBossTeamWallets } from 'state/tokenInfo/fetchBossTeamWallets'
import styled from 'styled-components'
import { getBlockExploreLink } from 'utils'
import TableItemBalance from './TableItemBalance'

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
    border-bottom: 1px solid #4b9dfd;
    padding-bottom: 16px;
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
        border: none;
        background: transparent;
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
    margin-top: 32px;
    li.ant-pagination-prev,
    .ant-pagination-next {
      button {
        background: #007ca2;
        border-radius: 50%;
        border: none;
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

const CardTableTeamWallets = () => {
  const { t } = useTranslation()
  const { bossTeamWallets, pBossTeamWallets, setPBossTeamWallets } = useBossTeamWallets()

  const opvPrice = useOPVBusdPrice({ forceMainnet: true })

  const columns = [
    {
      title: '#',
      dataIndex: 'index',
      render: (_, __, index) => {
        return <div className="team-wallet-item-id">{index + 1}</div>
      },
    },
    {
      title: <div style={{ textAlign: 'left' }}>{t('Name')}</div>,
      dataIndex: 'title',
      render: (text) => {
        return (
          <Text className="team-wallet-item-name" fontSize={['12px', , '16px']} bold style={{ textAlign: 'left' }}>
            {text}
          </Text>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Address')}</div>,
      dataIndex: 'address',
      render: (text) => {
        return (
          <div className="team-wallet-item-name" style={{ display: 'flex', justifyContent: 'center' }}>
            <Link fontSize={['12px', , '16px']} bold external href={getBlockExploreLink(text, 'address')}>
              {formatCode(text, 5, 5)}
            </Link>
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'right' }}>{t('Balance')}</div>,
      dataIndex: 'balance',
      render: (_, record) => {
        return <TableItemBalance record={record} opvPrice={opvPrice} />
      },
    },
  ]
  return (
    <WCardTableTeamWallet>
      <Table
        columns={columns}
        dataSource={bossTeamWallets.data?.rows || []}
        scroll={{ x: 300 }}
        rowKey={(record) => record._id}
        pagination={{
          total: bossTeamWallets.data?.total,
          current: pBossTeamWallets.page,
          onChange: (page, pageSize) => {
            setPBossTeamWallets((prev) => ({
              ...prev,
              page,
              pageSize,
            }))
          },
        }}
      />
    </WCardTableTeamWallet>
  )
}

export default CardTableTeamWallets
