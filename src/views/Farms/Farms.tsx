import { useState, createContext } from 'react'

import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useWeb3React } from '@pancakeswap/wagmi'
import { Toggle, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { useFarms, usePriceCakeBusd } from 'state/farms/hooks'
import { useCakeVaultUserData } from 'state/pools/hooks'
import { useTranslation } from '@pancakeswap/localization'

import { useUserFarmStakedOnly } from 'state/user/hooks'
import { useRouter } from 'next/router'

import Table from './components/FarmTable/FarmTable'
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

const NUMBER_OF_FARMS_VISIBLE = 12

const Farms: React.FC<React.PropsWithChildren> = () => {
  const { pathname, query: urlQuery } = useRouter()
  const { t } = useTranslation()
  const { chainId } = useActiveWeb3React()

  const [tabFarmActive, setTabFarmActive] = useState('live')

  const { data: farmsLP, userDataLoaded, poolLength, regularCakePerBlock } = useFarms()

  const { account } = useWeb3React()
  const cakePrice = usePriceCakeBusd()

  const [_query, setQuery] = useState('')

  const isArchived = pathname.includes('archived')
  const isInactive = pathname.includes('history')
  const isActive = !isInactive && !isArchived

  useCakeVaultUserData()

  // Users with no wallet connected should see 0 as Earned amount
  // Connected users should see loading indicator until first userData has loaded
  const userDataReady = !account || (!!account && userDataLoaded)

  const [stakedOnly, setStakedOnly] = useUserFarmStakedOnly(isActive)

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

        <Table farms={[]} cakePrice={cakePrice} userDataReady={userDataReady} />
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
