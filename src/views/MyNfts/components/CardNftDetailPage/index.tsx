import { ArrowBackIconBig, Button, Flex, Heading } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useTranslation } from '@pancakeswap/localization'
import CardNftDetailVertical from './CardNftDetailVetical'
import HistoryTableNftDetail from './HistoryTableNftDetail'

const CardNftDetailPage: React.FC<React.PropsWithChildren> = () => {
  const router = useRouter()
  const { t } = useTranslation()

  const MyNftH2 = styled(Heading)`
    font-size: 16px;
    ${({ theme }) => theme.mediaQueries.sm} {
      font-size: 32px;
    }
  `

  return (
    <>
      <Container>
        <Flex display="flex" alignItems="center" mb="32px">
          <ArrowBackIconBig
            onClick={() => router.push('/my-nfts')}
            className="icon-back"
            color="#007CA1"
            height="22px"
            mr="16px"
            cursor="pointer"
          />
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
        <HistoryTableNftDetail />
      </Container>
    </>
  )
}

export default CardNftDetailPage
