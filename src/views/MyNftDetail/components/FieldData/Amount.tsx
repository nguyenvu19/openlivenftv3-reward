import CurrencyFormat from 'react-currency-format'
import BigNumber from 'bignumber.js'
import { isNumber } from 'helpers'

function TableClaimHistoryAmount({ amount, ...props }) {
  if (!isNumber(amount)) return <></>
  return (
    <CurrencyFormat
      value={new BigNumber(amount).shiftedBy(-18).toNumber()}
      displayType="text"
      thousandSeparator
      suffix={` OPV`}
      renderText={(t) => t}
      {...props}
    />
  )
}

export default TableClaimHistoryAmount
