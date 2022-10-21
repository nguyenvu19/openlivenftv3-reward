import React from 'react'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { BossTeamWalletItem } from 'state/tokenInfo/types'
import TableItemBalance from './DataItems/TableItemBalance'
import TableItemAddress from './DataItems/TableItemAddress'

const WBossTeamWalletMobile = styled.div`
  .market-price-item-content {
    width: 100%;
    padding: 0 0 16px;
    background: #eefbff;
    border-bottom: 0.5px solid rgb(91, 101, 143, 0.3);

    .item-line {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
      ${({ theme }) => theme.mediaQueries.sm} {
        margin-bottom: 16px;
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

const BossTeamWalletMobile: React.FC<{ index: number; bossTeamWallet: BossTeamWalletItem; opvPrice?: number }> = ({
  index,
  bossTeamWallet,
  opvPrice,
}) => {
  const { t } = useTranslation()
  return (
    <WBossTeamWalletMobile>
      <div className="market-price-item-content">
        <div className="item-line table-history-amount">
          <p>#</p>
          <p>{index}</p>
        </div>
        {/*  */}
        <div className="item-line">
          <p>{t('Name')}</p>
          <p>{bossTeamWallet.title}</p>
        </div>
        {/*  */}
        <div className="item-line">
          <p>{t('Address')}</p>
          <TableItemAddress address={bossTeamWallet?.address} />
        </div>
        {/*  */}
        <div className="item-line">
          <p>{t('Balance')}</p>
          <TableItemBalance address={bossTeamWallet?.address} opvPrice={opvPrice} />
        </div>
      </div>
    </WBossTeamWalletMobile>
  )
}

export default BossTeamWalletMobile
