import { useCallback, useState, useEffect } from 'react'
import { BUSD, USDT } from '@pancakeswap/tokens'
import { ZERO_ADDRESS } from 'config/constants'
import { getBep20Contract, getContractFactoryPancake } from 'utils/contractHelpers'
import { DEFAULT_CHAIN_ID } from 'config'
import { isAddress } from '../utils/index'

/**
 * @param tokenAddress1 (string) Required is base token address LPs
 * @param tokenAddress2 (string) Required is other token. Can are (usdt,busd or token) address
 * @returns (number) Price of base token address LPs
 */
const useGetPriceTokenLPs = (tokenAddress1, tokenAddress2) => {
  const [price, setPrice] = useState<number | undefined>(0)

  const fetchData = useCallback(async () => {
    if (isAddress(tokenAddress1) && isAddress(tokenAddress2) && tokenAddress1 !== tokenAddress2) {
      const contractFactory = getContractFactoryPancake()
      const web3Token2 = getBep20Contract(tokenAddress2)

      const pairTokenAddress = await contractFactory.getPair(tokenAddress1, tokenAddress2)

      if (pairTokenAddress !== ZERO_ADDRESS) {
        // pool of Token 2
        const pairBalance = +(await (await web3Token2.balanceOf(pairTokenAddress)).toString())
        const pairDecimals = +(await (await web3Token2.decimals()).toString())
        const balancePoolToken2 = pairBalance / 10 ** pairDecimals
        let totalToken2Price = balancePoolToken2 * 2

        const TOKEN_USDT = USDT[DEFAULT_CHAIN_ID].address
        const TOKEN_BUSD = BUSD[DEFAULT_CHAIN_ID].address

        // check if token2 is usd for get rate($) of token2
        if (
          tokenAddress2.toLowerCase() !== TOKEN_BUSD.toLowerCase() &&
          tokenAddress2.toLowerCase() !== TOKEN_USDT.toLowerCase()
        ) {
          // Price of token 2 by dollar (1 token ?= $) (gia token2)
          const pairTokenUSDTAddress = await contractFactory.getPair(tokenAddress2, TOKEN_USDT)
          if (pairTokenAddress) {
            const contractToken2 = getBep20Contract(tokenAddress2)
            const contractTokenUSDT = getBep20Contract(TOKEN_USDT)

            const balancePoolToken2WithUSDT =
              +(await (await contractToken2.balanceOf(pairTokenUSDTAddress)).toString()) /
              10 ** (await contractToken2.decimals())
            const balancePoolUSDTWithUSDT =
              +(await (await contractTokenUSDT.balanceOf(pairTokenUSDTAddress)).toString()) /
              10 ** (await contractTokenUSDT.decimals())
            // rate($) of token 2
            const priceToken2Dollar = balancePoolToken2WithUSDT / balancePoolUSDTWithUSDT

            // Parse Token to price by dollar if token2 is not usd
            totalToken2Price /= priceToken2Dollar // total $ of token 2 in pool
          }
        }

        // supply of token LPs
        const contractTokenLPs = getBep20Contract(pairTokenAddress)
        const totalSupplyTokenLPs = +(await (await contractTokenLPs.totalSupply()).toString())

        // Price of token LPs
        // Example:
        // ...Pool token/BUSD có value là 10000 token + 1000 BUSD => value pool đang là 1000 $ (quy đổi zuk) + 1000$ (quy đổi busd) = 2000$
        // tiếp theo get totalSupply của LPs pool đó đang có tổng là 1000
        // => 1 LPs có value = 2000$ / 1000 LPs = 2 $/LP

        const priceTokenLPs = totalToken2Price / totalSupplyTokenLPs
        setPrice(priceTokenLPs)
      } else {
        setPrice(undefined)
      }
    } else {
      setPrice(undefined)
    }
  }, [tokenAddress1, tokenAddress2])
  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { priceTokenLPs: price, fetchPriceTokenLPs: fetchData }
}

export default useGetPriceTokenLPs
