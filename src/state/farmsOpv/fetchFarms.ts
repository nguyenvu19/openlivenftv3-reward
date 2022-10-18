/* eslint-disable no-await-in-loop */
import { useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { AppState, useAppDispatch } from 'state'
import { getContractOpvFarm } from 'utils/contractHelpers'
import { setFarmsData } from './actions'
import { FarmsItemType } from './types'

const configInfoPool = {
  contractAddress: '0x5F3bc17058994E9dd2209D065D230e36a8Efb599',
  logo1: '/images/tokens/0x36c7b164f85d6f775cd128966d5819c7d36feff3.png',
  logo2: '/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png',
  lpTokenAddress: '0x7591169B6d2772845E47bc85A6a2C57AE4a4618b',
  name: 'OPV-BNB LPs',
  symbol1: 'OPV',
  symbol2: 'BNB',
  tokenAddress1: '0x7591169B6d2772845E47bc85A6a2C57AE4a4618b',
  tokenAddress2: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
}

const { contractAddress, symbol1, tokenAddress1, logo1, symbol2, tokenAddress2, logo2, name, lpTokenAddress } =
  configInfoPool

export const useFarmsData = (account?: string) => {
  const dispatch = useAppDispatch()

  const fetchFarmsData = useCallback(async () => {
    const contractFarm = getContractOpvFarm()
    if (contractFarm) {
      try {
        const totalPool = await (await contractFarm.poolLength()).toString()

        const pFarmsList: FarmsItemType[] = []
        let pTotalUserDividendsAllPool = 0

        for (let poolId = 0; poolId < +totalPool; poolId++) {
          const poolItem = await contractFarm.poolInfo(`${poolId}`)

          const currentTimestamp = new Date().getTime()
          const startTimestamp = +poolItem.startBlock.toString() * 1000
          const endTimestamp = +poolItem.endBlock.toString() * 1000

          const poolInfo = {
            accCakePerShare: +poolItem.accCakePerShare.toString(),
            allocPoint: +poolItem.allocPoint.toString() / 1e18,
            startBlock: startTimestamp,
            endBlock: endTimestamp,
            lastRewardBlock: +poolItem.lastRewardBlock.toString(),
            lpToken: poolItem.lpToken,
            totalLpSupply: +poolItem.totalLpSupply.toString() / 1e18,
            isLocked: poolItem.isLocked,
          }

          // User info
          let userInfo
          if (account) {
            let userDividends
            try {
              userDividends = await (await contractFarm.pendingCake(`${poolId}`, account)).toString()
              userDividends = +userDividends / 1e18
            } catch (error) {
              console.info(`pendingCake: ${poolId} - ${account}`, error)
            }
            pTotalUserDividendsAllPool += userDividends

            const responseUserInfo = await contractFarm.userInfo(`${poolId}`, account)
            userInfo = {
              amount: +responseUserInfo.amount.toString() / 1e18,
              userDividends,
              pTotalUserDividendsAllPool,
              rewardDebt: responseUserInfo.rewardDebt,
            }
          }

          // Map data pool
          const poolData = {
            poolId,
            name,
            symbol1,
            symbol2,
            logo1,
            logo2,
            tokenAddress1,
            tokenAddress2,
            contract: contractAddress,
            lpToken: lpTokenAddress,
            startTime: startTimestamp,
            endTime: endTimestamp,
            poolEnded: currentTimestamp >= endTimestamp,
            poolStatus: currentTimestamp >= endTimestamp ? 'finished' : 'live',
            dailyRewards:
              poolInfo.allocPoint / ((+poolItem.endBlock.toString() - +poolItem.startBlock.toString()) / 86400),
            userInfo,
            poolInfo,
          }

          pFarmsList.push(poolData as any)
        }

        dispatch(
          setFarmsData({
            farmsData: pFarmsList,
            totalUserDividendsAllPool: pTotalUserDividendsAllPool,
          }),
        )
      } catch (error) {
        console.error('fetchFarmsData', error)
      }
    }
  }, [account, dispatch])

  useEffect(() => {
    fetchFarmsData()
  }, [fetchFarmsData])

  const { farmsData, totalUserDividendsAllPool } = useSelector((state: AppState) => state.farmsOpv)
  return { farmsData, totalUserDividendsAllPool, fetchFarmsData }
}
