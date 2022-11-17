import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from '@pancakeswap/localization'
import Link from 'next/link'

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NotFound = ({ statusCode = 404 }: { statusCode?: number }) => {
  const { t } = useTranslation()

  return (
    <Page>
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        <Heading scale="xxl">{statusCode}</Heading>
        <Text mb="16px">{t('Oops, page not found.')}</Text>
        <Link href="/" passHref>
          <Button as="a" scale="sm">
            {t('Back Home')}
          </Button>
        </Link>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
