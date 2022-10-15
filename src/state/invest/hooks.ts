import { useState, useEffect, useCallback } from 'react'
import { AppState, useAppDispatch } from 'state'
import { useSelector } from 'react-redux'
import { stringify } from 'querystring'
import { APP_USER_API } from 'config'
import { ResponseApiType } from 'state/resultType'
import { setInvestList, setMyInvestList } from './actions'
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
      fetch(`${APP_USER_API}/investPackage/list?${stringify(paramsInvestList)}`)
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
  }, [dispatch, paramsInvestList])

  useEffect(() => {
    fetchInvestList()
  }, [fetchInvestList])

  return { paramsInvestList, setParamsInvestList, investList: useSelectorInvestPackageList(), fetchInvestList }
}

// My invest list item
export const useMyInvestList = (page?: number, pageSize?: number) => {
  const dispatch = useAppDispatch()
  const [paramsMyInvestList, setParamsMyInvestList] = useState({
    page: page || 1,
    pageSize: pageSize || 10,
    // package_id: '',
    nft_name: '',
  })

  const fetchMyInvestList = useCallback(() => {
    try {
      fetch(`${APP_USER_API}/investment/list?${stringify(paramsMyInvestList)}`)
        .then((res) => res.json())
        .then((result: any) => {
          if (result.code === 200) {
            dispatch(setMyInvestList({ myInvestList: result.data }))
          } else {
            dispatch(setMyInvestList({ myInvestList: null }))
          }
        })
    } catch (error) {
      dispatch(setMyInvestList({ myInvestList: null }))
    }
  }, [dispatch, paramsMyInvestList])

  useEffect(() => {
    fetchMyInvestList()
  }, [fetchMyInvestList])

  const myInvestList = useSelector((state: AppState) => state.invest.myInvestList)
  return { paramsMyInvestList, setParamsMyInvestList, myInvestList, fetchMyInvestList }
}
