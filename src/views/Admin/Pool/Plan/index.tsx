import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Button, Form, Space, Table } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'

import { useStakingListData } from 'state/staking/fetchStakingList'

import useGetOwner from 'hooks/useGetOwner'
import { useAccount } from 'wagmi'

const WPlanList = styled.div`
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

  .ant-form-item-control-input {
    #Pool {
      padding: 0;

      ::placeholder {
        color: rgba(0, 0, 0, 0.85);
        font-size: 14px;
      }
    }
  }

  .table-content {
    .ant-pagination {
      display: none;
    }

    .add-pool {
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
      margin-top: 10px;
    }

    .ant-table-tbody {
      .ant-table-cell:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 12px;
        background-color: rgb(255, 193, 7);
        border-color: rgb(255, 193, 7);
        text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
        box-shadow: rgb(0 0 0 / 4%) 0px 2px;
        color: rgb(33, 37, 41) !important;
        margin: 0 0 10px 0;
      }
    }
  }
`

const PlanList: React.FC = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const { address: account } = useAccount()

  const { owner } = useGetOwner()

  useEffect(() => {
    if (!account || account !== owner) {
      router.push('/admin')
    }
  }, [account, owner, router])

  const { poolId } = router.query

  const { stakingList, fetchStakingList } = useStakingListData()

  const columns = [
    {
      title: 'No 1',
      dataIndex: 'planId',
    },
    {
      title: 'Plan',
      dataIndex: 'planId',
    },
    {
      title: 'APY',
      dataIndex: 'apr',
    },
    {
      title: 'Total Pools Staked',
      dataIndex: 'totalStakedAmount',
      render: (data) => {
        return data.toLocaleString()
      },
    },

    {
      title: 'Action',
      key: 'planID',
      render: (data, item) => (
        <Space size="middle">
          <Link href={`/admin/pool/${poolId}/plan/update/${item.planId}`}>Update</Link>
        </Space>
      ),
    },
  ]
  const handleSubmit = (values) => {
    const data = {}
  }

  return (
    <WPlanList>
      <div className="zodi-control-page">
        <h1>Plan list</h1>
        <Button type="primary" size="large" onClick={() => router.back()}>
          Back
        </Button>
      </div>

      <div className="table-content">
        <Table columns={columns} dataSource={stakingList || []} scroll={{ x: 700 }} />
        <div className="add-pool">
          <Link href={`/admin/pool//${poolId}/plan/create`}>New plan</Link>
        </div>
      </div>
    </WPlanList>
  )
}

export default PlanList
