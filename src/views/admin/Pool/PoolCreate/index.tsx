import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'

import { useRouter } from 'next/router'
import styled from 'styled-components'

const WPoolCreate = styled.div`
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
      align-items: center;
      justify-content: center;

      .ant-col {
        margin: 0;

        ${({ theme }) => theme.mediaQueries.sm} {
          margin-left: 16.66666667%;
        }
      }

      .ant-form-item-label {
        min-width: 167px;
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

const PoolCreate: React.FC = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const handleSubmit = (values) => {
    const data = {}
  }

  return (
    <WPoolCreate>
      <div className="zodi-control-page">
        <h1>Create pool</h1>
        <Button type="primary" size="large" onClick={() => router.back()}>
          Back
        </Button>
      </div>

      <Form form={form} onFinish={handleSubmit}>
        <Row gutter={32}>
          <Col offset={4}>
            <Form.Item name="Reward Address" label="Reward Address">
              <Input size="large" placeholder="Input contract currency" autoComplete="true" />
            </Form.Item>

            <Form.Item name="Staked Token Address" label="Input contract currency">
              <Input size="large" placeholder="Input contract currency" autoComplete="true" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item className="action" style={{ textAlign: 'center' }}>
          <Button size="large" type="primary" htmlType="submit" className="primary-button">
            Confirm
          </Button>
        </Form.Item>
      </Form>
    </WPoolCreate>
  )
}

export default PoolCreate
