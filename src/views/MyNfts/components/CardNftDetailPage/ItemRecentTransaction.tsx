import React from 'react'
import styled from 'styled-components'

interface ItemTransaction {
  data: object
  index: number
}
const WItemTxhHistory = styled.div`
  .wItemTxhHistory {
    width: 100%;
    padding: 16px;
    background: #eefbff;
    border: 1px solid $secondary;
    border-radius: 12px;

    .history-item-line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
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
        color: $text-main;
        margin-bottom: 16px;
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

const ItemTransaction: React.FC<React.PropsWithChildren<ItemTransaction>> = ({ data, index, ...props }) => (
  <WItemTxhHistory>
    <div className="wItemTxhHistory" {...props}>
      <div className="history-item-line">
        <p>action</p>
        <p>withdraw</p>
      </div>
      {/*  */}
      <div className="history-item-line table-history-amount">
        <p>amount</p>
        <p data-amount="withdraw">-500 USDT</p>
      </div>
      {/*  */}
      <div className="history-item-line">
        <p>event</p>
        <p>Bonus</p>
      </div>
      {/*  */}
      <div className="history-item-line table-history-status">
        <p>status</p>
        <p data-status="Completed">Completed</p>
      </div>
      {/*  */}
      <div className="history-item-line">
        <p>from</p>
        <p>0x4dF...9c700</p>
      </div>
      {/*  */}
      <div className="history-item-line">
        <p>to</p>
        <p>0x4dF...9c700</p>
      </div>
      <div className="history-item-line">
        <p>Txh</p>
        <p>10 Downing Street</p>
      </div>
      {/*  */}
    </div>
  </WItemTxhHistory>
)

export default ItemTransaction
