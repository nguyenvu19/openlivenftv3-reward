import React from 'react'
import styled from 'styled-components'
import { InfoMarketPair } from 'state/tokenInfo/types'
import { useTranslation } from '@pancakeswap/localization'
import Source from './DataItems/Source'
import MarketPair from './DataItems/MarketPair'
import MarketPrice from './DataItems/MarketPrice'
import DepthUsdPositive from './DataItems/DepthUsdPositive'
import VolumeUsd from './DataItems/VolumeUsd'
import Confidence from './DataItems/Confidence'
import EffectiveLiquidity from './DataItems/Confidence copy'

const WMarketPriceItemMobile = styled.div`
  .market-price-item-content {
    width: 100%;
    padding: 0 0 16px;
    background: #eefbff;
    border-bottom: 0.5px solid rgb(91, 101, 143, 0.3);

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

const MarketPriceItemMobile: React.FC<{ index: number; marketPriceItem: InfoMarketPair }> = ({
  index,
  marketPriceItem,
}) => {
  const { t } = useTranslation()
  return (
    <WMarketPriceItemMobile>
      <div className="market-price-item-content">
        <div className="history-item-line table-history-amount">
          <p>#</p>
          <p>{index}</p>
        </div>
        {/*  */}
        <div className="history-item-line">
          <p>{t('Source')}</p>
          <Source record={marketPriceItem} />
        </div>
        {/*  */}
        <div className="history-item-line table-history-status">
          <p>{t('Pairs')}</p>
          <MarketPair record={marketPriceItem} />
        </div>
        {/*  */}
        <div className="history-item-line">
          <p>{t('Price')}</p>
          <MarketPrice record={marketPriceItem} />
        </div>
        {/*  */}
        <div className="history-item-line">
          <p>{t('+2% Depth')}</p>
          <DepthUsdPositive value={marketPriceItem.depthUsdPositiveTwo} />
        </div>
        {/*  */}
        <div className="history-item-line">
          <p>{t('-2% Depth')}</p>
          <DepthUsdPositive value={marketPriceItem.depthUsdNegativeTwo} />
        </div>

        {/*  */}
        <div className="history-item-line">
          <p>{t('Volume')}</p>
          <VolumeUsd value={marketPriceItem.volumeUsd} />
        </div>

        {/*  */}
        <div className="history-item-line">
          <p>{t('Confidence')}</p>
          <Confidence value={marketPriceItem} />
        </div>

        {/*  */}
        <div className="history-item-line">
          <p>{t('Liquidity Score')}</p>
          <EffectiveLiquidity value={marketPriceItem.effectiveLiquidity} />
        </div>

        {/*  */}
        <div className="history-item-line">
          <p>{t('Updated')}</p>
          <p>Recently</p>
        </div>
      </div>
    </WMarketPriceItemMobile>
  )
}

export default MarketPriceItemMobile
