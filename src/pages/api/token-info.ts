import axios from 'axios'

// export default async function handler(req, res) {
//   const { slug } = req.query
//   try {
//     const result = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?slug=${slug}`, {
//       headers: {
//         'X-CMC_PRO_API_KEY': '72867771-a2ea-44b6-ae97-68281f28942c',
//       },
//     })
//     if (result.status === 200) {
//       return res.status(200).json({
//         status_code: 200,
//         data: result.data,
//       })
//     }
//     return res.status(200).json({
//       status_code: 301,
//       data: result,
//     })
//   } catch (error) {
//     return res.status(200).json({
//       status_code: 301,
//       data: error,
//     })
//   }
// }

export default async function handler(req, res) {
  const { slug } = req.query
  try {
    const promise1 = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=${slug}`, {
      headers: {
        'X-CMC_PRO_API_KEY': '72867771-a2ea-44b6-ae97-68281f28942c',
      },
    })
    const promise2 = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?slug=${slug}`, {
      headers: {
        'X-CMC_PRO_API_KEY': '72867771-a2ea-44b6-ae97-68281f28942c',
      },
    })
    const promise3 = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin')
    const promise4 = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum')
    const [resultLatest, resultInfo, tokensBtc, tokensEth] = await Promise.all([promise1, promise2, promise3, promise4])

    const dataAll = {
      dataLatest: resultLatest.data,
      dataInfo: resultInfo.data,
      dataInfoBtc: tokensBtc.data[0],
      dataInfoEth: tokensEth.data[0],
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
