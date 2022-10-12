import { useSlowRefreshEffect } from 'hooks/useRefreshEffect'
import { useAppDispatch } from 'state'
import { useContractCampaigns } from 'hooks/useContract'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { campaignsSelector } from './selectors'
import { fetchCampaignsPublicDataAsync } from '.'

export const usePollCoreCampaignsData = () => {
  const dispatch = useAppDispatch()
  const contractCampaigns = useContractCampaigns(false)

  useSlowRefreshEffect(() => {
    if (contractCampaigns) {
      dispatch(fetchCampaignsPublicDataAsync({ contracts: contractCampaigns }))
    }
  }, [dispatch, contractCampaigns])
}

export const useCampaigns = () => {
  return useSelector(useMemo(() => campaignsSelector(), []))
}
