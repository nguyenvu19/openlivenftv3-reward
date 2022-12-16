import React, { useEffect } from 'react'

import { Form } from 'antd'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useGetOwner } from 'state/admin/hook'

import UserMenu from 'components/Menu/UserMenu'

const WHome = styled.div`
  width: 100%;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(233, 233, 233);
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Home: React.FC = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const { account } = useActiveWeb3React()

  const { owner } = useGetOwner()

  useEffect(() => {
    if (!account || account.toLowerCase() !== String(owner).toLowerCase()) {
      router.push('/admin')
    } else {
      router.push('/admin/campaigns')
    }
  }, [account, owner, router])

  return (
    <WHome>
      <Form form={form}>
        <Form.Item className="action" style={{ textAlign: 'center' }}>
          <UserMenu />
        </Form.Item>
      </Form>
    </WHome>
  )
}

export default Home
