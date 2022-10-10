import { EyeIcon, EyeSleepIcon, Flex } from '@pancakeswap/uikit'
import { useState } from 'react'
import styled from 'styled-components'

const WTotalBalance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 34px;
  min-width: 130px;
  padding: 5px 20px;
  margin-right: 12px;

  background: #f3f3f3;
  border: 0.5px solid #0aadad;
  border-radius: 8px;
  cursor: pointer;

  svg {
    width: 14px;
    path {
      &:first-child {
        fill: #0aadad;
      }
      &:nth-child(2) {
        fill: #0aadad;
      }
      &:last-child {
        fill: #0aadad;
      }
    }
  }
`

const TotalBalance = ({ currency = [], ...props }) => {
  const [show, setShow] = useState(false)
  const totalBalance = currency?.reduce((total, current) => total + current.balance * current.usd_rate, 0)
  return (
    <WTotalBalance onClick={() => setShow((prev) => !prev)} {...props}>
      <Flex alignItems="center">
        {show ? (
          `${totalBalance || 0} USD`
        ) : (
          <>
            <span>$ </span>********
          </>
        )}
      </Flex>
      {show ? <EyeIcon /> : <EyeSleepIcon />}
    </WTotalBalance>
  )
}

export default TotalBalance
