import axios from 'axios'
import { stringify } from 'querystring'

export default async function handler(req, res) {
  const { query } = req
  const qtr = stringify(query)
  try {
    const result = await axios.get(
      `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/market-pairs/latest?${qtr}`,
    )
    if (result.status === 200) {
      return res.status(200).json({
        status_code: 200,
        data: result?.data?.data,
      })
    }
    return res.status(200).json({
      status_code: 301,
      data: result,
    })
  } catch (error) {
    return res.status(200).json({
      status_code: 501,
      data: error,
    })
  }
}
