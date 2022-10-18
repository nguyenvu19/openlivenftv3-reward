import { useState, useEffect, useCallback } from 'react'
import { AppState, useAppDispatch } from 'state'
import { useSelector } from 'react-redux'
import { stringify } from 'querystring'
import axios from 'axios'
import { setInfoMarketPair } from './actions'

export const useInfoMarketPairs = (page?: number, pageSize?: number) => {
  const dispatch = useAppDispatch()
  const [paramsInfoMarketPair, setParamsInfoMarketPair] = useState({
    start: page,
    limit: pageSize || 100,
    slug: 'openlive-nft',
    category: 'spot',
    centerType: 'all',
    sort: 'cmc_rank_advanced',
  })

  const fetchInfoMarketPair = useCallback(async () => {
    try {
      const { data } = await axios(`/api/market-pairs?${stringify(paramsInfoMarketPair)}`, {
        method: 'GET',
      })
      if (data.status_code === 200) {
        dispatch(
          setInfoMarketPair({
            params: paramsInfoMarketPair,
            data: data.data,
          }),
        )
      } else {
        dispatch(
          setInfoMarketPair({
            params: paramsInfoMarketPair,
            data: null,
          }),
        )
      }
    } catch (error) {
      dispatch(
        setInfoMarketPair({
          params: paramsInfoMarketPair,
          data: null,
        }),
      )
    }
  }, [dispatch, paramsInfoMarketPair])

  useEffect(() => {
    fetchInfoMarketPair()
  }, [fetchInfoMarketPair])

  const infoMarketPair = useSelector((state: AppState) => state.tokenInfo.infoMarketPair)
  return { paramsInfoMarketPair, setParamsInfoMarketPair, infoMarketPair, fetchInfoMarketPair }
}
