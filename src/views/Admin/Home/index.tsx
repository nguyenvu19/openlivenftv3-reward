import React, { useEffect } from 'react'

import styled from 'styled-components'
import { Button, Col, Form, Input, Row } from 'antd'
import { useRouter } from 'next/router'

import { useWeb3React } from '@pancakeswap/wagmi'
import { useAccount } from 'wagmi'

import useGetOwner from 'hooks/useGetOwner'

import { useContractFarm, useContractStaking } from 'hooks/useContract'

import UserMenu from 'components/Menu/UserMenu'
import ConnectWalletButton from 'components/ConnectWalletButton'

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

  const { address: account } = useAccount()

  const { owner } = useGetOwner()

  useEffect(() => {
    if (!account || account !== owner) {
      router.push('/admin')
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
