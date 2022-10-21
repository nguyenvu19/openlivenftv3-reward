import { useTranslation } from '@pancakeswap/localization'
import { Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { Table } from 'antd'
import MobileListContainer from 'components/MobileListContainer'
import { useOPVBusdPrice } from 'hooks/useBUSDPrice'
import { useBossTeamWallets } from 'state/tokenInfo/fetchBossTeamWallets'
import styled from 'styled-components'
import TableItemBalance from './DataItems/TableItemBalance'
import BossTeamWalletMobile from './BossTeamWalletMobile'
import TableItemAddress from './DataItems/TableItemAddress'

const WCardTableTeamWallet = styled.div`
  margin-top: 24px;
  width: 100%;
  padding: 0px 12px;
  background: #eefbff;
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
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
  const { isMobile } = useMatchBreakpoints()
  const opvPrice = useOPVBusdPrice({ forceMainnet: true })

  const { bossTeamWallets, pBossTeamWallets, setPBossTeamWallets } = useBossTeamWallets()

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
          <Text fontSize={['12px', , '16px']} bold style={{ textAlign: 'left' }}>
            {text}
          </Text>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Address')}</div>,
      dataIndex: 'address',
      render: (text) => {
        return <TableItemAddress address={text} />
      },
    },
    {
      title: <div style={{ textAlign: 'right' }}>{t('Balance')}</div>,
      dataIndex: 'balance',
      render: (_, record) => {
        return <TableItemBalance address={record?.address} opvPrice={opvPrice} />
      },
    },
  ]
  return (
    <WCardTableTeamWallet>
      {isMobile ? (
        <MobileListContainer
          total={bossTeamWallets?.data?.total}
          dataSource={bossTeamWallets?.data?.rows || []}
          renderItem={(item, index) => (
            <BossTeamWalletMobile index={index + 1} bossTeamWallet={item} opvPrice={opvPrice} />
          )}
        />
      ) : (
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
      )}
    </WCardTableTeamWallet>
  )
}

export default CardTableTeamWallets
