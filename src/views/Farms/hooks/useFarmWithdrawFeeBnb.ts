import { useState, useEffect, useCallback } from 'react'

const useFarmWithdrawFeeBnb = (contract): [number | undefined] => {
  const [data, setData] = useState<number | undefined>(undefined)
  const getData = useCallback(async () => {
    if (contract) {
      try {
        const response = +(await contract.WIHDRAW_FEE_BNB()).toString()
        setData(response / 1e18)
      } catch (error) {
        console.error('useFarmWithdrawFeeBnb', error)
      }
    }
  }, [contract])

  useEffect(() => {
    getData()
  }, [getData])

  return [data]
}

export default useFarmWithdrawFeeBnb
