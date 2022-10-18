import { APP_USER_API } from 'config'
import { useState, useEffect, useCallback } from 'react'
import { AppState, useAppDispatch } from 'state'
import { useSelector } from 'react-redux'
import { stringify } from 'querystring'
import axios from 'axios'
import { setBossTeamWallets } from './actions'

export const useBossTeamWallets = (page?: number, pageSize?: number) => {
  const dispatch = useAppDispatch()
  const [pBossTeamWallets, setPBossTeamWallets] = useState({
    page: page || 1,
    pageSize: pageSize || 10,
  })

  const fetchBossTeamWallets = useCallback(async () => {
    try {
      const { data } = await axios(`${APP_USER_API}/teamWallet/list?${stringify(pBossTeamWallets)}`, {
        method: 'GET',
      })

      if (data.code === 200) {
        dispatch(
          setBossTeamWallets({
            params: pBossTeamWallets,
            data: data.data,
          }),
        )
      } else {
        dispatch(
          setBossTeamWallets({
            params: pBossTeamWallets,
            data: null,
          }),
        )
      }
    } catch (error) {
      dispatch(
        setBossTeamWallets({
          params: pBossTeamWallets,
          data: null,
        }),
      )
    }
  }, [dispatch, pBossTeamWallets])

  useEffect(() => {
    fetchBossTeamWallets()
  }, [fetchBossTeamWallets])

  const bossTeamWallets = useSelector((state: AppState) => state.tokenInfo.bossTeamWallets)
  return { pBossTeamWallets, setPBossTeamWallets, bossTeamWallets, fetchBossTeamWallets }
}
