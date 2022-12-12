import { Button, Col, DatePicker, Form, Input, Row, Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useCampaignsClaimHistory } from 'state/nfts/claimHistory'

import { Flex, Link } from '@pancakeswap/uikit'
import TxStatus from 'components/TxStatus'
import { CONTRACT_ADDRESS } from 'config'
import { ZERO_ADDRESS } from 'config/constants'
import { formatCode } from 'helpers'
import { useRouter } from 'next/router'
import { ClaimHistoryItemType } from 'state/nfts/types'
import styled from 'styled-components'
import { getBlockExploreLink } from 'utils'
import TableClaimHistoryAmount from '../../../MyNftDetail/components/FieldData/Amount'

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
    width: 80,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    width: 80,
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

// const data: ClaimHistoryItemType[] = [
//   {
//     id: '1',
//     tokenId: '1',
//     amount: '3',
//     transactionHash: '0xd60e597b4659390a093108b0b62aeed72e47a38b39948a0182c32faeb32ba0f0',
//     userAddress: '0x6e664e9ba68387cbc527b0f401e3dd9ab24fb75d',
//   },
// ]

// const columns: ColumnsType<ClaimHistoryItemType> = [
//   {
//     title: 'Amount',
//     dataIndex: 'amount',
//     render: (text) => (
//       <div className="table-history-amount">
//         <p>
//           <TableClaimHistoryAmount amount={text} />
//         </p>
//       </div>
//     ),
//   },
//   {
//     title: 'Event',
//     dataIndex: 'userAddress',
//     render: (userAddress) => <p style={{ fontWeight: 700 }}>{userAddress === ZERO_ADDRESS ? 'Buy' : 'Reward'}</p>,
//   },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//     render: () => <TxStatus title="Completed" status="COMPLETED" />,
//   },
//   {
//     title: 'From',
//     dataIndex: 'from',
//     render: () => (
//       <Flex justifyContent="center">
//         <Link external href={getBlockExploreLink(CONTRACT_ADDRESS, 'address')}>
//           {formatCode(CONTRACT_ADDRESS, 5, 5)}
//         </Link>
//       </Flex>
//     ),
//   },
//   {
//     title: 'To',
//     dataIndex: 'userAddress',
//     render: (userAddress) => (
//       <Flex justifyContent="center">
//         <Link external href={getBlockExploreLink(userAddress, 'address')}>
//           {formatCode(userAddress, 5, 5)}
//         </Link>
//       </Flex>
//     ),
//   },
//   {
//     title: 'Txh',
//     dataIndex: 'transactionHash',
//     render: (transactionHash) => (
//       <Flex justifyContent="center">
//         <Link external href={getBlockExploreLink(transactionHash, 'transaction')}>
//           {formatCode(transactionHash, 5, 5)}
//         </Link>
//       </Flex>
//     ),
//   },
// ]

const CampaignsHistory: React.FC = () => {
  const [form] = Form.useForm()
  const router = useRouter()

  // ID of campaign
  const { campaignID } = router.query

  const { campaignsClaimHistory, setParamsCampaignsClaimHistory } = useCampaignsClaimHistory(String(campaignID))
  console.log(campaignsClaimHistory)
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
        <Table
          columns={columns}
          dataSource={campaignsClaimHistory ? campaignsClaimHistory.data : []}
          scroll={{ x: 1200 }}
        />
      </div>
    </WCampaignsHistory>
  )
}

export default CampaignsHistory
