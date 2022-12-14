import React from 'react'

import styled from 'styled-components'
import { Button, Col, Form, Input, Row } from 'antd'
import { useRouter } from 'next/router'

import UserMenu from '../../../components/Menu/UserMenu'
import ConnectWalletButton from '../../../components/ConnectWalletButton'

const WHome = styled.div`
  width: 100%;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(233, 233, 233);
  height: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Home: React.FC = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const handleSubmit = () => {
    router.push('/admin/campaigns')
  }
  return (
    <WHome>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item className="action" style={{ textAlign: 'center' }}>
          <UserMenu />
        </Form.Item>
      </Form>
    </WHome>
  )
}

export default Home
