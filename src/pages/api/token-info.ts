import axios from 'axios'

const marketCapProKey = '72867771-a2ea-44b6-ae97-68281f28942c'
const marketCapProApi = 'https://pro-api.coinmarketcap.com/v2'
const coingeckoApi = 'https://api.coingecko.com/api/v3'

export default async function handler(req, res) {
  const { slug } = req.query
  try {
    const promiseQuotesLatest = axios.get(`${marketCapProApi}/cryptocurrency/quotes/latest?slug=${slug}`, {
      headers: {
        'X-CMC_PRO_API_KEY': marketCapProKey,
      },
    })
    const promiseCurrencyInfo = axios.get(`${marketCapProApi}/cryptocurrency/info?slug=${slug}`, {
      headers: {
        'X-CMC_PRO_API_KEY': marketCapProKey,
      },
    })
    const promiseCurrencyInfoBTC = axios.get(`${coingeckoApi}/coins/markets?vs_currency=usd&ids=bitcoin`)
    const promiseCurrencyInfoETH = axios.get(`${coingeckoApi}/coins/markets?vs_currency=usd&ids=ethereum`)
    const [quotesLatest, currencyInfo, currencyInfoBTC, currencyInfoETH] = await Promise.all([
      promiseQuotesLatest,
      promiseCurrencyInfo,
      promiseCurrencyInfoBTC,
      promiseCurrencyInfoETH,
    ])

    const dataAll = {
      dataInfo: Object.values(currencyInfo?.data?.data)?.[0],
      dataLatest: Object.values(quotesLatest?.data?.data)?.[0],
      dataInfoBtc: currencyInfoBTC?.data?.[0],
      dataInfoEth: currencyInfoETH?.data?.[0],
    }

    return res.status(200).json({
      status_code: 200,
      data: dataAll,
    })
  } catch (error) {
    return res.status(200).json({
      status_code: 301,
      data: error,
    })
  }
}
