import styled from 'styled-components'

const WTxStatus = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  padding: 4px 16px;
  border-radius: 4px;

  &[data-status='CREATED'] {
    color: white;
    background: #fdc22a;
  }
  &[data-status='COMPLETED'] {
    color: white;
    background: #00930f;
  }
  &[data-status='PENDING'] {
    color: #fff;
    background: #e7dbb0;
  }
  &[data-status='PROCESSING'] {
    color: white;
    background: #fdc22a;
  }
  &[data-status='ACCEPTED'] {
    color: white;
    background: #fdc22a;
  }
  &[data-status='FAILED'] {
    color: white;
    background: #7c7c7c;
  }
  &[data-status='CANCEL'] {
    color: white;
    background: #7c7c7c;
  }
`

const TxStatus = ({ status, title, ...props }) => (
  <WTxStatus data-status={status} {...props}>
    {title}
  </WTxStatus>
)

export default TxStatus
