import { useCallback, useState, useEffect } from 'react'
import { useContractStaking } from 'hooks/useContract'

const useGetOwner = () => {
  const contractStaking = useContractStaking()
  const [owner, setOwner] = useState<any | undefined>('')

  const fetchOwner = useCallback(async () => {
    if (contractStaking) {
      const owner1 = await contractStaking.owner()

      setOwner(owner1)
    }
  }, [contractStaking])
  useEffect(() => {
    fetchOwner()
  }, [fetchOwner])

  return { owner, fetchOwner }
}

export default useGetOwner
