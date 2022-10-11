import { Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledSwapContainer = styled(Flex)<{ $isChartExpanded: boolean }>`
  width: 100%;
  flex-shrink: 0;
  height: fit-content;
`
