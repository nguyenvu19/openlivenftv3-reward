export enum CAMPAIGN_STATUS {
  COMING,
  LIVE,
  END,
}

export interface CampaignItem {
  id: number
  currentPool: number
  start: number
  finish: number
  totalPool: number
  duration: number
  status: CAMPAIGN_STATUS
  // isComing: boolean
  // isStart: boolean
  // isEnded: boolean
  loading: boolean
}
