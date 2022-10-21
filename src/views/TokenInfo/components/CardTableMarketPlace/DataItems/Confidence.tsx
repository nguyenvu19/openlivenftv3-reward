import React from 'react'
import styled from 'styled-components'

const WConfidence = styled.div`
  text-align: center;
  p {
    color: #fff;
    padding: 4px 16px;
    border-radius: 8px;
    &[data-confidend='High'] {
      background: #008d0e;
    }
    &[data-confidend='N/A'] {
      background: #d6d6d6;
    }
  }
`

const Confidence: React.FC<{ value }> = ({ value }) => (
  <WConfidence>
    <p data-confidend="High">High</p>
  </WConfidence>
)

export default Confidence
