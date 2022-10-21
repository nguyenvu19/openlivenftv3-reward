import React from 'react'
import styled from 'styled-components'
import { roundNumber } from 'helpers'

const WMarketPrice = styled.div`
  text-align: center;
`

const MarketPrice: React.FC<{ record }> = ({ record }) => (
  <WMarketPrice>
    <div className="tokens-item-amount" style={{ textAlign: 'center' }}>
      ${roundNumber(record.price, { scale: 4 })}
    </div>
  </WMarketPrice>
)

export default MarketPrice
