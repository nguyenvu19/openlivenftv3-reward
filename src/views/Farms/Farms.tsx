import { useState, createContext } from 'react'

import { Toggle, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import { useOPVBusdPrice } from 'hooks/useBUSDPrice'
import useGetPriceTokenLPs from 'hooks/useGetPriceTokenLPs'
import useTokenBalance from 'hooks/useTokenBalance'
import { useToken } from 'hooks/Tokens'
import { useUserFarmStakedOnly } from 'state/user/hooks'

import { useFarmsData } from 'state/farmsOpv/fetchFarms'
import { CONTRACT_FARM, DEFAULT_CHAIN_ID, TOKEN_ADDRESS } from 'config'
import { bscTokens, USDT } from '@pancakeswap/tokens'
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
  lpTokenAddress: '0x71720a59e0e203d592498020088d18477c89a573', // lps
}

const Farms: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()

  const [tabFarmActive, setTabFarmActive] = useState('live')
  const [stakedOnly, setStakedOnly] = useUserFarmStakedOnly(false)

  const tokenPriceUsd = useOPVBusdPrice({ forceMainnet: true })

  const { farmsData, totalUserDividendsAllPool } = useFarmsData({ configInfoPool })

  const { priceTokenLPs } = useGetPriceTokenLPs(configInfoPool.tokenAddress1, configInfoPool.tokenAddress2)
  console.log(farmsData)

  const infoTokenLPs = useToken(configInfoPool.lpTokenAddress)
  const infoTokenLPsBalance = useTokenBalance(configInfoPool.lpTokenAddress)
  console.log('infoTokenLPsBalance', infoTokenLPsBalance)

  return (
    <FarmsContext.Provider value={{ chosenFarmsMemoized: [] }}>
      <Page>
        <ControlContainer>
          <FarmTabButtons
            value={tabFarmActive}
            tabs={[
              { label: t('Live'), value: 'live' },
              { label: t('End'), value: 'end', hasStakeInFinishedFarms: true },
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
          farmsData={farmsData}
          tokenPriceUsd={tokenPriceUsd}
          priceTokenLPs={priceTokenLPs}
          totalUserDividendsAllPool={totalUserDividendsAllPool}
        />
        {/* 
        {account && !userDataLoaded && stakedOnly && (
          <Flex justifyContent="center">
            <Loading />
          </Flex>
        )} */}
      </Page>
    </FarmsContext.Provider>
  )
}

export const FarmsContext = createContext({ chosenFarmsMemoized: [] })

export default Farms
