import { useEffect, useMemo, useState } from 'react'
import { ChainId } from '@pancakeswap/sdk'
import { Flex } from '@pancakeswap/uikit'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useDefaultsFromURLSearch } from 'state/limitOrders/hooks'
import { AppBody } from 'components/App'

import Page from '../Page'

import SwapForm from './components/SwapForm'
import { StyledSwapContainer } from './styles'

export const ACCESS_TOKEN_SUPPORT_CHAIN_IDS = [ChainId.BSC]

export default function Swap() {
  const [isChartExpanded] = useState(false)

  useDefaultsFromURLSearch()

  const { chainId } = useActiveWeb3React()

  const isAccessTokenSupported = useMemo(() => ACCESS_TOKEN_SUPPORT_CHAIN_IDS.includes(chainId), [chainId])

  return (
    <Page removePadding={isChartExpanded}>
      <Flex width="100%" justifyContent="center" position="relative">
        <StyledSwapContainer $isChartExpanded={isChartExpanded}>
          <AppBody>
            <SwapForm isAccessTokenSupported={isAccessTokenSupported} />
          </AppBody>
        </StyledSwapContainer>
      </Flex>
    </Page>
  )
}
