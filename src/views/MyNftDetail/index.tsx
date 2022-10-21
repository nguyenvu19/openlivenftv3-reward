import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Button, Flex, Heading, Skeleton } from '@pancakeswap/uikit'
import BackLink from 'components/BackLink'
import Container from 'components/Layout/Container'
import { useTranslation } from '@pancakeswap/localization'
import { useOpvNftDetail } from 'state/nfts/hooks'
import CardNftDetailVertical from './components/CardNftDetailVetical'
import NftClaimHistory from './components/NftClaimHistory'
import NftTransferHistory from './components/NftTransferHistory'

const WCardNftDetailPage = styled.div`
  padding-bottom: 120px;
  .icon-back {
    height: 16px;
    margin-right: 8px;
    color: #007ca1;
    ${({ theme }) => theme.mediaQueries.md} {
      height: 22px;
      margin-right: 16px;
    }
    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 0.8;
      transform: translateY(1);
    }
  }
`
const MyNftH2 = styled(Heading)`
  font-size: 16px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 32px;
  }
`

const CardNftDetailPage: React.FC<React.PropsWithChildren> = () => {
  const { query } = useRouter()
  const { t } = useTranslation()

  const { myNftDetail } = useOpvNftDetail(query?.nft_id?.[0])

  return (
    <WCardNftDetailPage>
      <Container mb="24px">
        <BackLink
          showArrow
          href="/my-nfts"
          title={
            <Flex alignItems="center">
              {t('NFT Detail')}
              {myNftDetail ? (
                <Button scale="sm" ml="10px" fontSize={['13px', , '20px']} height={['26px', , '32px']}>
                  ID: {myNftDetail.tokenId}
                </Button>
              ) : (
                <Skeleton width="50px" ml="10px" />
              )}
            </Flex>
          }
        />
      </Container>

      <Container>
        <CardNftDetailVertical myNftDetail={myNftDetail} />
      </Container>

      <Container>
        <Heading textAlign="left" scale="xl" m={['32px 0 12px 0 ', , '32px 0 32px 0']}>
          <MyNftH2 scale="lg" color="#007CA2">
            {t('Claim History')}
          </MyNftH2>
        </Heading>
        <NftClaimHistory tokenId={query?.nft_id?.[0]} />
      </Container>

      <Container>
        <Heading textAlign="left" scale="xl" m={['32px 0 12px 0 ', , '32px 0 32px 0']}>
          <MyNftH2 scale="lg" color="#007CA2">
            {t('Transfer History')}
          </MyNftH2>
        </Heading>
        <NftTransferHistory tokenId={query?.nft_id?.[0]} />
      </Container>
    </WCardNftDetailPage>
  )
}

export default CardNftDetailPage
