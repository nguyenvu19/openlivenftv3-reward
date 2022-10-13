import { useState, useEffect, useCallback } from 'react'
import { AppState, useAppDispatch } from 'state'
import { useSelector } from 'react-redux'
import { stringify } from 'querystring'
import { APP_USER_API } from 'config'
import { ResponseApiType } from 'state/resultType'
import { setOtherCurrencyList } from './actions'
import { OtherCurrencyType } from './types'

export const useSelectorOtherCurrencyList = (): OtherCurrencyType[] | null | undefined => {
  return useSelector((state: AppState) => state.otherCurrency.otherCurrencyList)
}

interface ResponseOtherCurrencyList extends ResponseApiType {
  data: OtherCurrencyType[]
}
export const useOtherCurrencyList = (page?: number, pageSize?: number) => {
  const dispatch = useAppDispatch()
  const [paramsOtherCurrencyList, setParamsOtherCurrencyList] = useState({
    page: page || 1,
    pageSize: pageSize || 10,
  })

  const fetchOtherCurrencyList = useCallback(() => {
    try {
      fetch(`${APP_USER_API}/currency/list?${stringify(paramsOtherCurrencyList)}`)
        .then((res) => res.json())
        .then((result: ResponseOtherCurrencyList) => {
          if (result.code === 200) {
            dispatch(setOtherCurrencyList({ otherCurrencyList: result.data }))
          } else {
            dispatch(setOtherCurrencyList({ otherCurrencyList: null }))
          }
        })
    } catch (error) {
      dispatch(setOtherCurrencyList({ otherCurrencyList: null }))
    }
  }, [dispatch, paramsOtherCurrencyList])

  useEffect(() => {
    fetchOtherCurrencyList()
  }, [fetchOtherCurrencyList])

  return {
    paramsOtherCurrencyList,
    setParamsOtherCurrencyList,
    otherCurrencyList: useSelectorOtherCurrencyList(),
    fetchOtherCurrencyList,
  }
}
