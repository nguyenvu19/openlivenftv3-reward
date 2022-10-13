/* eslint-disable no-await-in-loop */
import BigNumber from 'bignumber.js'
import { BIG_ZERO } from 'utils/bigNumber'
import { CampaignsItem } from './types'

const sleep = async (time) => new Promise((resolve) => setTimeout(resolve, time))

const fetchCampaignsLength = async (contracts) => {
  try {
    const result = await contracts.CURRENT_ID()
    return +result.toString()
  } catch (error) {
    console.error('fetchCampaignsLength Length Error: ', error)
    return BIG_ZERO.toNumber()
  }
}

const fetchCampaigns = async (contracts) => {
  let count = 0
  const list: CampaignsItem[] = []

  const campaignsLength = await fetchCampaignsLength(contracts)

  try {
    while (true) {
      count++
      let result = await contracts.campaigns(count)
      const currentPool = new BigNumber(result.currentPool.toString()).shiftedBy(-18).toNumber()
      const totalPool = new BigNumber(result.totalPool.toString()).shiftedBy(-18).toNumber()
      const start = result.start.toNumber() * 1000
      const finish = result.finish.toNumber() * 1000

      if (count <= campaignsLength) {
        const currentTimestamp = new Date().getTime()
        result = {
          id: count,
          currentPool,
          start,
          finish,
          totalPool,
          duration: (finish - start) / 60000,
          isComing: currentTimestamp < start,
          isStart: currentTimestamp > start && currentTimestamp < finish,
          isEnded: currentTimestamp > finish,
          loading: false,
        }
        list.push(result)
        await sleep(200)
      } else {
        break
      }
    }
  } catch (error) {
    console.error('fetchCampaigns error', error)
  }
  return { list, length: campaignsLength }
}

export default fetchCampaigns
