import { ArrowBackIconBig, Flex, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { useContext } from 'react'
import { MenuContext } from '@pancakeswap/uikit/src/widgets/Menu/context'

const WBackLink = styled(Flex)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon-back {
    width: 8px;
    height: auto;
    margin-right: 12px;
    ${({ theme }) => theme.mediaQueries.md} {
      width: 12px;
    }
    ${({ theme }) => theme.mediaQueries.md} {
      width: 14px;
    }
  }
`
interface Props {
  href?: string
  showArrow?: boolean
  title?: React.ReactNode | string
  rightNode?: React.ReactNode
  target?: string
  [t: string]: any
}
const BackLink: React.FC<Props> = ({ href, showArrow, title, rightNode, target, ...props }) => {
  const { t } = useTranslation()
  const { linkComponent } = useContext(MenuContext)

  const isHttp = href?.startsWith('http')

  const itemLinkProps: any = isHttp
    ? {
        as: 'a',
        ...(href && { href }),
        ...(target && { target }),
      }
    : {
        as: href ? linkComponent : 'div',
        ...(href && { href }),
      }
  return (
    <WBackLink {...itemLinkProps} {...props}>
      <Flex alignItems="center">
        {showArrow && <ArrowBackIconBig className="icon-back" />}
        <Text color="#007CA2" fontSize={['16px', , '24px', '32px']} fontWeight="700">
          {title || t('Back')}
        </Text>
      </Flex>
      {rightNode}
    </WBackLink>
  )
}

export default BackLink
