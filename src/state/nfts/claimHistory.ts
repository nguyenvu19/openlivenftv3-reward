import { useCallback, useEffect, useState } from 'react'
import { gql } from 'graphql-request'
import { graphqlOpv } from 'utils/graphql'
import { ClaimHistoryItemType } from './types'

// fetch nft detail graphql
const graphNftClaimHistory = async (total: number, tokenId?: string) => {
  try {
    const query = gql`
      query nftClaimHistory($total: Int!) {
        claims(first: $total, where: { tokenId: ${tokenId} }) {
          amount
          id
          transactionHash
          userAddress
          tokenId
        }
      }
    `
    const data = await graphqlOpv.request(query, { total })
    return data
  } catch (error) {
    console.error('Failed graphNftClaimHistory', error)
    return null
  }
}

interface ResponseClaimHistory {
  total: number
  pageSize: number
  tokenId: string
  data: ClaimHistoryItemType[] | undefined | null
}
export const useNftClaimHistory = (
  tokenId?: string,
): {
  nftClaimHistory: ResponseClaimHistory
  fetchNftClaimHistory: () => void
  setParamsNftClaimHistory: (p: any) => void
} => {
  const [paramsNftClaimHistory, setParamsNftClaimHistory] = useState({
    total: 10,
    pageSize: 10,
    tokenId,
  })
  const [nftClaimHistory, setNftClaimHistory] = useState<ResponseClaimHistory>({
    ...paramsNftClaimHistory,
    data: undefined,
  })

  const fetchNftClaimHistory = useCallback(async () => {
    if (paramsNftClaimHistory.tokenId) {
      const result = await graphNftClaimHistory(paramsNftClaimHistory.total, paramsNftClaimHistory.tokenId)
      setNftClaimHistory({
        ...paramsNftClaimHistory,
        data: result?.claims || null,
      })
    }
  }, [paramsNftClaimHistory])

  useEffect(() => {
    fetchNftClaimHistory()
  }, [fetchNftClaimHistory])

  return { nftClaimHistory, fetchNftClaimHistory, setParamsNftClaimHistory }
}
