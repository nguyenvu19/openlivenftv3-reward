import { Button, Checkbox, Col, DatePicker, Form, Input, Row, Space, Table } from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'

import React, { useEffect, useMemo, useState } from 'react'

import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useClaimDepositHistories, useClaimWithdrawHistories } from 'state/staking/fetchStakingHistory'

import { formatCode } from 'helpers/CommonHelper'
import moment from 'moment'

import useGetOwner from 'hooks/useGetOwner'
import { useAccount } from 'wagmi'

const { RangePicker } = DatePicker

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
  const [form] = Form.useForm()
  const router = useRouter()
  const checkList = ['Deposit', 'Withdraw']

  const [selected, setSelected] = useState('Deposit')

  const { address: account } = useAccount()

  const { owner } = useGetOwner()

  useEffect(() => {
    if (!account || account !== owner) {
      router.push('/admin')
    }
  }, [account, owner, router])

  const columnsDeposit = [
    {
      title: 'Pool ID',
      dataIndex: 'poolId',
    },
    {
      title: 'Plan ID',
      dataIndex: 'planId',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      render: (data) => {
        return formatCode(data, 5, 3)
      },
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (data) => {
        return Number(data) === 1 ? 'Live' : 'Ended'
      },
    },
    {
      title: 'Transaction Hash',
      dataIndex: 'transactionHash',
      render: (data) => {
        return formatCode(data, 5, 3)
      },
    },
    {
      title: 'User Address',
      dataIndex: 'userAddress',
      render: (data) => {
        return formatCode(data, 5, 3)
      },
    },
    {
      title: 'Create time',
      dataIndex: 'createdTime',
      render: (record) => {
        return (
          <div>
            <p>{moment(record.invoice_id).format('DD/MM/YYYY')}</p>
          </div>
        )
      },
    },
    {
      title: 'End time',
      dataIndex: 'endTime',
      render: (record) => {
        return (
          <div>
            <p>{moment(record.invoice_id).format('DD/MM/YYYY')}</p>
          </div>
        )
      },
    },
  ]

  // Get data from deposit history with graph
  const { stakingDepositHistories } = useClaimDepositHistories()
  const depositHistories = stakingDepositHistories.dataDeposit

  const depositHistoriesClone: any[] = useMemo(
    () =>
      depositHistories?.map((campaign) => ({
        ...campaign,
        amount: (Number(campaign.amount) / 1e18).toLocaleString(),
      })),
    [depositHistories],
  )

  const columnsWithdraw = [
    {
      title: 'Pool ID',
      dataIndex: 'poolId',
    },
    {
      title: 'Plan ID',
      dataIndex: 'planId',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      render: (data) => {
        return formatCode(data, 5, 3)
      },
    },
    {
      title: 'Transaction Hash',
      dataIndex: 'transactionHash',
      render: (data) => {
        return formatCode(data, 5, 3)
      },
    },
    {
      title: 'User Address',
      dataIndex: 'userAddress',
      render: (data) => {
        return formatCode(data, 5, 3)
      },
    },
    {
      title: 'Create time',
      dataIndex: 'createdTime',
      render: (record) => {
        return (
          <div>
            <p>{moment(record.invoice_id).format('DD/MM/YYYY')}</p>
          </div>
        )
      },
    },
    {
      title: 'Start time',
      dataIndex: 'startTime',
      render: (record) => {
        return (
          <div>
            <p>{moment(record.invoice_id).format('DD/MM/YYYY')}</p>
          </div>
        )
      },
    },
  ]

  // Get data from withDraw history with graph
  const { stakingWithdrawHistories } = useClaimWithdrawHistories()
  const withdrawHistories = stakingWithdrawHistories.dataWithdraw

  const withdrawHistoriesClone: any[] = useMemo(
    () =>
      withdrawHistories?.map((campaign) => ({
        ...campaign,
      })),
    [withdrawHistories],
  )

  const handleHistory = (poolId) => {
    router.replace(``)
  }

  const handleCheckBox = (e: CheckboxChangeEvent) => {
    setSelected(e.target.value)
  }

  const handleSearch = (e) => {
    return e.target.value
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
            <Row gutter={32}>
              <Col span={8}>
                <Form.Item name="Address" label="Address">
                  <Input size="middle" autoComplete="true" onChange={handleSearch} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="Plan" label="Plan">
                  <Input size="middle" autoComplete="true" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="TxH" label="TxH">
                  <Input size="middle" autoComplete="true" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>

        <div className="history-content-middle">
          {selected === 'Deposit' ? (
            <Table columns={columnsDeposit} dataSource={depositHistoriesClone} scroll={{ x: 1000 }} />
          ) : (
            <Table columns={columnsWithdraw} dataSource={withdrawHistoriesClone} scroll={{ x: 800 }} />
          )}
        </div>
      </div>
    </WPoolHistory>
  )
}

export default PoolHistory
