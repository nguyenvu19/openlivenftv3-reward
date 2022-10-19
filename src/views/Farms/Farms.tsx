import { useState, createContext, useMemo, useEffect } from 'react'

import { Toggle, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useOPVBusdPrice } from 'hooks/useBUSDPrice'
import { useToken } from 'hooks/Tokens'
import { useUserFarmStakedOnly } from 'state/user/hooks'

import { FARM_STATUS, useFarmsData } from 'state/farmsOpv/fetchFarms'
import { CONTRACT_FARM, TOKEN_ADDRESS } from 'config'
import useTokenBalance from 'hooks/useTokenBalance'
import useGetPriceTokenLPs from 'hooks/useGetPriceTokenLPs'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import FarmTable from './components/FarmTable/FarmTable'
import FarmTabButtons from './components/FarmTabButtons'

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;

  width: 100%;
  margin-bottom: 32px;
  position: relative;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 0;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 10px 20px;
  background: #eefbff;
  border: 1px solid rgba(67, 108, 255, 0.3);
  border-radius: 8px;
`

const configInfoPool = {
  logo1: '/images/tokens/0x36c7b164f85d6f775cd128966d5819c7d36feff3.png',
  logo2: '/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png',
  name: 'OPV-BNB LPs',
  symbol1: 'OPV',
  symbol2: 'BNB',
  contractAddress: CONTRACT_FARM, // farm testnet
  tokenAddress1: TOKEN_ADDRESS, // opv
  tokenAddress2: '0xae13d989dac2f0debff460ac112a837c89baa7cd', // wbnb
  lpTokenAddress: '0x93c4a5d89d3a5dcc3b17395f0c730e9e0ca0763d', // lps
}

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
            <Text ml="4px"> {t('Staked only')}</Text>
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
