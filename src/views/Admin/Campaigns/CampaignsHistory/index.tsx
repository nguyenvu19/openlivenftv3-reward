import { useEffect } from 'react'

import { Button, Col, DatePicker, Form, Input, Row, Space, Table } from 'antd'
import { useCampaignsClaimHistory } from 'state/nfts/claimHistory'

import { useRouter } from 'next/router'
import styled from 'styled-components'

import useGetOwner from 'hooks/useGetOwner'
import { useAccount } from 'wagmi'

const WCampaignsHistory = styled.div`
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

  .ant-form-horizontal {
    margin-bottom: 20px;

    .ant-form-item {
      margin-bottom: 20px;

      ${({ theme }) => theme.mediaQueries.md} {
        margin-bottom: 0;
      }

      .ant-form-item-row {
        flex-direction: column;
      }
    }

    .ant-row {
      width: 100%;
      margin-right: 10px;

      .ant-col {
        max-width: 100%;
        min-width: 80px;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        ${({ theme }) => theme.mediaQueries.md} {
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
        }
      }
    }

    .ant-space-vertical {
      margin-top: 20px;
      ${({ theme }) => theme.mediaQueries.sm} {
        margin-top: 0;
      }
    }
  }
`

const { RangePicker } = DatePicker

const columns = [
  {
    title: 'No 1',
    dataIndex: 'id',
    width: 70,
  },
  {
    title: 'Campaign ID',
    dataIndex: 'campaignId',
    width: 120,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: 80,
    render: (data: any) => {
      return (data / 1e18).toLocaleString()
    },
  },
  {
    title: 'TxH',
    dataIndex: 'transactionHash',
    width: 360,
  },
  {
    title: 'Address',
    dataIndex: 'userAddress',
  },
]

const CampaignsHistory: React.FC = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  const { address: account } = useAccount()

  const { owner } = useGetOwner()

  useEffect(() => {
    if (!account || account !== owner) {
      router.push('/admin')
    }
  }, [account, owner, router])

  // ID of campaign
  const { campaignID } = router.query

  const { campaignsClaimHistory, setParamsCampaignsClaimHistory } = useCampaignsClaimHistory(String(campaignID))

  const handleSubmit = (values) => {
    const data2 = {}
  }

  return (
    <WCampaignsHistory>
      <div className="zodi-control-page">
        <h1>History Claim Reward</h1>
        <Button type="primary" size="large" onClick={() => router.back()}>
          Back
        </Button>
      </div>

      <Form form={form} onFinish={handleSubmit}>
        <Row>
          <Col>
            <Form.Item name="Address" label="Address">
              <Input size="middle" placeholder="Address" autoComplete="true" />
            </Form.Item>

            <Form.Item name="Campaign" label="Campaign">
              <Input size="middle" placeholder="Campaign" autoComplete="true" />
            </Form.Item>

            <Form.Item name="Date" label="Date">
              <Space direction="vertical" size={12}>
                <RangePicker />
              </Space>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <div className="table-wrapper">
        <Table columns={columns} dataSource={campaignsClaimHistory.data} scroll={{ x: 2000 }} />
      </div>
    </WCampaignsHistory>
  )
}

export default CampaignsHistory