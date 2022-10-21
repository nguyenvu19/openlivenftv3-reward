import React from 'react'
import { Box, Image, Link } from '@pancakeswap/uikit'
import TxStatus from 'components/TxStatus'
import { CONTRACT_ADDRESS } from 'config'
import { ZERO_ADDRESS } from 'config/constants'
import { formatCode } from 'helpers'
import { ClaimHistoryItemType } from 'state/nfts/types'
import styled from 'styled-components'
import { getBlockExploreLink } from 'utils'
import TableClaimHistoryAmount from '../FieldData/Amount'

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
      margin-bottom: 16px;
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
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 0;
        }
        &:last-child {
          font-size: 14px;
          margin-bottom: 0;
        }
      }
    }
  }
`

const NftClaimHistoryItem: React.FC<{ nftClaimHistoryItem: ClaimHistoryItemType }> = ({ nftClaimHistoryItem }) => (
  <WItemTxhHistory>
    <div className="wItemTxhHistory">
      <div className="history-item-line table-history-amount">
        <p>Amount</p>
        <p data-amount={nftClaimHistoryItem.userAddress === ZERO_ADDRESS ? 'withdraw' : 'Bonus'}>
          <TableClaimHistoryAmount amount={nftClaimHistoryItem.amount} />
        </p>
      </div>
      {/*  */}
      <div className="history-item-line">
        <p>Event</p>
        <p>{nftClaimHistoryItem.userAddress === ZERO_ADDRESS ? 'Buy' : 'Bonus'}</p>
      </div>
      {/*  */}
      <div className="history-item-line table-history-status">
        <p>Status</p>
        <TxStatus title="Completed" status="COMPLETED" />
      </div>
      {/*  */}
      <div className="history-item-line">
        <p>From</p>
        <Link external href={getBlockExploreLink(CONTRACT_ADDRESS, 'address')} fontSize={['13px', , '16px']}>
          <Box width="20px" height="20px" mr="12px">
            <img src="/images2/icons/default-user-icon.png" alt="" />
          </Box>
          {formatCode(CONTRACT_ADDRESS, 5, 5)}
        </Link>
      </div>
      {/*  */}
      <div className="history-item-line">
        <p>To</p>
        <Link
          external
          href={getBlockExploreLink(nftClaimHistoryItem.userAddress, 'address')}
          fontSize={['13px', , '16px']}
        >
          <Box width="20px" height="20px">
            <img src="/images2/icons/default-user-icon.png" alt="" />
          </Box>
          {formatCode(nftClaimHistoryItem.userAddress, 5, 5)}
        </Link>
      </div>
      <div className="history-item-line">
        <p>Txh</p>
        <Link
          external
          href={getBlockExploreLink(nftClaimHistoryItem.transactionHash, 'transaction')}
          fontSize={['13px', , '16px']}
        >
          {formatCode(nftClaimHistoryItem.transactionHash, 5, 5)}
        </Link>
      </div>
      {/*  */}
    </div>
  </WItemTxhHistory>
)

export default NftClaimHistoryItem
