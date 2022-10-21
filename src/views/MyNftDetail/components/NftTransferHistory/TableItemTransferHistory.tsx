import React from 'react'
import { Box, Link } from '@pancakeswap/uikit'
import TxStatus from 'components/TxStatus'
import { ZERO_ADDRESS } from 'config/constants'
import { formatCode } from 'helpers'
import { NftTransferHistoryItemType } from 'state/nfts/types'
import styled from 'styled-components'
import { getBlockExploreLink } from 'utils'

const WItemTxhHistory = styled.div`
  .wItemTxhHistory {
    width: 100%;
    padding: 16px;
    background: #eefbff;
    border-radius: 12px;

    .history-item-line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      ${({ theme }) => theme.mediaQueries.sm} {
        margin-bottom: 16px;
      }
      &.table-history-amount {
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
      &.table-history-status {
        p {
          &:last-child {
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
            text-align: center;
            padding: 4px 8px;
          }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      & > p {
        &:first-child {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 0;
        }
        &:last-child {
          font-size: 13px;
          margin-bottom: 0;
        }
      }
    }
  }
`

const TableItemTransferHistory: React.FC<{ index: number; nftTransferHistoryItem: NftTransferHistoryItemType }> = ({
  index,
  nftTransferHistoryItem,
}) => (
  <WItemTxhHistory>
    <div className="wItemTxhHistory">
      <div className="history-item-line table-history-amount">
        <p>No</p>
        <p>{index}</p>
      </div>
      {/*  */}
      <div className="history-item-line">
        <p>Event</p>
        <p>
          {(() => {
            if (nftTransferHistoryItem.previousOwner === ZERO_ADDRESS) {
              return <p style={{ fontWeight: 700 }}>Mint</p>
            }
            if (nftTransferHistoryItem.newOwner === ZERO_ADDRESS) {
              return <p style={{ fontWeight: 700 }}>Burn</p>
            }
            return <p style={{ fontWeight: 700 }}>Transfer</p>
          })()}
        </p>
      </div>
      {/*  */}
      <div className="history-item-line table-history-status">
        <p>Status</p>
        <TxStatus title="Completed" status="COMPLETED" />
      </div>
      {/*  */}
      <div className="history-item-line">
        <p>From</p>
        <Link
          external
          href={getBlockExploreLink(nftTransferHistoryItem.previousOwner, 'address')}
          fontSize={['13px', , '16px']}
        >
          <Box width="20px" height="20px" mr="12px">
            <img src="/images2/icons/default-user-icon.png" alt="" />
          </Box>
          {formatCode(nftTransferHistoryItem.previousOwner, 5, 5)}
        </Link>
      </div>
      {/*  */}
      <div className="history-item-line">
        <p>To</p>
        <Link
          external
          href={getBlockExploreLink(nftTransferHistoryItem.newOwner, 'address')}
          fontSize={['13px', , '16px']}
        >
          <Box width="20px" height="20px" mr="12px">
            <img src="/images2/icons/default-user-icon.png" alt="" />
          </Box>
          {formatCode(nftTransferHistoryItem.newOwner, 5, 5)}
        </Link>
      </div>
      <div className="history-item-line">
        <p>Txh</p>
        <Link
          external
          href={getBlockExploreLink(nftTransferHistoryItem.transactionHash, 'transaction')}
          fontSize={['13px', , '16px']}
        >
          {formatCode(nftTransferHistoryItem.transactionHash, 5, 5)}
        </Link>
      </div>
      {/*  */}
    </div>
  </WItemTxhHistory>
)

export default TableItemTransferHistory
