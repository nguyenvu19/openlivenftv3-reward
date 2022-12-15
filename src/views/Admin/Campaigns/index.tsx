import { useMemo, useEffect } from 'react'

import { Col, Form, Row, Select, Space, Table } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'

import { useCampaigns, usePollCoreCampaignsData } from 'state/campaigns/hooks'
import { useRouter } from 'next/router'

import { useAccount } from 'wagmi'
import useGetOwner from 'hooks/useGetOwner'

const { Option } = Select

const WCampaigns = styled.div`
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

    .ant-space-item:nth-child(2) {
      padding: 8px 12px;
      border-color: rgb(23, 162, 184);
      background: rgb(23, 162, 184);
      text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
      box-shadow: rgb(0 0 0 / 4%) 0px 2px;
      color: rgb(255, 255, 255) !important;
    }

    .ant-space-item:nth-child(3) {
      padding: 8px 12px;
      background-color: rgba(255, 193, 7, 0.815);
      border-color: rgba(255, 193, 7, 0.815);
      text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
      box-shadow: rgb(0 0 0 / 4%) 0px 2px;
      color: rgb(33, 37, 41) !important;
    }

    .ant-space-item:nth-child(4) {
      padding: 8px 12px;
      border-color: rgb(23, 162, 184);
      background: rgb(23, 162, 184);
      text-shadow: rgb(0 0 0 / 12%) 0px -1px 0px;
      box-shadow: rgb(0 0 0 / 4%) 0px 2px;
      color: rgb(255, 255, 255) !important;
    }
  }

  .zodi-form-campaigns {
    .ant-row {
      display: flex;
      flex-direction: column;

      ${({ theme }) => theme.mediaQueries.sm} {
        flex-direction: row;
      }

      .ant-form-item-row {
        display: flex;

        ${({ theme }) => theme.mediaQueries.sm} {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }
`

const Campaigns: React.FC = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const { address: account } = useAccount()

  const { owner } = useGetOwner()

  useEffect(() => {
    if (!account && account !== owner) {
      router.push('/admin')
    }
  }, [account, owner, router])

  usePollCoreCampaignsData() // list campaign data

  const { data: campaigns } = useCampaigns()

  // Check status
  const campaignsClone: any[] = useMemo(
    () =>
      campaigns?.map((campaign) => ({
        ...campaign,
        status: campaign.finish - campaign.start > 0 ? 'Live' : 'End',
        totalPool: Number(campaign.totalPool).toLocaleString(),

        start: `${new Date(campaign.start).getDay()}/${new Date(campaign.start).getMonth()}/${new Date(
          campaign.start,
        ).getFullYear()}`,

        finish: `${new Date(campaign.finish).getDay()}/${new Date(campaign.finish).getMonth()}/${new Date(
          campaign.finish,
        ).getFullYear()}`,
      })),
    [campaigns],
  )

  const columns = [
    {
      title: 'No 1',
      dataIndex: 'id',
      width: 70,
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Total Reward',
      dataIndex: 'totalPool',
    },
    {
      title: 'Total Claimed',
      dataIndex: 'currentPool',
    },
    {
      title: 'Start Date',
      dataIndex: 'start',
    },
    {
      title: 'End Date',
      dataIndex: 'finish',
    },

    {
      title: 'Action',
      dataIndex: 'id',

      render: (id) => (
        <Space size="middle">
          <Link href={`/admin/campaigns/update/${id}`}>Update</Link>
          <Link href={`/admin/campaigns/setrate/${id}`}>Set rate</Link>
          <Link href={`/admin/campaigns/updaterate/${id}`}>Update rate</Link>
          <Link href={`/admin/campaigns/history/${id}`}>History</Link>
        </Space>
      ),
    },
  ]

  return (
    <WCampaigns>
      <div className="zodi-control-page">
        <h1>Campaign Summary</h1>

        <Link href="/admin/campaigns/create" className="add-campaigns">
          Add Campaigns
        </Link>

        {/* <Link
          href={{ pathname: '/admin/campaigns/create', query: { dataCampaigns: JSON.stringify(campaignsClone) } }}
          className="add-campaigns"
        >
          Add Campaigns
        </Link> */}
      </div>

      <Form form={form} className="zodi-form-campaigns">
        <Row gutter={32}>
          <Col>
            {/* <Form.Item
              name="title"
              label="Title"
              // onChange={(value) => handleSearchTitle(value.target.value)}
            >
              <Input size="middle" placeholder="Full title" autoComplete="true" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="status" label="Lock status">
              <Select
                showSearch
                allowClear
                size="middle"
                placeholder="All"
                // onChange={(value) => handleSearchStatus(value)}
              >
                <Option value>True</Option>
                <Option value={false}>False</Option>
              </Select>
            </Form.Item> */}
          </Col>
        </Row>
      </Form>

      <div className="table-wrapper">
        <Table columns={columns} dataSource={campaignsClone} rowKey={(record) => record.id} scroll={{ x: 1400 }} />
      </div>
    </WCampaigns>
  )
}

export default Campaigns
