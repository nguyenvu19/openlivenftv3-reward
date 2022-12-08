import { Button, Checkbox, Col, DatePicker, Form, Input, Row, Space, Table } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import type { ColumnsType } from 'antd/es/table'
import React, { useState } from 'react'

import { useRouter } from 'next/router'
import styled from 'styled-components'

const { RangePicker } = DatePicker

// Table data
interface DataType {
  id: number
  address: string
  amount: number
  plan: number
  status: string
  txh: string
  start: string
  end: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'No.',
    dataIndex: 'id',
    width: 70,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: 80,
  },
  {
    title: 'Plan',
    dataIndex: 'plan',
    width: 80,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 80,
  },
  {
    title: 'TxH',
    dataIndex: 'txh',
    width: 360,
  },
  {
    title: 'Start',
    dataIndex: 'start',
    width: 80,
  },

  {
    title: 'End',
    dataIndex: 'end',
    width: 80,
  },
]

const data: DataType[] = [
  {
    id: 1,
    address: '0x6e664e9ba68387cbc527b0f401e3dd9ab24fb75d',
    amount: 3,
    plan: 1,
    status: 'Holding',
    txh: '0xd60e597b4659390a093108b0b62aeed72e47a38b39948a0182c32faeb32ba0f0',
    start: '2022/10/10',
    end: '2023/10/10',
  },
  {
    id: 2,
    address: '0x6e664e9ba68387cbc527b0f401e3dd9ab24fb75d',
    amount: 3,
    plan: 1,
    status: 'Holding',
    txh: '0xd60e597b4659390a093108b0b62aeed72e47a38b39948a0182c32faeb32ba0f0',
    start: '2022/10/10',
    end: '2023/10/10',
  },
  {
    id: 3,
    address: '0x6e664e9ba68387cbc527b0f401e3dd9ab24fb75d',
    amount: 3,
    plan: 1,
    status: 'Holding',
    txh: '0xd60e597b4659390a093108b0b62aeed72e47a38b39948a0182c32faeb32ba0f0',
    start: '2022/10/10',
    end: '2023/10/10',
  },
  {
    id: 4,
    address: '0x6e664e9ba68387cbc527b0f401e3dd9ab24fb75d',
    amount: 3,
    plan: 1,
    status: 'Holding',
    txh: '0xd60e597b4659390a093108b0b62aeed72e47a38b39948a0182c32faeb32ba0f0',
    start: '2022/10/10',
    end: '2023/10/10',
  },
  {
    id: 5,
    address: '0x6e664e9ba68387cbc527b0f401e3dd9ab24fb75d',
    amount: 3,
    plan: 1,
    status: 'Holding',
    txh: '0xd60e597b4659390a093108b0b62aeed72e47a38b39948a0182c32faeb32ba0f0',
    start: '2022/10/10',
    end: '2023/10/10',
  },
]

const WPoolHistory = styled.div`
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

  .ant-form {
    .ant-row {
      .ant-col {
        margin: 0;

        ${({ theme }) => theme.mediaQueries.sm} {
          margin-left: 16.66666667%;
        }
      }

      .ant-form-item-label {
        min-width: 110px;
        margin-left: 0;
        text-align: left;

        .ant-form-item-required {
          justify-content: flex-start;
        }
      }
    }
  }

  .history-content {
    .history-content-head {
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;

      ${({ theme }) => theme.mediaQueries.md} {
        flex-direction: row;
        align-items: center;
      }

      .ant-checkbox-wrapper {
        margin: 0 0 10px 0;

        ${({ theme }) => theme.mediaQueries.md} {
          margin: 0 10px 5px 0;
        }
      }

      .ant-form-item {
        margin: 0;
      }
    }

    .history-content-middle {
      margin-bottom: 10px;

      .ant-row {
        .ant-col {
          ${({ theme }) => theme.mediaQueries.sm} {
            margin: 0 !important;
          }
        }
      }

      .ant-checkbox-wrapper {
        margin: 0 0 10px 0;

        ${({ theme }) => theme.mediaQueries.md} {
          margin: 0 10px 5px 0;
        }
      }

      .ant-form-item {
        margin: 0;
      }
    }
  }
`

const PoolHistory: React.FC = () => {
  const checkList = ['Deposit', 'Withdraw']
  const [selected, setSelected] = useState('Deposit')

  const [form] = Form.useForm()

  const router = useRouter()
  const { query, pathname } = router

  const handleHistory = (poolId) => {
    router.replace(``)
  }

  const handleCheckBox = (e: CheckboxChangeEvent) => {
    setSelected(e.target.value)
  }

  return (
    <WPoolHistory>
      <div className="zodi-control-page">
        <h1>History pool</h1>
        <Button type="primary" size="large" onClick={() => router.back()}>
          Back
        </Button>
      </div>

      <div className="history-content">
        <div className="history-content-head">
          {checkList.map((item) => {
            return (
              <Checkbox name={item} key={item} onChange={handleCheckBox} checked={item === selected} value={item}>
                {item}
              </Checkbox>
            )
          })}

          <Form.Item name="Date" label="Date">
            <Space direction="vertical" size={12}>
              <RangePicker />
            </Space>
          </Form.Item>
        </div>

        <div className="history-content-middle">
          <Form form={form}>
            <Row>
              <Col>
                <Form.Item name="Address" label="Address">
                  <Input size="middle" autoComplete="true" />
                </Form.Item>

                <Form.Item name="Plan" label="Plan">
                  <Input size="middle" autoComplete="true" />
                </Form.Item>

                <Form.Item name="TxH" label="TxH">
                  <Input size="middle" autoComplete="true" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>

        <div className="history-content-middle">
          <Table columns={columns} dataSource={data} scroll={{ x: 1200 }} />
        </div>
      </div>
    </WPoolHistory>
  )
}

export default PoolHistory
