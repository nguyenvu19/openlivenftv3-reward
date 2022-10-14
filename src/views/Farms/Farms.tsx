import { useState, createContext } from 'react'

import { Toggle, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
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

  const [tabFarmActive, setTabFarmActive] = useState('live')

  const [_query, setQuery] = useState('')

  const isArchived = pathname.includes('archived')
  const isInactive = pathname.includes('history')
  const isActive = !isInactive && !isArchived

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

        <Table />
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
