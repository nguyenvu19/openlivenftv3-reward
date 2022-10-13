import { Table } from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import type { FilterValue } from 'antd/es/table/interface'
import React, { useState } from 'react'
import styled from 'styled-components'

interface DataType {
  action: string
  amount: string
  event: string
  status: string
  from: string
  to: string
  txh: string
}

interface TableParams {
  pagination?: TablePaginationConfig
  sortField?: string
  sortOrder?: string
  filters?: Record<string, FilterValue>
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: '20%',
    render: (text, record) => (
      <div className="table-history-amount">
        <p data-amount={record.action}> {text} </p>
        <p>2 minutes ago</p>
      </div>
    ),
  },
  {
    title: 'Event',
    dataIndex: 'event',
    width: '20%',
    render: (text) => <p style={{ fontWeight: 700 }}>{text}</p>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (text) => (
      <p data-status={text} className="table-history-status">
        {text}
      </p>
    ),
  },
  {
    title: 'From',
    dataIndex: 'from',
  },
  {
    title: 'To',
    dataIndex: 'to',
  },
  {
    title: 'Txh',
    dataIndex: 'txh',
  },
]

const dataSource2: DataType[] = [
  {
    action: 'deposit',
    amount: '+500 USDT',
    event: 'Buy',
    status: 'Completed',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
]

const WHistoryTableNftDetail = styled.div`
  .ant-table-wrapper {
    .ant-table {
      border-radius: 8px;
      .ant-table-container {
        .ant-table-content {
          > table {
            background: rgba(238, 251, 255, 0.4);
            border: 1px solid #0aadad;
            padding: 16px 32px;
            border-radius: 8px;
            .ant-table-thead {
              > tr th {
                background: transparent;
                border-bottom: 2px solid rgba(0, 124, 162, 0.3);
                text-align: center;
                color: #007ca2;
                font-weight: 700;
                &:before {
                  display: none;
                }
              }
            }
            .ant-table-tbody {
              > tr td {
                text-align: center;
                border-bottom: none;
                .table-history-amount {
                  p {
                    &[data-amount='deposit'] {
                      font-weight: 700;
                      color: green;
                    }
                    &[data-amount='withdraw'] {
                      font-weight: 700;
                      color: red;
                    }
                  }
                }
                .table-history-status {
                  &[data-status='Completed'] {
                    background: #008d0e;
                  }
                  &[data-status='Pending'] {
                    background: #ebc500;
                  }
                  color: #ffffff;
                  font-weight: 700;
                  font-size: 16px;
                  line-height: 140%;
                  border-radius: 4px;
                  width: 103px;
                  height: 30px;
                  padding: 4px 8px;
                }
                .table-history-transaction {
                  display: flex;
                  align-items: center;
                  .table-history-transaction-img {
                    width: 34px;
                  }
                }
              }
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
  }
`

const HistoryTableNftDetail: React.FC = () => {
  const [loading, setLoading] = useState(false)
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
    <WHistoryTableNftDetail>
      <Table
        columns={columns}
        dataSource={dataSource2}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </WHistoryTableNftDetail>
  )
}

export default HistoryTableNftDetail
