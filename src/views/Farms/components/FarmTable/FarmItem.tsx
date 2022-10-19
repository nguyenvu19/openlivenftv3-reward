/* eslint-disable react/no-array-index-key */
import { useCallback, useEffect, useState } from 'react'
import { Currency, CurrencyAmount } from '@pancakeswap/sdk'
import styled from 'styled-components'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { formatAmount, roundNumber } from 'helpers/Number'
import { Button, Text, useToast } from '@pancakeswap/uikit'
import MediaCard from 'components/MediaCard'
import { FARM_STATUS } from 'state/farmsOpv/fetchFarms'
import { useContractFarm } from 'hooks/useContract'
import { toLocaleString } from 'utils'
import { ApprovalState, useApproveCallback } from 'hooks/useApproveCallback'
import { logError } from 'utils/sentry'
import { useCurrency } from 'hooks/Tokens'
import tryParseAmount from '@pancakeswap/utils/tryParseAmount'
import Dots from 'components/Loader/Dots'
import { useTranslation } from '@pancakeswap/localization'
import useFarmWithdrawFeeBnb from 'views/Farms/hooks/useFarmWithdrawFeeBnb'
import { useCallWithGasPrice } from 'hooks/useCallWithGasPrice'
import { TransactionResponse } from '@ethersproject/providers'
import { useTransactionAdder } from 'state/transactions/hooks'
import FarmHeader from './FarmHeader'

const WrapperFarmItem = styled.div`
  background: #eefbff;
  border: 1px solid rgba(67, 108, 255, 0.3);
  border-radius: 12px;
  margin-bottom: 16px;

  .farm-item-body {
    padding: 24px 16px;
    border-top: none;

    display: flex;
    flex-direction: column;

    &:not(.show) {
      transition: 0.2s;
      visibility: hidden;
      opacity: 0;
      transition: 0.5s;
      height: 0;
      overflow: hidden;
      padding: 0;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      flex-direction: row;
      padding: 25px 25px;
    }

    .farm-item-body-left {
      text-align: center;
      margin-bottom: 20px;
      width: 100%;
      background: #caf0ff;
      border-radius: 12px;
      padding: 20px;
      height: 100%;
      min-height: 312px;
      display: flex;
      align-items: center;
      justify-content: center;

      ${({ theme }) => theme.mediaQueries.lg} {
        margin-right: 18px;
        max-width: 295px;
        margin-bottom: 0;
      }

      p {
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #1487db;

        &:first-child {
          color: #000;
          font-weight: bold;
          font-size: 18px;
          line-height: 19px;
          margin-bottom: 8px;
        }
        span {
          color: #000;
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          margin-left: 16px;
        }
        &:nth-child(2) {
          margin-bottom: 12px;
        }
      }
      .w-media-card {
        margin-bottom: 16px;
      }
    }
    .farm-item-body-right {
      width: 100%;
      display: flex;
      align-items: stretch;
      flex-direction: column;
      flex: 1;
      .farm-item-body-right-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        button {
          color: rgba(0, 0, 0, 0.6);
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          border-radius: 12px 12px 0px 0px;
          padding: 12px 16px;
          border: none;
          transition: 0.25s;
          background: transparent;
          cursor: pointer;
          &.active {
            color: rgba(0, 0, 0, 1);
            background: #caf0ff;
          }
          ${({ theme }) => theme.mediaQueries.lg} {
            font-size: 16px;
            line-height: 18px;
            padding: 12px 32px;
          }
        }
        p {
          font-family: 'Poppins';
          font-weight: 700;
          font-size: 14px;
          line-height: 21px;
          color: #1487db;
          display: none;
          ${({ theme }) => theme.mediaQueries.lg} {
            display: block;
          }
        }
      }
      .farm-item-body-right-body {
        height: 100%;
        background: #caf0ff;
        border-radius: 0px 12px 12px 12px;
        padding: 20px 16px;
        p {
          color: #000;
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 8px;
          &:nth-child(2) {
            font-family: 'Poppins';
            font-weight: 700;
            font-size: 12px;
            line-height: 18px;
            color: #1487db;
            text-align: right;
            margin-bottom: 4px;
          }
        }
        ${({ theme }) => theme.mediaQueries.lg} {
          > p {
            &:nth-child(2) {
              display: none;
            }
          }
        }
        .box-input {
          position: relative;
          margin-bottom: 24px;
          input {
            color: #1487db;
            font-weight: bold;

            border: 2px solid #436cff4d;
            box-sizing: border-box;
            border-radius: 8px;
            width: 100%;
            background: transparent;
            height: 32px;
            outline: none;
            padding: 14px;
            padding-right: 60px;
            text-align: right; /* Chrome, Safari, Edge, Opera */
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            } /* Firefox */
            &[type='number'] {
              -moz-appearance: textfield;
            }
            ${({ theme }) => theme.mediaQueries.lg} {
              border-radius: 16px;
              padding-right: 140px;
              height: 48px;
            }
          }
          p {
            color: #000;
            font-size: 12px;
            font-weight: bold;
            line-height: 13px;

            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(0, -50%);
            padding: 0 14px;
            cursor: pointer;
          }
          ${({ theme }) => theme.mediaQueries.lg} {
            p {
              font-size: 14px;
              line-height: 15px;
            }
          }
        }
        .box-chose-percent {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          button {
            color: #fff;
            font-size: 12px;
            font-weight: 500;
            line-height: 100%;
            letter-spacing: 0.04em;

            padding: 6px 10px;
            background: #008d0e;
            border-radius: 8px;
            border: none;
            opacity: 0.6;
            cursor: pointer;

            &:not(:last-child) {
              margin-right: 10px;
            }
            &.active {
              opacity: 1;
            }
            ${({ theme }) => theme.mediaQueries.lg} {
              font-size: 16px;
              padding: 10px 12px;

              &:not(:last-child) {
                margin-right: 16px;
              }
            }
          }
        }
        ${({ theme }) => theme.mediaQueries.lg} {
          padding: 22px 48px;
          p {
            font-size: 16px;
          }
        }
      }

      .farm-card-group-actions {
        text-align: center;
        margin-top: 32px;
      }
    }
  }
`
const FarmItem = ({
  tabFarmActive,
  infoPool,
  tokenPriceUsd,
  priceTokenLPs,
  infoLpsWithUserBalance,
  fetchFarmsData,
}) => {
  const { toastError, toastSuccess } = useToast()
  const { t } = useTranslation()

  const [depositLoading, setDepositLoading] = useState(false)
  const [harvestLoading, setHarvestLoading] = useState(false)
  const [amountDeposit, setAmountDeposit] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')

  const [viewFarm, setViewFarm] = useState(0)
  const [percent, setPercent] = useState(0)
  const [toggleContent, setToggleContent] = useState(true)

  useEffect(() => {
    if (tabFarmActive === FARM_STATUS.END) {
      setViewFarm(1)
    }
  }, [tabFarmActive])

  const { account } = useActiveWeb3React()
  const addTransaction = useTransactionAdder()

  const handleChosePercent = (per) => {
    if (infoLpsWithUserBalance) {
      const { balance } = infoLpsWithUserBalance
      const balanceLPs = balance
      setPercent(per)
      setAmountDeposit((balanceLPs * per) / 100)
    } else {
      toastError('An occurred error. Please try again later')
    }
  }

  const contractFarm = useContractFarm(infoPool?.contract)
  const { callWithGasPrice } = useCallWithGasPrice()
  const [feeWithdrawBnb] = useFarmWithdrawFeeBnb(contractFarm)

  // w currency
  const currencyLps = useCurrency(infoPool?.lpToken)
  // amounts
  const independentAmount: CurrencyAmount<Currency> | undefined = tryParseAmount(`${amountDeposit}`, currencyLps)
  const [approveState, approveCallback] = useApproveCallback(independentAmount, contractFarm?.address)

  /* Deposit */
  const handleDepositLPs = useCallback(
    async (item, amount) => {
      let tmpAmount = amount
      if (contractFarm && item && infoLpsWithUserBalance) {
        if (tmpAmount && tmpAmount < 0) {
          tmpAmount = tmpAmount.replace('-', '')
          return null
        }
        if (!tmpAmount) {
          setErrorMessage('Please input amount')
          return null
        }
        if (tmpAmount > infoLpsWithUserBalance.balance) {
          setErrorMessage(`${item.name} is not enough.`)
          return null
        }

        setErrorMessage('')
        setDepositLoading(true)

        try {
          const parseAmount = `${toLocaleString(amount * 10 ** infoLpsWithUserBalance.decimals)}`
          const response = await contractFarm.deposit(item.poolId, parseAmount)
          const awaitTxh = await response.wait()
          if (awaitTxh) {
            setDepositLoading(false)
            toastSuccess('Deposit success ')
            fetchFarmsData()
          }
        } catch (error) {
          setDepositLoading(false)
          setErrorMessage('Amount exceeds allowance')
        }
      }
      return null
    },
    [toastSuccess, fetchFarmsData, contractFarm, infoLpsWithUserBalance],
  )
  /* Unstake */
  const handleUnStakeLps = useCallback(
    async (item) => {
      if (!infoPool?.userInfo?.amount) return setErrorMessage(`${infoPool?.name} is not enough.`)
      if (contractFarm && item && feeWithdrawBnb !== undefined) {
        setDepositLoading(true)
        const parseFeeWithdrawBNB = toLocaleString(feeWithdrawBnb * 1e18)

        // eslint-disable-next-line consistent-return
        return callWithGasPrice(contractFarm, 'leaveStaking', [item.poolId], {
          value: parseFeeWithdrawBNB,
        })
          .then(async (response: TransactionResponse) => {
            await response.wait()
            addTransaction(response, {
              summary: `Unstake: ${infoPool?.userInfo?.amount} ${infoPool?.name}`,
            })
            toastSuccess('Unstake success')
            fetchFarmsData()
            setDepositLoading(false)
          })
          .catch((error: any) => {
            logError(error)
            console.error('Failed to Unstake token', error)
            if (error?.code !== 4001) {
              toastError(t('Error'), error.message)
            }
            setDepositLoading(false)
          })
      }
      return null
    },
    [
      addTransaction,
      callWithGasPrice,
      contractFarm,
      feeWithdrawBnb,
      fetchFarmsData,
      infoPool?.name,
      infoPool?.userInfo?.amount,
      t,
      toastError,
      toastSuccess,
    ],
  )
  /* Harvest */
  const handleHarvest = useCallback(
    async (item) => {
      if (contractFarm && item && feeWithdrawBnb !== undefined) {
        setHarvestLoading(true)

        const parseFeeWithdrawBNB = toLocaleString(feeWithdrawBnb * 1e18)

        // eslint-disable-next-line consistent-return
        return callWithGasPrice(contractFarm, 'withdraw', [item.poolId], {
          value: parseFeeWithdrawBNB,
        })
          .then(async (response: TransactionResponse) => {
            await response.wait()
            addTransaction(response, {
              summary: `Harvest: ${formatAmount(infoPool?.userInfo?.userDividends)} ${infoPool?.name}`,
            })
            toastSuccess('Success')
            fetchFarmsData()
            setHarvestLoading(false)
          })
          .catch((error: any) => {
            logError(error)
            console.error('Failed to harvest token', error)
            if (error?.code !== 4001) {
              toastError(t('Error'), error.message)
            }
            setHarvestLoading(false)
          })
      }
      return null
    },
    [
      addTransaction,
      callWithGasPrice,
      contractFarm,
      feeWithdrawBnb,
      fetchFarmsData,
      infoPool?.name,
      infoPool?.userInfo?.userDividends,
      t,
      toastError,
      toastSuccess,
    ],
  )

  return (
    <WrapperFarmItem>
      <FarmHeader
        toggleContent={toggleContent}
        infoPool={infoPool}
        tokenPriceUsd={tokenPriceUsd}
        priceTokenLPs={priceTokenLPs}
        setToggleContent={setToggleContent}
      />

      <div className={toggleContent ? 'farm-item-body show' : 'farm-item-body'}>
        <div className="farm-item-body-left">
          <div>
            <p>OPV EARNED</p>
            <p>{formatAmount(infoPool?.userInfo?.userDividends)} OPV</p>
            <div className="w-media-card">
              <MediaCard fileUrl="https://s3.ap-southeast-1.amazonaws.com/openlivenft/investPackage/TOPAZ.mp4" />
            </div>
            {account ? (
              <Button
                isLoading={harvestLoading}
                disabled={!infoPool?.userInfo?.userDividends}
                onClick={() => handleHarvest(infoPool)}
              >
                EARN HARVEST
              </Button>
            ) : (
              <ConnectWalletButton>Connect</ConnectWalletButton>
            )}
          </div>
        </div>
        <div className="farm-item-body-right">
          <div className="farm-item-body-right-header">
            <div>
              <button
                type="button"
                onClick={() => {
                  if (tabFarmActive === FARM_STATUS.LIVE) {
                    setErrorMessage('')
                    setAmountDeposit(0)
                    setDepositLoading(false)
                    setViewFarm(0)
                  }
                }}
                className={viewFarm === 0 ? 'active' : ''}
              >
                Deposited
              </button>
              <button
                type="button"
                onClick={() => {
                  setErrorMessage('')
                  setAmountDeposit(0)
                  setDepositLoading(false)
                  setViewFarm(1)
                }}
                className={viewFarm === 1 ? 'active' : ''}
              >
                Withdraw
              </button>
            </div>

            <div>
              <p>
                {`Avail: `}{' '}
                {(() => {
                  switch (viewFarm) {
                    case 0:
                      return infoLpsWithUserBalance ? formatAmount(infoLpsWithUserBalance.balance) : '--'
                    case 1:
                      return infoPool?.userInfo?.amount !== undefined ? formatAmount(infoPool?.userInfo?.amount) : '--'
                    default:
                      return '--'
                  }
                })()}
              </p>
            </div>
          </div>
          <div className="farm-item-body-right-body">
            <p>Please approve the contract</p>

            <p>
              {`Avail: `} {`Avail: `}{' '}
              {(() => {
                switch (viewFarm) {
                  case 0:
                    return infoLpsWithUserBalance ? formatAmount(infoLpsWithUserBalance.balance) : '--'
                  case 1:
                    return infoPool?.userInfo?.amount !== undefined ? formatAmount(infoPool?.userInfo?.amount) : '--'
                  default:
                    return '--'
                }
              })()}
            </p>

            <div className="box-input">
              <input
                type={viewFarm === 0 ? 'number' : 'text'}
                value={viewFarm === 0 ? amountDeposit : roundNumber(infoPool?.userInfo?.amount)}
                readOnly={viewFarm !== 0}
                onChange={(e) => {
                  setAmountDeposit(+e.target.value)
                }}
              />
              <p>{window.innerWidth > 991 ? infoPool?.name : 'SLOT'}</p>
            </div>

            {viewFarm === 0 && (
              <div className="box-chose-percent">
                <button
                  type="button"
                  className={percent === 25 ? 'active' : ''}
                  onClick={() => {
                    handleChosePercent(25)
                  }}
                >
                  25%
                </button>
                <button
                  type="button"
                  className={percent === 50 ? 'active' : ''}
                  onClick={() => {
                    handleChosePercent(50)
                  }}
                >
                  50%
                </button>
                <button
                  type="button"
                  className={percent === 75 ? 'active' : ''}
                  onClick={() => {
                    handleChosePercent(75)
                  }}
                >
                  75%
                </button>
                <button
                  type="button"
                  className={percent === 100 ? 'active' : ''}
                  onClick={() => {
                    handleChosePercent(100)
                  }}
                >
                  100%
                </button>
              </div>
            )}

            <Text fontSize={['12px', , '16px']} color="red" textAlign="center">
              {errorMessage}
            </Text>

            <div className="farm-card-group-actions">
              {(() => {
                if (!account) return <ConnectWalletButton>Connect</ConnectWalletButton>
                if (
                  viewFarm === 0 &&
                  (approveState === ApprovalState.NOT_APPROVED ||
                    approveState === ApprovalState.PENDING ||
                    approveState === ApprovalState.UNKNOWN)
                ) {
                  return (
                    <Button onClick={approveCallback} disabled={approveState === ApprovalState.PENDING}>
                      {approveState === ApprovalState.PENDING ? <Dots>{t('Enabling')}</Dots> : t('Enabling')}
                    </Button>
                  )
                }
                return (
                  <Button
                    isLoading={depositLoading}
                    disabled={viewFarm === 1 && !infoPool?.poolEnded}
                    onClick={() => {
                      if (viewFarm === 0) {
                        handleDepositLPs(infoPool, amountDeposit)
                      } else {
                        handleUnStakeLps(infoPool)
                      }
                    }}
                  >
                    Approve
                  </Button>
                )
              })()}
            </div>
          </div>
        </div>
      </div>
    </WrapperFarmItem>
  )
}

export default FarmItem
