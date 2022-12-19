import { useCallback, useEffect } from 'react'
import { useContractStaking, useContractCampaigns } from 'hooks/useContract'
import { useDispatch, useSelector } from 'react-redux'
import { setOwnerStaking, setOwnerContract } from './actions'
import { AppState } from '../index'

export const useGetOwnerStaking = () => {
  const dispatch = useDispatch()
  const contractStaking = useContractStaking()

  const fetchOwnerStaking = useCallback(async () => {
    if (contractStaking) {
      const ownerStaking = await contractStaking.owner()
      dispatch(setOwnerStaking({ ownerStaking }))
    }
  }, [contractStaking, dispatch])

  useEffect(() => {
    fetchOwnerStaking()
  }, [fetchOwnerStaking])

  const { owner } = useSelector((state: AppState) => state.admin)

  return { owner }
}

export const useGetOwnerContract = () => {
  const dispatch = useDispatch()
  const contractContract = useContractCampaigns()

  const fetchOwnerContract = useCallback(async () => {
    if (contractContract) {
      const ownerContract = await contractContract.owner()
      dispatch(setOwnerContract({ ownerContract }))
    }
  }, [contractContract, dispatch])

  useEffect(() => {
    fetchOwnerContract()
  }, [fetchOwnerContract])

  const { owner } = useSelector((state: AppState) => state.admin)

  return { owner }
}
