import { useEffect, useMemo, useState } from 'react'
import { ChainId } from '@pancakeswap/sdk'
import { Box, Flex, useMatchBreakpoints } from '@pancakeswap/uikit'
import Footer from 'components/Menu/Footer'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { EXCHANGE_DOCS_URLS } from 'config/constants'
import { useDefaultsFromURLSearch } from 'state/limitOrders/hooks'
import { AppBody } from 'components/App'

import { useExchangeChartManager } from '../../state/user/hooks'
import Page from '../Page'

import SwapForm from './components/SwapForm'
import { StyledInputCurrencyWrapper, StyledSwapContainer } from './styles'

export const ACCESS_TOKEN_SUPPORT_CHAIN_IDS = [ChainId.BSC]

export default function Swap() {
  const { isMobile } = useMatchBreakpoints()
  const [isChartExpanded] = useState(false)
  const [userChartPreference, setUserChartPreference] = useExchangeChartManager(isMobile)
  const [isChartDisplayed, setIsChartDisplayed] = useState(userChartPreference)

  useDefaultsFromURLSearch()

  useEffect(() => {
    setUserChartPreference(isChartDisplayed)
  }, [isChartDisplayed, setUserChartPreference])

  const { chainId } = useActiveWeb3React()

  const isAccessTokenSupported = useMemo(() => ACCESS_TOKEN_SUPPORT_CHAIN_IDS.includes(chainId), [chainId])

  return (
    <Page removePadding={isChartExpanded} hideFooterOnDesktop={isChartExpanded}>
      <Flex width="100%" justifyContent="center" position="relative">
        <Flex flexDirection="column">
          <StyledSwapContainer $isChartExpanded={isChartExpanded}>
            <StyledInputCurrencyWrapper mt={isChartExpanded ? '24px' : '0'}>
              <AppBody>
                <SwapForm
                  isAccessTokenSupported={isAccessTokenSupported}
                  setIsChartDisplayed={setIsChartDisplayed}
                  isChartDisplayed={isChartDisplayed}
                />
              </AppBody>
            </StyledInputCurrencyWrapper>
          </StyledSwapContainer>
          {/* {isChartExpanded && (
            <Box display={['none', null, null, 'block']} width="100%" height="100%">
              <Footer variant="side" helpUrl={EXCHANGE_DOCS_URLS} />
            </Box>
          )} */}
        </Flex>
      </Flex>
    </Page>
  )
}
