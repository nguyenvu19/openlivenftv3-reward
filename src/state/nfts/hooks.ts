import { useState, useEffect, useCallback } from 'react'
import { AppState, useAppDispatch } from 'state'
import { useSelector } from 'react-redux'
import { stringify } from 'querystring'
import { MORALIS_APP_API, MORALIS_APP_API_KEY } from 'config/constants/moralis'
import { NFT_ADDRESS } from 'config'
import { setNftsList } from './actions'
import { NftResponse } from './types'

export const useSelectorMyNftsList = (): NftResponse | null | undefined => {
  return useSelector((state: AppState) => state.nfts.list)
}

export const useMyNftsList = ({ pageSize, account }: { pageSize?: number; account?: string }) => {
  const dispatch = useAppDispatch()
  const [paramsNftsList, setParamsNftsList] = useState({
    limit: pageSize || 100,
    chain: 'bsc testnet',
    format: 'decimal',
    token_addresses: NFT_ADDRESS,
  })

  const fetchMyNftsList = useCallback(() => {
    if (account) {
      try {
        fetch(`${MORALIS_APP_API}/${account}/nft?${stringify(paramsNftsList)}`, {
          method: 'GET',
          headers: {
            'x-api-key': MORALIS_APP_API_KEY,
          },
        })
          .then((res) => res.json())
          .then((result: any) => {
            if (result?.result?.length >= 0) {
              dispatch(setNftsList({ list: result }))
            } else {
              dispatch(setNftsList({ list: null }))
            }
          })
      } catch (error) {
        dispatch(setNftsList({ list: null }))
      }
    }
  }, [dispatch, account, paramsNftsList])

  useEffect(() => {
    fetchMyNftsList()
  }, [fetchMyNftsList])

  return {
    paramsNftsList,
    setParamsNftsList,
    data: useSelectorMyNftsList(),
    fetchMyNftsList,
  }
}
