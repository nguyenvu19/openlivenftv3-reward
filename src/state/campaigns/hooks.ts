import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { AppState, useAppDispatch } from 'state'
import { useFastRefreshEffect } from 'hooks/useRefreshEffect'
import { campaignsSelector } from './selectors'
import { fetchCampaignsPublicDataAsync } from '.'
import { CampaignItem } from './types'

export const usePollCoreCampaignsData = () => {
  const dispatch = useAppDispatch()

  useFastRefreshEffect(() => {
    dispatch(fetchCampaignsPublicDataAsync())
  }, [dispatch])
}

export const useCampaigns = () => {
  return useSelector(useMemo(() => campaignsSelector(), []))
}

export const useCampaignItem = (campaignId?: string | number): CampaignItem | undefined => {
  const campaigns = useSelector((state: AppState) => state.campaigns.data)
  return useMemo(() => {
    return campaigns?.find((campaign) => campaign.id === +campaignId)
  }, [campaignId, campaigns])
}
