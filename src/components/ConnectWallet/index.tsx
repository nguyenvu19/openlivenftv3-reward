import ConnectWalletButton from 'components/ConnectWalletButton'
import styled from 'styled-components'

export const WConnectWallet = styled.div<{ minHeight?: string }>`
  width: 100%;
  min-height: ${({ minHeight }) => minHeight || '200px'};
  padding: 24px;
  background: #eefbff;
  border: 1px solid rgba(67, 108, 255, 0.3);
  border-radius: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
`
interface Props {
  label?: string
  minHeight?: string
  [t: string]: any
}
const ConnectWallet: React.FC<Props> = ({ minHeight, label, ...props }) => {
  return (
    <WConnectWallet minHeight={minHeight} {...props}>
      {label || <ConnectWalletButton />}
    </WConnectWallet>
  )
}

export default ConnectWallet
