import Container from 'components/Layout/Container'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useContractCampaigns } from 'hooks/useContract'
import { useCampaignItem, usePollCoreCampaignsData } from 'state/campaigns/hooks'
import { useRouter } from 'next/router'
import { useMyNftsList } from 'state/nfts/hooks'
import styled from 'styled-components'
import { NftType } from 'state/nfts/types'
import { CAMPAIGN_STATUS } from 'state/campaigns/types'
import { useToast } from '@pancakeswap/uikit'
import { useTransactionAdder } from 'state/transactions/hooks'
import moment from 'moment'
import ClaimNftList from './components/ClaimNftList'

const WCampaignsClaimNft = styled.div`
  padding-bottom: 100px;
`
const CampaignsClaimNft: React.FC<React.PropsWithChildren> = () => {
  const {
    push,
    query: { campaignId },
  } = useRouter()
  const { account } = useActiveWeb3React()
  const { toastError } = useToast()

  usePollCoreCampaignsData() // list campaign data for get detail

  const contractCampaign = useContractCampaigns()

  const campaign = useCampaignItem(campaignId?.[0])
  const { data: listNftUser } = useMyNftsList({ account })

  const addTransaction = useTransactionAdder()
  const handleClaimReward = async ({ nftItem }: { nftItem: NftType }, cb) => {
    if (!nftItem || !contractCampaign || !campaign) {
      if (cb) cb()
      return false
    }

    if (campaign.status !== CAMPAIGN_STATUS.LIVE) {
      if (cb) cb()
      push('/campaigns')
      return toastError('Campaign is ended')
    }

    if (campaign.currentPool >= campaign.totalPool) {
      if (cb) cb()
      return toastError('Sold out')
    }

    try {
      const lastTimeClaim = await (await contractCampaign.claimTimes(nftItem.token_id)).toNumber()
      if (lastTimeClaim && lastTimeClaim > 0) {
        const currentTime = new Date(moment(new Date()).format('YYYY/MM/DD')).getTime()
        if (lastTimeClaim * 1000 >= currentTime) {
          if (cb) cb()
          return toastError(`NFT ID: ${nftItem.token_id}, Claimed today`)
        }
      }

      const response = await contractCampaign.claimOPV([nftItem.token_id], campaignId?.[0])
      addTransaction(response, {
        summary: `Claim reward by NFT: ${nftItem.token_id}`,
      })
      if (response) {
        await response.wait()
        if (cb) cb()
      }
    } catch (error) {
      console.error('error', error)
      if (cb) cb()
    }
    return true
  }

  return (
    <WCampaignsClaimNft>
      <Container>
        <ClaimNftList campaign={campaign} listNftUser={listNftUser} onClaim={handleClaimReward} />
      </Container>
    </WCampaignsClaimNft>
  )
}

export default CampaignsClaimNft
