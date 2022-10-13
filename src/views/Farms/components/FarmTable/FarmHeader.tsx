import React, { useMemo, useEffect, useState } from 'react'
import { getDateToDate } from 'helpers/Date'
import styled from 'styled-components'
import { formatAmount } from 'helpers/Number'
import { ArrowDropDownIcon } from '@pancakeswap/uikit'

const Wrapper = styled.div`
  padding: 20px 0 0;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 20px 20px 0;
  }

  .farm-item-header-body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .farm-item-header-type {
    display: flex;
    padding: 16px;

    .farm-item-header-type-image {
      margin-right: 16px;

      img {
        position: relative;
        z-index: 1;
        width: 34px;
        min-width: 34px;

        &:last-child {
          position: relative;
          margin-left: -10px;
          z-index: 0;
        }
      }
    }

    .farm-item-header-type-info {
      flex: 1;
      width: 100%;
      p {
        color: #000;
        font-size: 12px;
        line-height: 130%;
        &:first-child {
          color: #000;
          font-weight: bold;
          font-size: 14px;
          line-height: 15px;
          margin-bottom: 6px;
        }
        ${({ theme }) => theme.mediaQueries.lg} {
          font-size: 14px;
          &:first-child {
            font-size: 16px;
            line-height: 17px;
          }
        }
      }
    }
  }

  .farm-item-header-item {
    padding: 16px;

    p {
      color: #1487db;
      font-size: 12px;
      line-height: 16px;

      span {
        color: #1487db;
        font-size: 10px;
        line-height: 11px;
        margin-left: 5px;
      }

      &:first-child {
        color: #000;
        font-size: 14px;
        font-weight: 700;
        line-height: 15px;
        margin-bottom: 6px;
      }
    }

    img {
      width: 20px;
      cursor: pointer;
      transition: 0.2s;

      ${({ theme }) => theme.mediaQueries.lg} {
        width: 28px;
      }
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      p {
        font-size: 14px;
        line-height: 16px;

        span {
          font-size: 12px;
          line-height: 14px;
        }

        &:first-child {
          font-size: 16px;
          line-height: 17px;
        }
      }
    }
  }

  .farm-header-toggle-dropdown {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 24px;
    height: 24px;
    background: #1487db;
    border-radius: 5px;
    cursor: pointer;
  }
`

const FarmHeader = ({ infoPool, toggleContent, priceToken, priceTokenLPs, setToggleContent }) => {
  const { poolEnded } = infoPool

  /**
   * Handle countdown
   */
  const [counter, updateCounter] = useState<any>({
    weekdays: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalRemain: null,
  })

  useEffect(() => {
    let timer: any = 0
    const startTime = new Date(infoPool?.startTime).getTime()
    const endTime = new Date(infoPool?.endTime).getTime()
    function getTime() {
      const currentTime = new Date().getTime()
      if (currentTime < startTime) {
        updateCounter({ ...(getDateToDate(currentTime, startTime) as any), totalRemain: currentTime - startTime })
      } else if (currentTime > startTime && currentTime < endTime) {
        updateCounter({ ...(getDateToDate(currentTime, endTime) as any), totalRemain: endTime - currentTime })
      } else {
        updateCounter({
          weekdays: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalRemain: 0,
        })
        // setIsEnded(true)
        clearInterval(timer)
      }
    }
    getTime()

    timer = setInterval(() => getTime(), 1000)
    return () => clearInterval(timer)
  }, [infoPool?.endTime, infoPool?.startTime])

  const renderDate = useMemo(() => {
    if (infoPool) {
      const currentTime = new Date().getTime()
      const fromTime = new Date(infoPool.startTime).getTime()
      const toTime = new Date(infoPool.endTime).getTime()
      const days = Math.round((toTime - fromTime) / (1000 * 60 * 60 * 24))
      const totalDays = counter.days + counter.weekdays * 7
      return (
        <>
          <p style={{ color: poolEnded ? 'red' : '' }}>
            {poolEnded ? 'Ended' : `${infoPool?.poolInfo?.isLocked ? 'Lock' : 'Free'} ${days > 0 ? days : 0} days`}{' '}
          </p>

          {currentTime < fromTime ? (
            <p>{`Start in ${totalDays}d ${counter.hours.toString().padStart(2, '0')}:${counter.minutes
              .toString()
              .padStart(2, '0')}:${counter.seconds.toString().padStart(2, '0')}`}</p>
          ) : (
            <p>{`End in ${totalDays}d ${counter.hours.toString().padStart(2, '0')}:${counter.minutes
              .toString()
              .padStart(2, '0')}:${counter.seconds.toString().padStart(2, '0')}`}</p>
          )}
        </>
      )
    }
    return (
      <>
        <div>--</div>
        <div>--</div>
      </>
    )
  }, [counter.days, counter.hours, counter.minutes, counter.seconds, counter.weekdays, infoPool, poolEnded])

  /**
   * Handle apy
   */
  const getPercentAPY = useMemo(() => {
    if (infoPool) {
      const { dailyRewards } = infoPool
      const totalAmountOfPool = infoPool?.poolInfo?.totalLpSupply
      const rewardPerBlock = (dailyRewards / 86400) * priceToken * 86400 * 365
      const totalAmount = totalAmountOfPool * (priceTokenLPs || priceToken)
      const percent = Math.round((rewardPerBlock / (totalAmount > 0 ? totalAmount : 1)) * 100)
      return totalAmountOfPool <= 0 ? undefined : percent
    }
    return undefined
  }, [infoPool, priceToken, priceTokenLPs])

  return (
    <Wrapper>
      <div className="farm-item-header-body" style={{ borderBottom: toggleContent ? '1px solid #44a5ff' : '' }}>
        <div className="farm-item-header-type">
          <div className="farm-item-header-type-image">
            {infoPool.logo1 && <img src={infoPool.logo1} alt="" />}
            {infoPool.logo2 && <img src={infoPool.logo2} alt="" />}
          </div>
          <div className="farm-item-header-type-info">
            <p>{infoPool.name}</p>
            {renderDate}
          </div>
        </div>

        <div className="farm-item-header-item">
          <p>Your Deposit</p>
          <p>{formatAmount(infoPool?.userInfo?.amount)}</p>
        </div>
        <div className="farm-item-header-item">
          <p>Type</p>
          <p>{infoPool?.poolInfo?.isLocked ? 'Lock' : 'Auto'}</p>
        </div>
        <div className="farm-item-header-item">
          <p>Pool LPs</p>
          <p>{Date.now() < infoPool?.startTime ? '0.00' : formatAmount(infoPool?.poolInfo?.totalLpSupply)}</p>
        </div>
        <div className="farm-item-header-item">
          <p>Daily Rewards</p>
          <p>{`${formatAmount(infoPool?.dailyRewards)} UDOGE`}</p>
        </div>

        <div className="farm-item-header-item">
          <p>APY</p>
          <p>
            {getPercentAPY !== undefined
              ? `${getPercentAPY.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}%`
              : '--'}
          </p>
        </div>

        <div className="farm-item-header-item">
          <div
            role="presentation"
            onClick={() => {
              setToggleContent((prev: any) => !prev)
            }}
            className="farm-header-toggle-dropdown"
          >
            <ArrowDropDownIcon color="#fff" style={{ transform: toggleContent ? 'rotate(180deg)' : 'none' }} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default React.memo(FarmHeader)
