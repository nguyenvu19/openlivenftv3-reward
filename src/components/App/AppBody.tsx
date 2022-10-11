import styled from 'styled-components'

export const BodyWrapper = styled.div`
  width: 100%;
  z-index: 1;

  padding: 0 0 100px;
  background: #eefbff;
  border-radius: 30px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 20px 40px 60px;
  }

  & > div {
    max-width: 650px;
    margin: 0 auto;
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return (
    <BodyWrapper>
      <div>{children}</div>
    </BodyWrapper>
  )
}
