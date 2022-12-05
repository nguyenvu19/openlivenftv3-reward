import styled from 'styled-components'
import Link from 'next/link'
import { Col, Form, Input, Row, Select, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

const { Option } = Select

interface DataType {
  id: number
  status: string
  reward: number
  claimed: number
  start: string
  end: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'No 1',
    width: 20,
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
  },
  {
    title: 'Status',
    width: 20,
    dataIndex: 'status',
    key: 'status',
    fixed: 'left',
  },
  {
    title: 'Total Reward',
    width: 40,
    dataIndex: 'reward',
    key: 'reward',
    fixed: 'left',
  },
  {
    title: 'Total Claimed',
    width: 40,
    dataIndex: 'claimed',
    key: 'claimed',
    fixed: 'left',
  },
  {
    title: 'Start Date',
    width: 40,
    dataIndex: 'start',
    key: 'start',
    fixed: 'left',
  },
  {
    title: 'End Date',
    width: 40,
    dataIndex: 'end',
    key: 'end',
    fixed: 'left',
  },

  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => (
      <Space size="middle">
        <Link href="/admin/campaigns/update">Update</Link>
        <Link href="/admin/campaigns/setrate">Set rate</Link>
        <Link href="/admin/campaigns/updaterate">Update rate</Link>
        <Link href="/admin/campaigns/history">History</Link>
      </Space>
    ),
  },
]

const data: DataType[] = [
  {
    id: 1,
    status: 'Live',
    reward: 1000000,
    claimed: 2000,
    start: '2022-10-10',
    end: '2023-10-10',
  },
  {
    id: 2,
    status: 'Live',
    reward: 1000000,
    claimed: 2000,
    start: '2022-10-10',
    end: '2023-10-10',
  },
  {
    id: 3,
    status: 'Live',
    reward: 1000000,
    claimed: 2000,
    start: '2022-10-10',
    end: '2023-10-10',
  },
  {
    id: 4,
    status: 'Live',
    reward: 1000000,
    claimed: 2000,
    start: '2022-10-10',
    end: '2023-10-10',
  },
  {
    id: 5,
    status: 'Live',
    reward: 1000000,
    claimed: 2000,
    start: '2022-10-10',
    end: '2023-10-10',
  },
]

const WCampaigns = styled.div`
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

    .ant-space-item:nth-child(2) {
      padding: 8px 12px;
      border-color: rgb(23, 162, 184);
      background: rgb(23, 162, 184);
      text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
      box-shadow: rgb(0 0 0 / 4%) 0px 2px;
      color: rgb(255, 255, 255) !important;
    }

    .ant-space-item:nth-child(3) {
      padding: 8px 12px;
      background-color: rgba(255, 193, 7, 0.815);
      border-color: rgba(255, 193, 7, 0.815);
      text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
      box-shadow: rgb(0 0 0 / 4%) 0px 2px;
      color: rgb(33, 37, 41) !important;
    }

    .ant-space-item:nth-child(4) {
      padding: 8px 12px;
      border-color: rgb(23, 162, 184);
      background: rgb(23, 162, 184);
      text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
      box-shadow: rgb(0 0 0 / 4%) 0px 2px;
      color: rgb(255, 255, 255) !important;
    }
  }
`

const Campaigns: React.FC = () => {
  const [form] = Form.useForm()

  return (
    <WCampaigns>
      <div className="zodi-control-page">
        <h1>Admin Campaigns page</h1>

        <Link href="/admin/campaigns/create" className="add-campaigns">
          Add Campaigns
        </Link>
      </div>

      <Form form={form} className="zodi-form-campaigns">
        <Row gutter={32}>
          <Col span={6}>
            <Form.Item
              name="title"
              label="Title"
              // onChange={(value) => handleSearchTitle(value.target.value)}
            >
              <Input size="large" placeholder="Full title" autoComplete="true" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="status" label="Lock status">
              <Select
                showSearch
                allowClear
                size="large"
                placeholder="All"
                // onChange={(value) => handleSearchStatus(value)}
              >
                <Option value>True</Option>
                <Option value={false}>False</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <div className="table-wrapper">
        <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
      </div>
    </WCampaigns>
  )
}

export default Campaigns
