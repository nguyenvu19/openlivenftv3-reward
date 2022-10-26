import CurrencyFormat from 'react-currency-format'

const FormatAmount = ({ value, ...props }) => (
  <CurrencyFormat value={value} displayType="text" thousandSeparator renderText={(v) => v} {...props} />
)

export default FormatAmount
