import styled from 'styled-components'
import TokensInfoSocial from './TokensInfoSocial'
import TokensInfoPrice from './TokensInfoPrice'

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
  return (
    <WCardTokenInfo>
      <TokensInfoSocial />
      <TokensInfoPrice />
    </WCardTokenInfo>
  )
}

export default CardTokensInfo
