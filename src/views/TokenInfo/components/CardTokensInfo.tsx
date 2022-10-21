import styled from 'styled-components'
import { useTokenInfoFromMarketCap } from 'state/tokenInfo/fetchTokenInfo'
import TokensInfoPrice from './Banner/TokensInfoPrice'
import TokensInfoSocial from './Banner/TokensInfoSocial'

const WCardTokenInfo = styled.div`
  width: 100%;
  padding: 16px;
  background: #eefbff;
  border-radius: 12px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-flow: row wrap;
  gap: 20px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    border: 1px solid rgba(67, 108, 255, 0.3);
    box-shadow: unset;
    border-radius: 24px;
    gap: 32px;
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
