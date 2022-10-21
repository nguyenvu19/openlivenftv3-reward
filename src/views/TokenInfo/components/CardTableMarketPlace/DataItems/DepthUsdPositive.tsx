import React from 'react'
import styled from 'styled-components'
import CurrencyFormat from 'react-currency-format'
import { roundNumber } from 'helpers'

const WDepthUsdPositive = styled.div`
  text-align: center;
`

const DepthUsdPositive: React.FC<{ value }> = ({ value }) => (
  <WDepthUsdPositive>
    {value !== undefined ? (
      <CurrencyFormat
        value={roundNumber(value, { scale: 2 })}
        thousandSeparator
        displayType="text"
        prefix="$"
        renderText={(txt) => txt}
      />
    ) : (
      '-'
    )}
  </WDepthUsdPositive>
)

export default DepthUsdPositive
