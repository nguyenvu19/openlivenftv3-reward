import styled from 'styled-components'
import { Table } from 'antd'
import { useTranslation } from '@pancakeswap/localization'
import { Button, Flex, useMatchBreakpoints } from '@pancakeswap/uikit'
import PackageStakingItemMobile from './PackageStakingItemMobile'

const WPackageStakingList = styled.div`
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
        font-size: 13px;
        font-weight: 600;
        padding: 12px 6px;
        background: transparent;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        ${({ theme }) => theme.mediaQueries.sm} {
          font-size: 16px;
          padding: 12px;
        }
        &:first-child {
          padding-left: 0;
        }
      }

      .staking-item-token {
      }
      .staking-item-apr {
        color: #008d0e;
      }
      .staking-item-duration {
        padding: 6px 20px;
        background: #edf0f3;
        border-radius: 8px;
      }
    }
  }
`

const PackageStakingList = ({ onStaking }) => {
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()
  const columns = [
    {
      title: t('Token'),
      dataIndex: 'title',
      render: (text) => {
        return <div className="staking-item-token">{text}</div>
      },
    },
    {
      title: t('Est.APR'),
      dataIndex: 'apr',
      render: (text) => {
        return <div className="staking-item-apr">{text}</div>
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Duration (days)')}</div>,
      dataIndex: 'duration',
      render: () => {
        return (
          <div className="staking-item-duration" style={{ textAlign: 'center' }}>
            60
          </div>
        )
      },
    },
    {
      title: <div style={{ textAlign: 'center' }}>{t('Minimum Locked Amount')}</div>,
      dataIndex: 'amount',
      render: () => {
        return (
          <div className="staking-item-amount" style={{ textAlign: 'center' }}>
            0.00001 OPV
          </div>
        )
      },
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_, record) => {
        return (
          <Flex justifyContent="flex-end">
            <Button scale="sm" minWidth={[, '120px']} onClick={() => onStaking(record)}>
              Stake
            </Button>
          </Flex>
        )
      },
    },
  ]
  const data = [
    { id: 1, title: 'OPV1', apr: '6.2%', duration: new Date().getTime(), amount: 199 },
    { id: 2, title: 'OPV2', apr: '6.2%', duration: new Date().getTime(), amount: 199 },
    { id: 3, title: 'OPV3', apr: '6.2%', duration: new Date().getTime(), amount: 199 },
    { id: 4, title: 'OPV4', apr: '6.2%', duration: new Date().getTime(), amount: 199 },
    { id: 5, title: 'OPV5', apr: '6.2%', duration: new Date().getTime(), amount: 199 },
    { id: 6, title: 'OPV6', apr: '6.2%', duration: new Date().getTime(), amount: 199 },
  ]
  return (
    <WPackageStakingList>
      {/* {isMobile ? (
        <>
          {data.map((item) => {
            return <PackageStakingItemMobile packageItem={item} />
          })}
        </>
      ) : ( */}
      <Table
        columns={columns}
        scroll={{ x: 400 }}
        rowKey={(record) => record.id}
        dataSource={data}
        pagination={false}
      />
      {/* )} */}
    </WPackageStakingList>
  )
}

export default PackageStakingList
