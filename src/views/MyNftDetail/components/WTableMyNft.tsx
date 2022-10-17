import { Table } from 'antd'
import styled from 'styled-components'
import { Button } from '@pancakeswap/uikit'

const CustomTableMyNft = styled.div`
  background: rgba(238, 251, 255, 0.4);
  border: 1px solid #0aadad;
  padding: 16px 32px;
  border-radius: 8px;

  .ant-table-wrapper {
    .ant-table,
    table {
      background: transparent;
    }
    .ant-table {
      border-radius: 8px;

      table {
        .ant-table-thead {
          > tr th {
            background: transparent;
            border-bottom: 2px solid rgba(0, 124, 162, 0.3);
            text-align: center;
            color: #007ca2;
            font-weight: 700;
            &:before {
              display: none;
            }
          }
        }
        .ant-table-tbody {
          > tr td {
            text-align: center;
            border-bottom: none;
            .table-history-amount {
              p {
                &[data-amount='deposit'] {
                  font-weight: 700;
                  color: green;
                }
                &[data-amount='withdraw'] {
                  font-weight: 700;
                  color: red;
                }
              }
            }
            .table-history-status {
              &[data-status='Completed'] {
                background: #008d0e;
              }
              &[data-status='Pending'] {
                background: #ebc500;
              }
              color: #ffffff;
              font-weight: 700;
              font-size: 16px;
              line-height: 140%;
              border-radius: 4px;
              width: 103px;
              height: 30px;
              padding: 4px 8px;
            }
            .table-history-transaction {
              display: flex;
              align-items: center;
              .table-history-transaction-img {
                width: 34px;
              }
            }
          }
        }
      }
    }
  }
`
const WTableFooter = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`

const WTableMyNft = ({ columns, dataSource, total, handleLoadMore, ...props }) => {
  return (
    <CustomTableMyNft>
      <Table columns={columns} dataSource={dataSource} pagination={false} {...props} />
      <WTableFooter>
        <Button scale="sm" disabled={total > dataSource?.length} onClick={handleLoadMore}>
          Load More
        </Button>
      </WTableFooter>
    </CustomTableMyNft>
  )
}

export default WTableMyNft
