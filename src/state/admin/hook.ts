import { useCallback, useState, useEffect, useMemo } from 'react'
import { useContractStaking } from 'hooks/useContract'
import { useDispatch, useSelector } from 'react-redux'
import { setOwner } from './actions'
import { Owner } from './types'
import { AppState } from '../index'

export const useGetOwner = () => {
  const dispatch = useDispatch()
  const contractStaking = useContractStaking()
  const [ownerContract, setOwnerContract] = useState<string>()

  const fetchOwner = useCallback(async () => {
    if (contractStaking) {
      const owner1 = await contractStaking.owner()
      setOwnerContract(owner1)
    }
    dispatch(setOwner({ owner: ownerContract }))
  }, [contractStaking, dispatch, ownerContract])

  useEffect(() => {
    fetchOwner()
  }, [fetchOwner])

  const { owner } = useSelector((state: AppState) => state.admin)

  return { owner }
}
