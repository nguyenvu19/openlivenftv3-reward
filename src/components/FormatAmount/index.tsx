import { isNumber } from 'helpers/Number'
import CurrencyFormat from 'react-currency-format'

const FormatAmount = ({ value, nullValue, ...props }) => {
  if (!isNumber(value)) return <>{nullValue}</>
  return <CurrencyFormat value={value} displayType="text" thousandSeparator renderText={(v) => v} {...props} />
}

export default FormatAmount
