import styled from 'styled-components'
import Link from 'next/link'
import { Col, Form, Input, Row, Select, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const { Option } = Select

interface DataType {
  id: number
  plan: number
  apy: string
  total: number
}

const columns: ColumnsType<DataType> = [
  {
    title: 'No 1',
    dataIndex: 'id',
  },
  {
    title: 'Plan',
    dataIndex: 'plan',
  },
  {
    title: 'APY',
    dataIndex: 'apy',
  },
  {
    title: 'Total Pools Staked',
    dataIndex: 'total',
  },

  {
    title: 'Action',
    render: () => (
      <Space size="middle">
        <Link href="/admin/pool/plan/update">Update</Link>
      </Space>
    ),
  },
]

const data: DataType[] = [
  {
    id: 1,
    plan: 30,
    apy: '10%',
    total: 100,
  },
  {
    id: 2,
    plan: 30,
    apy: '10%',
    total: 100,
  },
  {
    id: 3,
    plan: 30,
    apy: '10%',
    total: 100,
  },
  {
    id: 4,
    plan: 30,
    apy: '10%',
    total: 100,
  },
  {
    id: 5,
    plan: 30,
    apy: '10%',
    total: 100,
  },
]

const WPool = styled.div`
  width: 100%;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(233, 233, 233);
  height: 100%;
  margin-top: 10px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 35px;
  }

  .zodi-control-page {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 32px;

    ${({ theme }) => theme.mediaQueries.md} {
      align-items: flex-end;
      flex-direction: row;
    }

    h1 {
      font-size: 50px;
      font-weight: 500;
      margin-bottom: 20px;

      ${({ theme }) => theme.mediaQueries.md} {
        margin-bottom: 0;
      }
    }

    a {
      border-color: rgb(24, 144, 255);
      background: rgb(24, 144, 255);
      text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
      box-shadow: rgb(0 0 0 / 4%) 0px 2px;
      color: rgb(255, 255, 255) !important;
      padding: 8px 20px;
      min-height: 38px;
      max-height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
      cursor: pointer;
    }
  }

  .anticon {
    margin: 0 !important;
  }

  .ant-table-tbody {
    .ant-space-item:nth-child(1) {
      padding: 8px 12px;
      background-color: rgb(255, 193, 7);
      border-color: rgb(255, 193, 7);
      text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
      box-shadow: rgb(0 0 0 / 4%) 0px 2px;
      color: rgb(33, 37, 41) !important;
    }
  }

  .table-wrapper {
    .table-top {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 30px;

      ${({ theme }) => theme.mediaQueries.sm} {
        flex-direction: row;
      }

      .table-top-left {
        display: flex;
        margin-bottom: 10px;

        ${({ theme }) => theme.mediaQueries.sm} {
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
        }

        h1 {
          margin-right: 15px;
        }
      }

      .table-top-right {
        display: flex;
        flex-direction: column;

        ${({ theme }) => theme.mediaQueries.sm} {
          flex-direction: row;
        }

        a:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          background-color: rgb(255, 193, 7);
          border-color: rgb(255, 193, 7);
          text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
          box-shadow: rgb(0 0 0 / 4%) 0px 2px;
          color: rgb(33, 37, 41) !important;
          margin: 0 0 10px 0;

          ${({ theme }) => theme.mediaQueries.sm} {
            margin: 0 10px 0 0;
          }
        }

        a:nth-child(2) {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          border-color: rgb(23, 162, 184);
          background: rgb(23, 162, 184);
          text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
          box-shadow: rgb(0 0 0 / 4%) 0px 2px;
          color: rgb(255, 255, 255) !important;
        }
      }
    }

    .table-content {
      .ant-pagination {
        display: none;
      }

      .add-pool {
        border-color: rgb(24, 144, 255);
        background: rgb(24, 144, 255);
        text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
        box-shadow: rgb(0 0 0 / 4%) 0px 2px;
        color: rgb(255, 255, 255) !important;
        padding: 8px 20px;
        min-height: 38px;
        max-height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
        cursor: pointer;
        margin-top: 10px;
      }
    }
  }
`

const Pool: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <WPool>
      <div className="zodi-control-page">
        <h1>Admin Pool page</h1>

        <Link href="/admin/pool/create" className="add-pool">
          Add New Pool
        </Link>
      </div>

      <div className="table-wrapper">
        <div className="table-top">
          <div className="table-top-left">
            <h1>Pool id</h1>
            <span>OPV</span>
          </div>

          <div className="table-top-right">
            <Link href="/admin/pool/update" className="add-pool">
              Update Pool
            </Link>

            <Link href="/admin/pool/history/[poolId]" className="add-pool">
              History Pool
            </Link>
          </div>
        </div>

        <div className="table-content">
          <Table columns={columns} dataSource={data} scroll={{ x: 700 }} />
          <div className="add-pool">
            <Link href="/admin/pool/plan/create">New plan</Link>
          </div>
        </div>
      </div>
    </WPool>
  )
}

export default Pool
