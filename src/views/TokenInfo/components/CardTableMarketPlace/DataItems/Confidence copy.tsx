import React from 'react'
import styled from 'styled-components'

const WEffectiveLiquidity = styled.div`
  text-align: center;
`

const EffectiveLiquidity: React.FC<{ value }> = ({ value }) => (
  <WEffectiveLiquidity>{Math.round(value)}</WEffectiveLiquidity>
)

export default EffectiveLiquidity
