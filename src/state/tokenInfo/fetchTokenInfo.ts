import { useState, useEffect, useCallback } from 'react'
import { AppState, useAppDispatch } from 'state'
import { useSelector } from 'react-redux'
import { stringify } from 'querystring'
import axios from 'axios'
import { setTokenInfo } from './actions'

export const useTokenInfoFromMarketCap = () => {
  const dispatch = useAppDispatch()
  const [params, setParams] = useState({
    slug: 'openlive-nft',
  })

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios(`/api/token-info?${stringify(params)}`, {
        method: 'GET',
      })

      if (data.status_code === 200) {
        dispatch(
          setTokenInfo({
            params,
            data: data.data,
          }),
        )
      } else {
        dispatch(
          setTokenInfo({
            params,
            data: null,
          }),
        )
      }
    } catch (error) {
      dispatch(
        setTokenInfo({
          params,
          data: null,
        }),
      )
    }
  }, [dispatch, params])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const data = useSelector((state: AppState) => state.tokenInfo.tokenInfo)
  return {
    paramsInfoMarketPair: params,
    setParamsInfoMarketPair: setParams,
    tokenInfo: data,
    fetchInfoMarketPair: fetchData,
  }
}
