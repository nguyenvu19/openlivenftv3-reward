import React, { useState } from 'react'
import styled from 'styled-components'
import { STAKING_STATUS, StakingHistory } from 'state/staking/types'
import { useTranslation } from '@pancakeswap/localization'
import { Button } from '@pancakeswap/uikit'

const WAction = styled.div`
  color: black;
  font-weight: bold;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`

const Action: React.FC<{
  stakingHistory: StakingHistory
  onWithdraw: (cb: () => void) => void
}> = ({ stakingHistory, onWithdraw, ...props }) => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)

  const handleClaim = () => {
    onWithdraw(() => {
      setLoading(false)
    })
  }

  const isLive = stakingHistory.poolStatus === STAKING_STATUS.LIVE
  return (
    <WAction className="tokens-item-pairs" {...props}>
      {(() => {
        if (isLive) {
          return (
            <Button scale="sm" isLoading={loading} disabled={loading} onClick={handleClaim}>
              {t('Withdraw')}
            </Button>
          )
        }
        return <></>
      })()}
    </WAction>
  )
}
export default Action
