/* eslint-disable react/button-has-type */
import React, { Fragment } from 'react'

import { Table, Form, Select } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'

import { useRouter } from 'next/router'
import { useClaimPools } from 'state/staking/fetchPoolList'
import { formatCode } from 'helpers'
import { getBlockExploreLink } from 'utils'

const WPool = styled.div`
  width: 100%;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(233, 233, 233);
  height: 100%;
  margin-top: 10px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 35px;
  }

  .admin-pool-page {
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

    .admin-pool-head-action {
      display: flex;

      button {
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

      a {
        text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
        box-shadow: rgb(0 0 0 / 4%) 0px 2px;
        padding: 8px 20px;
        min-height: 38px;
        max-height: 38px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
        cursor: pointer;
        background-color: rgb(255, 193, 7);
        border-color: rgb(255, 193, 7);
        color: rgb(33, 37, 41) !important;
        margin: 0 0 0 10px;
      }
    }
  }

  .anticon {
    margin: 0 !important;
  }

  .table-wrapper {
    .table-top {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 30px;

      ${({ theme }) => theme.mediaQueries.md} {
        flex-direction: row;
      }
    }
  }

  .admin-pool-action {
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.mediaQueries.sm} {
      align-items: center;
      flex-direction: row;
    }

    a:nth-child(1) {
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

      ${({ theme }) => theme.mediaQueries.sm} {
        margin: 0 10px 0 0;
      }
    }

    a:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 12px;
      border-color: rgb(23, 162, 184);
      background: rgb(23, 162, 184);
      text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
      box-shadow: rgb(0 0 0 / 4%) 0px 2px;
      color: rgb(255, 255, 255) !important;
      margin: 0 0 10px 0;

      ${({ theme }) => theme.mediaQueries.sm} {
        margin: 0 10px 0 0;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px 12px;
      border: none;
      border-color: rgb(30, 160, 48);
      background: rgb(30, 160, 48);
      color: rgb(255, 255, 255) !important;
      cursor: pointer;
    }
  }
`

const Pool: React.FC = () => {
  const router = useRouter()
  const { poolLists } = useClaimPools()

  const handleAddPool = () => {
    if (poolLists.data !== undefined) {
      // router.push({
      //   pathname: '/admin/pool/create/',
      //   query: { poolId: poolLists.data.map((pool) => pool.id) },
      // })
      router.push('/admin/pool/create')
    }
  }

  const handleShowPlan = (e) => {
    if (poolLists.data !== undefined) {
      router.push(`/admin/pool/${e.target.id}/plan`)
    }
  }

  const columns = [
    {
      title: 'No.',
      dataIndex: 'id',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Pool ID',
      dataIndex: 'id',
    },
    {
      title: 'LP Token',
      dataIndex: 'lpTokenName',
      render: (_, record) => (
        <a href={getBlockExploreLink(record.lpAddress, 'token')} target="_blank" rel="noreferrer">
          <div>{record.lpTokenName}</div>
          <div>({formatCode(record.lpAddress, 5, 5)})</div>
        </a>
      ),
    },
    {
      title: 'Reward Token',
      dataIndex: 'lpTokenName',
      render: (_, record) => (
        <a href={getBlockExploreLink(record.rewardAddress, 'token')} target="_blank" rel="noreferrer">
          <div>{record.rewardTokenName}</div>
          <div>({formatCode(record.rewardAddress, 5, 5)})</div>
        </a>
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      render: (_, record) => (
        <>
          <div className="admin-pool-action">
            <Link href={`/admin/pool/update/${record.id}`} className="update-pool">
              Update Pool
            </Link>

            <Link href={`/admin/pool/history/${record.id}`} className="history-pool">
              History Pool
            </Link>

            <button className="list-pool" id={record.id} onClick={handleShowPlan}>
              Show Plan
            </button>
          </div>
        </>
      ),
    },
  ]

  return (
    <WPool>
      <div className="admin-pool-page">
        <h1>Stake Pools</h1>
        <div className="admin-pool-head-action">
          <button className="add-pool" onClick={handleAddPool}>
            Add New Pool
          </button>

          <Link href="/admin/pool/withdraw" className="withdraw-campaigns">
            Withdraw
          </Link>
        </div>
      </div>
      <div className="table-wrapper">
        <Table
          columns={columns}
          rowKey={(record) => record.id}
          scroll={{ x: 900 }}
          dataSource={poolLists?.data || []}
        />
      </div>
    </WPool>
  )
}

export default Pool
