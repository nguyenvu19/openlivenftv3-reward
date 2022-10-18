import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TokensInfoPrice from './TokensInfoPrice'
import TokensInfoSocial from './TokensInfoSocial'

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

interface optionsProp {
  // eslint-disable-next-line camelcase
  url: any
  headers: any
  json: any
  fetData: any
  data: any
}

const CardTokensInfo = () => {
  const [fetData, setFetData] = useState<optionsProp>()

  const dataInfo = fetData && Object.values(fetData?.data?.dataInfo?.data)?.[0]
  const dataLatest = fetData && Object.values(fetData?.data?.dataLatest?.data)?.[0]
  const dataInfoBtc = fetData?.data?.dataInfoBtc
  const dataInfoEth = fetData?.data?.dataInfoEth

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const res = await axios.get('api/token-info?slug=openlive-nft')
        setFetData(res?.data)
      } catch (ex) {
        console.log('ex', ex)
      }
    }
    fetchMyAPI()
  }, [])

  return (
    <WCardTokenInfo>
      <TokensInfoSocial dataInfo={dataInfo} />
      <TokensInfoPrice
        dataInfo={fetData && dataInfo}
        dataLatest={fetData && dataLatest}
        dataInfoBtc={dataInfoBtc}
        dataInfoEth={dataInfoEth}
      />
    </WCardTokenInfo>
  )
}

export default CardTokensInfo
