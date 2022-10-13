import { useState, useEffect, useCallback } from 'react'
import { AppState, useAppDispatch } from 'state'
import { useSelector } from 'react-redux'
import { APP_USER_API } from 'config'
import { ResponseApiType } from 'state/resultType'
import { setInvestList } from './actions'
import { InvestPackageResultType } from './types'

export const useSelectorInvestPackageList = (): InvestPackageResultType | null | undefined => {
  return useSelector((state: AppState) => state.invest.investList)
}

interface ResponseInvestPackage extends ResponseApiType {
  data: InvestPackageResultType
}
export const useInvestPackageList = (page?: number, pageSize?: number) => {
  const dispatch = useAppDispatch()
  const [paramsInvestList, setParamsInvestList] = useState({
    page: page || 1,
    pageSize: pageSize || 10,
  })

  const fetchInvestList = useCallback(() => {
    try {
      fetch(`${APP_USER_API}/investPackage/list?${123}`)
        .then((res) => res.json())
        .then((result: ResponseInvestPackage) => {
          if (result.code === 200) {
            dispatch(setInvestList({ investList: result.data }))
          } else {
            dispatch(setInvestList({ investList: null }))
          }
        })
    } catch (error) {
      dispatch(setInvestList({ investList: null }))
    }
  }, [dispatch])

  useEffect(() => {
    fetchInvestList()
  }, [fetchInvestList])

  return { paramsInvestList, setParamsInvestList, investList: useSelectorInvestPackageList(), fetchInvestList }
}
