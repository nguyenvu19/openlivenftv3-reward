import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { DEFAULT_META, getCustomMeta } from 'config/constants/meta'
import Container from './Container'

const StyledPage = styled(Container)`
  min-height: calc(100vh - 130px - 64px);
  padding-bottom: 50px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-bottom: 32px;
  }
`

export const PageMeta: React.FC<React.PropsWithChildren<{ symbol?: string }>> = () => {
  const {
    t,
    currentLanguage: { locale },
  } = useTranslation()
  const { pathname } = useRouter()

  const pageMeta = getCustomMeta(pathname, t, locale) || {}
  const { title, description, image } = { ...DEFAULT_META, ...pageMeta }

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  )
}

interface PageProps extends React.HTMLAttributes<HTMLDivElement> {
  symbol?: string
}

const Page: React.FC<React.PropsWithChildren<PageProps>> = ({ children, symbol, ...props }) => {
  return (
    <>
      <PageMeta symbol={symbol} />
      <StyledPage {...props}>{children}</StyledPage>
    </>
  )
}

export default Page
