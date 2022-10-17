import styled from 'styled-components'

const WTxStatus = styled.div`
  &.amount-in {
    color: blue;
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
  }
  &.amount-out {
    color: red;
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
  }
`

const TxAmount = ({ className = '', action, title, ...props }) => {
  if (action === 'IN') {
    return (
      <WTxStatus className={`amount-in ${className}`} {...props}>
        +{title}
      </WTxStatus>
    )
  }
  return (
    <WTxStatus className={`amount-out ${className}`} {...props}>
      -{title}
    </WTxStatus>
  )
}

export default TxAmount
