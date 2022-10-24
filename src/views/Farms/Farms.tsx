import { useState, createContext, useMemo, useEffect } from 'react'

import { Toggle, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useOPVBusdPrice } from 'hooks/useBUSDPrice'
import { useToken } from 'hooks/Tokens'
import { useUserFarmStakedOnly } from 'state/user/hooks'

import { configInfoPool } from 'config/constants/farmConfig'
import { FARM_STATUS, useFarmsData } from 'state/farmsOpv/fetchFarms'
import useTokenBalance from 'hooks/useTokenBalance'
import useGetPriceTokenLPs from 'hooks/useGetPriceTokenLPs'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import FarmTable from './components/FarmTable/FarmTable'
import FarmTabButtons from './components/FarmTabButtons'

const ControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;

  width: 100%;
  margin-bottom: 32px;
  position: relative;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 0;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 10px;
  background: #eefbff;
  border: 1px solid rgba(67, 108, 255, 0.3);
  border-radius: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 10px 20px;
  }
`

const Farms: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  const { account } = useActiveWeb3React()

  const [tabFarmActive, setTabFarmActive] = useState(FARM_STATUS.LIVE)
  const [stakedOnly, setStakedOnly] = useUserFarmStakedOnly(false)

  const tokenPriceUsd = useOPVBusdPrice({ forceMainnet: true })

  /* Filter Pool */
  const { farmsData, totalUserDividendsAllPool, fetchFarmsData } = useFarmsData({ account, configInfoPool })
  const [fFarmsData, setFFarmsData] = useState(undefined)
  useEffect(() => {
    if (farmsData && farmsData.length > 0) {
      let fBy = farmsData.filter((item) => item.poolStatus === tabFarmActive)
      if (stakedOnly) {
        fBy = fBy.filter((item) => +item?.userInfo?.userDividends > 0)
      }
      setFFarmsData(fBy)
    }
    if (farmsData === null) {
      setFFarmsData(null)
    }
  }, [farmsData, stakedOnly, tabFarmActive])

  //
  const { priceTokenLPs } = useGetPriceTokenLPs(configInfoPool.tokenAddress1, configInfoPool.tokenAddress2)

  //
  const infoTokenLPs = useToken(configInfoPool.lpTokenAddress)
  const infoTokenLPsBalance = useTokenBalance(configInfoPool.lpTokenAddress)

  const mapInfoTokenLps = useMemo(() => {
    if (!infoTokenLPs || !infoTokenLPsBalance) return undefined
    return {
      ...infoTokenLPs,
      balance: !infoTokenLPsBalance.error
        ? infoTokenLPsBalance.balance.shiftedBy(-infoTokenLPs.decimals).toNumber()
        : 0,
    }
  }, [infoTokenLPs, infoTokenLPsBalance])

  return (
    <FarmsContext.Provider value={{ chosenFarmsMemoized: [] }}>
      <Page>
        <ControlContainer>
          <FarmTabButtons
            value={tabFarmActive}
            tabs={[
              { label: t('Live'), value: FARM_STATUS.LIVE, hasStakeInFinishedFarms: true },
              { label: t('End'), value: FARM_STATUS.END },
            ]}
            onChange={(tab) => setTabFarmActive(tab.value)}
          />
          <ToggleWrapper>
            <Toggle
              id="staked-only-farms"
              checked={stakedOnly}
              onChange={() => setStakedOnly(!stakedOnly)}
              scale="sm"
            />
            <Text ml="4px" fontSize={['12px', , '16px']} bold>
              {t('Staked only')}
            </Text>
          </ToggleWrapper>
        </ControlContainer>

        <FarmTable
          tabFarmActive={tabFarmActive}
          farmsData={fFarmsData}
          tokenPriceUsd={tokenPriceUsd}
          priceTokenLPs={priceTokenLPs}
          infoLpsWithUserBalance={mapInfoTokenLps}
          totalUserDividendsAllPool={totalUserDividendsAllPool}
          fetchFarmsData={fetchFarmsData}
        />
      </Page>
    </FarmsContext.Provider>
  )
}

export const FarmsContext = createContext({ chosenFarmsMemoized: [] })

export default Farms
