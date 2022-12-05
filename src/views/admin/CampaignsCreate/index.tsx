import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'

import { useRouter } from 'next/router'
import styled from 'styled-components'

const WCampaignsCreate = styled.div`
  width: 100%;
  padding: 35px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(233, 233, 233);
  height: 100%;
  margin-top: 10px;
`

const CampaignsCreate: React.FC = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const handleSubmit = (values) => {
    const data = {}
  }

  return (
    <WCampaignsCreate>
      <div className="zodi-control-page">
        <h1>Create Campaigns</h1>
        <Button type="primary" size="large" onClick={() => router.back()}>
          Back
        </Button>
      </div>
      <Form form={form} onFinish={handleSubmit}>
        <Row gutter={32}>
          <Col span={16} offset={4}>
            <Form.Item name="start" label="Start time" rules={[{ required: true }]}>
              <Input size="large" placeholder="Start time" autoComplete="true" />
            </Form.Item>

            <Form.Item name="end" label="End time" rules={[{ required: true }]}>
              <Input size="large" placeholder="End time" autoComplete="true" />
            </Form.Item>

            <Form.Item name="reward" label="Total Reward" rules={[{ required: true }]}>
              <Input size="large" placeholder="Total Reward" autoComplete="true" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item className="action" style={{ textAlign: 'center' }}>
          <Button size="large" type="default" htmlType="submit" className="primary-button">
            Create campaign
          </Button>
        </Form.Item>
      </Form>
    </WCampaignsCreate>
  )
}

export default CampaignsCreate
