/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react'

import { Form, Select } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'

import { useClaimPools } from 'state/staking/fetchPoolList'
import { useRouter } from 'next/router'

import { useAccount } from 'wagmi'
import useGetOwner from 'hooks/useGetOwner'

const { Option } = Select

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
  }

  .anticon {
    margin: 0 !important;
  }

  .ant-table-tbody {
    .ant-space-item:nth-child(1) {
      padding: 8px 12px;
      background-color: rgb(255, 193, 7);
      border-color: rgb(255, 193, 7);
      text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
      box-shadow: rgb(0 0 0 / 4%) 0px 2px;
      color: rgb(33, 37, 41) !important;
    }
  }

  .table-wrapper {
    .table-top {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 30px;

      ${({ theme }) => theme.mediaQueries.sm} {
        flex-direction: row;
      }

      .table-top-left {
        display: flex;
        margin-bottom: 10px;

        ${({ theme }) => theme.mediaQueries.sm} {
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
        }

        h1 {
          margin-right: 15px;
        }
      }

      .table-top-right {
        display: flex;
        flex-direction: column;

        ${({ theme }) => theme.mediaQueries.sm} {
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
    }
  }
`

const Pool: React.FC = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const { address: account } = useAccount()

  const { owner } = useGetOwner()

  useEffect(() => {
    if (!account || account !== owner) {
      router.push('/admin')
    }
  }, [account, owner, router])

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

  return (
    <WPool>
      {poolLists.data !== undefined &&
        poolLists.data.map((poolList) => (
          <>
            <div className="zodi-control-page">
              <h1>Admin Pool page</h1>

              <button className="add-pool" onClick={handleAddPool}>
                Add New Pool
              </button>
            </div>
            <div className="table-wrapper">
              <div className="table-top">
                <div className="table-top-left">
                  <h1>Pool ID: {poolList.id}</h1>

                  <span>OPV</span>
                </div>

                <div className="table-top-right">
                  <Link href={`/admin/pool/update/${poolList.id}`} className="update-pool">
                    Update Pool
                  </Link>

                  <Link href={`/admin/pool/history/${poolList.id}`} className="history-pool">
                    History Pool
                  </Link>

                  <button className="list-pool" id={poolList.id} onClick={handleShowPlan}>
                    Show Plan
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
    </WPool>
  )
}

export default Pool
