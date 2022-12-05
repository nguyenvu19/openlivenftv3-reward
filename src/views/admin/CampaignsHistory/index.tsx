import { Button, Col, Form, Input, Row, Select, DatePicker, Space, Table } from 'antd'
import { Option } from 'antd/lib/mentions'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'

import React from 'react'

import { useRouter } from 'next/router'
import styled from 'styled-components'

const WCampaignsHistory = styled.div`
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
    margin: 0;
  }

  .ant-form-horizontal {
    margin-bottom: 20px;

    .ant-form-item {
      margin-bottom: 20px;

      ${({ theme }) => theme.mediaQueries.md} {
        margin-bottom: 0;
      }
    }

    .ant-row {
      width: 100%;
      margin-right: 10px;

      .ant-col {
        max-width: 100%;
        min-width: 80px;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        ${({ theme }) => theme.mediaQueries.md} {
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
        }
      }
    }

    .ant-space-vertical {
      margin-top: 20px;
      ${({ theme }) => theme.mediaQueries.sm} {
        margin-top: 0;
      }
    }
  }
`

const { RangePicker } = DatePicker

interface DataType {
  id: number
  campaign: number
  amount: number
  txh: string
  address: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'No 1',
    width: 5,
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
  },
  {
    title: 'Campaign',
    width: 7,
    dataIndex: 'campaign',
    key: 'campaign',
    fixed: 'left',
  },
  {
    title: 'Amount',
    width: 6,
    dataIndex: 'amount',
    key: 'amount',
    fixed: 'left',
  },
  {
    title: 'TxH',
    width: 40,
    dataIndex: 'txh',
    key: 'txh',
    fixed: 'left',
  },
  {
    title: 'Address',
    width: 40,
    dataIndex: 'address',
    key: 'address',
    fixed: 'left',
  },
]

const data: DataType[] = [
  {
    id: 1,
    campaign: 1,
    amount: 3,
    txh: '0xd60e597b4659390a093108b0b62aeed72e47a38b39948a0182c32faeb32ba0f0',
    address: '0x6e664e9ba68387cbc527b0f401e3dd9ab24fb75d',
  },
  {
    id: 2,
    campaign: 1,
    amount: 3,
    txh: '0xd60e597b4659390a093108b0b62aeed72e47a38b39948a0182c32faeb32ba0f0',
    address: '0x6e664e9ba68387cbc527b0f401e3dd9ab24fb75d',
  },
  {
    id: 3,
    campaign: 1,
    amount: 3,
    txh: '0xd60e597b4659390a093108b0b62aeed72e47a38b39948a0182c32faeb32ba0f0',
    address: '0x6e664e9ba68387cbc527b0f401e3dd9ab24fb75d',
  },
  {
    id: 4,
    campaign: 1,
    amount: 3,
    txh: '0xd60e597b4659390a093108b0b62aeed72e47a38b39948a0182c32faeb32ba0f0',
    address: '0x6e664e9ba68387cbc527b0f401e3dd9ab24fb75d',
  },
  {
    id: 5,
    campaign: 1,
    amount: 3,
    txh: '0xd60e597b4659390a093108b0b62aeed72e47a38b39948a0182c32faeb32ba0f0',
    address: '0x6e664e9ba68387cbc527b0f401e3dd9ab24fb75d',
  },
]

const CampaignsHistory: React.FC = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const handleSubmit = (values) => {
    const data2 = {}
  }

  return (
    <WCampaignsHistory>
      <div className="zodi-control-page">
        <h1>History Claim Reward</h1>
        <Button type="primary" size="large" onClick={() => router.back()}>
          Back
        </Button>
      </div>

      <Form form={form} onFinish={handleSubmit}>
        <Row>
          <Col>
            <Form.Item name="Address" label="Address">
              <Input size="large" placeholder="Address" autoComplete="true" />
            </Form.Item>

            <Form.Item name="Campaign" label="Campaign">
              <Input size="large" placeholder="Campaign" autoComplete="true" />
            </Form.Item>

            <Space direction="vertical" size={12}>
              <RangePicker />
            </Space>
          </Col>
        </Row>
      </Form>

      <div className="table-wrapper">
        <Table columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
      </div>
    </WCampaignsHistory>
  )
}

export default CampaignsHistory
