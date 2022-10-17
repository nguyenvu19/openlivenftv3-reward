import { ArrowBackIconBig, Button, Flex, Heading, Skeleton } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useTranslation } from '@pancakeswap/localization'
import { useOpvNftDetail } from 'state/nfts/hooks'
import CardNftDetailVertical from './components/CardNftDetailVetical'
import NftClaimHistory from './components/NftClaimHistory'
import NftTransferHistory from './components/NftTransferHistory'

const WCardNftDetailPage = styled.div`
  padding-bottom: 50px;
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
  const { push, query } = useRouter()
  const { t } = useTranslation()

  const { myNftDetail } = useOpvNftDetail(query?.nft_id?.[0])

  return (
    <WCardNftDetailPage>
      <Container>
        <Flex
          style={{ cursor: 'pointer' }}
          display="flex"
          alignItems="center"
          mb={['24px', , '32px']}
          onClick={() => push('/my-nfts')}
        >
          <ArrowBackIconBig className="icon-back" />
          <Heading textAlign="left" scale="xl" mr="16px">
            <MyNftH2 scale="lg" color="#007CA2">
              {t('NFT Detail')}
            </MyNftH2>
          </Heading>
          {myNftDetail ? <Button scale="sm">ID: {myNftDetail.tokenId}</Button> : <Skeleton width="50px" />}
        </Flex>
      </Container>

      <Container>
        <CardNftDetailVertical myNftDetail={myNftDetail} />
      </Container>

      <Container>
        <Heading textAlign="left" scale="xl" mb="32px" mt="32px">
          <MyNftH2 scale="lg" color="#007CA2">
            {t('Claim History')}
          </MyNftH2>
        </Heading>
        <NftClaimHistory tokenId={query?.nft_id?.[0]} />
      </Container>

      <Container>
        <Heading textAlign="left" scale="xl" mb="32px" mt="32px">
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
