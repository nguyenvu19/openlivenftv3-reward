import { ArrowBackIconBig, Button, Flex, Heading, useMatchBreakpoints } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useTranslation } from '@pancakeswap/localization'
import CardNftDetailVertical from './CardNftDetailVetical'
import HistoryTableNftDetail from './HistoryTableNftDetail'
import HistoryTableNftDetailMobile from './HistoryTableNftDetailMobile'

const CardNftDetailPage: React.FC<React.PropsWithChildren> = () => {
  const router = useRouter()
  const { t } = useTranslation()
  const { isMobile } = useMatchBreakpoints()

  const WCardNftDetailPage = styled.div`
    .icon-back {
      height: 16px;
      margin-right: 8px;
      color: #007ca1;
      cursor: pointer;
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

  return (
    <>
      <WCardNftDetailPage>
        <Container>
          <Flex display="flex" alignItems="center" mb="32px">
            <ArrowBackIconBig onClick={() => router.push('/my-nfts')} className="icon-back" />
            <Heading textAlign="left" scale="xl" mr="16px">
              <MyNftH2 scale="lg" color="#007CA2">
                {t('NFT Detail')}
              </MyNftH2>
            </Heading>
            <Button scale="sm">ID.1</Button>
          </Flex>
        </Container>

        <Container>
          <CardNftDetailVertical />
        </Container>

        <Container>
          <Heading textAlign="left" scale="xl" mb="32px" mt="32px">
            <MyNftH2 scale="lg" color="#007CA2">
              {t('Activities')}
            </MyNftH2>
          </Heading>
          {isMobile ? <HistoryTableNftDetailMobile /> : <HistoryTableNftDetail />}
        </Container>
      </WCardNftDetailPage>
    </>
  )
}

export default CardNftDetailPage
