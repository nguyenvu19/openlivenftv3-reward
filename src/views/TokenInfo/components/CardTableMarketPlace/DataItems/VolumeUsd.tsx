import React from 'react'
import styled from 'styled-components'
import CurrencyFormat from 'react-currency-format'
import { isNumber } from 'helpers'

const WVolumeUsd = styled.div`
  text-align: center;
`

const VolumeUsd: React.FC<{ value }> = ({ value }) => (
  <WVolumeUsd>
    {isNumber(value) ? (
      <CurrencyFormat
        value={Math.round(value)}
        thousandSeparator
        displayType="text"
        prefix="$"
        renderText={(txt) => txt}
      />
    ) : (
      '-'
    )}
  </WVolumeUsd>
)

export default VolumeUsd
