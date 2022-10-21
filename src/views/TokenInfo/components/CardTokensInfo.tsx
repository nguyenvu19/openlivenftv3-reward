import styled from 'styled-components'
import { useTokenInfoFromMarketCap } from 'state/tokenInfo/fetchTokenInfo'
import TokensInfoPrice from './Banner/TokensInfoPrice'
import TokensInfoSocial from './Banner/TokensInfoSocial'

const WCardTokenInfo = styled.div`
  width: 100%;
  padding: 16px;
  background: #eefbff;
  border: 1px solid rgba(67, 108, 255, 0.3);
  border-radius: 24px;

  display: flex;
  flex-flow: row wrap;
  gap: 20px;

  ${({ theme }) => theme.mediaQueries.sm} {
    gap: 32px;
    padding: 24px;
  }
`

const CardTokensInfo = () => {
  const { tokenInfo } = useTokenInfoFromMarketCap()
  // console.log(tokenInfo)

  const { dataInfo, dataLatest, dataInfoBtc, dataInfoEth } = tokenInfo?.data || {
    dataInfo: null,
    dataInfoBtc: null,
    dataInfoEth: null,
    dataLatest: null,
  }

  return (
    <WCardTokenInfo>
      <TokensInfoSocial dataInfo={dataInfo} />
      <TokensInfoPrice
        dataInfo={dataInfo}
        dataLatest={dataLatest}
        dataInfoBtc={dataInfoBtc}
        dataInfoEth={dataInfoEth}
      />
    </WCardTokenInfo>
  )
}

export default CardTokensInfo
