import React from 'react'
import { Box, Image, Link } from '@pancakeswap/uikit'
import styled from 'styled-components'

const WMarketPair = styled.div`
  color: #007ca1;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    margin-left: 5px;
  }
`

const MarketPair: React.FC<{ record }> = ({ record }) => (
  <WMarketPair className="tokens-item-pairs" style={{ textAlign: 'center' }}>
    {record.marketPair}
    {record.dexerUrl && (
      <Link external href={record.dexerUrl}>
        <Box width={24} height={24} mr="8px">
          <Image width={24} height={24} src="https://s2.coinmarketcap.com/static/cloud/img/dex/dexer-flag.png" />
        </Box>
      </Link>
    )}
  </WMarketPair>
)

export default MarketPair
