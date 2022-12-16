import { Button, Col, DatePicker, Form, Input, Row } from 'antd'
import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import styled from 'styled-components'

import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import useCatchTxErrorMessage from 'hooks/useCatchTxErrorMessage'
import { useContractStaking } from 'hooks/useContract'
import { useTransactionAdder } from 'state/transactions/hooks'

import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useSelector } from 'react-redux'
import { AppState } from '../../../../../state/index'

const WPlanCreate = styled.div`
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

        ${({ theme }) => theme.mediaQueries.sm} {
          text-align: right;
        }

        .ant-form-item-required {
          justify-content: flex-start;
        }
      }
    }
  }
`

const PlanCreate: React.FC = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const { poolId } = router.query

  const [errorMess, setErrorMess] = useState('')
  const [stakingLoading, setStakingLoading] = useState(false)
  const [amount, setAmount] = useState<string | number>('')

  const { account } = useActiveWeb3React()
  const { owner } = useSelector((state: AppState) => state.admin)

  useEffect(() => {
    if (!account || account.toLowerCase() !== String(owner).toLowerCase()) {
      router.push('/admin')
    }
  }, [account, owner, router])

  const { callWithGasPrice } = useCallWithGasPrice()
  const { fetchWithCatchTxError } = useCatchTxErrorMessage()
  const contractStaking = useContractStaking()
  const addTransaction = useTransactionAdder()

  const handleSubmit = async (values) => {
    const updatePoolParams = {
      poolId,
      planId: values.planId,
      time: (values.time._d.getTime() / 1000).toFixed().toString(),
      periods: values.periods,
      apy: values.apy,
    }

    setErrorMess('')
    setStakingLoading(true)

    const { txResponse, status, message } = await fetchWithCatchTxError(() =>
      callWithGasPrice(contractStaking, 'updatePlan', [
        updatePoolParams.poolId,
        updatePoolParams.planId,
        [updatePoolParams.time, updatePoolParams.periods, updatePoolParams.apy],
      ]),
    )
    setStakingLoading(false)
    if (status) {
      addTransaction(txResponse, {
        summary: `Create plan `,
      })
      setAmount('')
    } else {
      setErrorMess(message)
    }
  }

  return (
    <WPlanCreate>
      <div className="zodi-control-page">
        <h1>Create plan</h1>
        <Button type="primary" size="large" onClick={() => router.back()}>
          Back
        </Button>
      </div>

      <Form form={form} onFinish={handleSubmit}>
        <Row gutter={32}>
          <Col span={16} offset={4}>
            <Form.Item name="planId" label="Plan ID">
              {/* <Select allowClear size="large" placeholder="Selected Plan">
                {stakingList &&
                  stakingList.map((item) => (
                    <Option key={`${item.planId}`} value={`${item.planId}`}>
                      {item.planId}
                    </Option>
                  ))}
              </Select> */}
              <Input size="large" placeholder="Input Plan ID" autoComplete="true" />
            </Form.Item>

            <Form.Item name="time" label="Time">
              <DatePicker style={{ width: '100%' }} autoComplete="true" />
            </Form.Item>

            <Form.Item name="periods" label="Periods">
              <Input size="large" placeholder="Input Periods" autoComplete="true" />
            </Form.Item>

            <Form.Item name="apy" label="APY">
              <Input addonBefore="%" size="large" placeholder="Input APY" autoComplete="true" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item className="action" style={{ textAlign: 'center' }}>
          <Button size="large" type="primary" htmlType="submit" className="primary-button">
            Confirm
          </Button>
        </Form.Item>
      </Form>
    </WPlanCreate>
  )
}

export default PlanCreate
