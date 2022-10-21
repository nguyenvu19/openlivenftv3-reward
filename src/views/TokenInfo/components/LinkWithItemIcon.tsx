import { Tooltip } from 'antd'
import { space, SpaceProps } from 'styled-system'
import styled from 'styled-components'
import { Button, Link, Text } from '@pancakeswap/uikit'

const WTokensInfo = styled.div`
  ${space}
`
interface Props extends SpaceProps {
  title: string
  href?: string
  leftNode?: React.ReactNode
  rightNode?: React.ReactNode
  dropdownContent?: React.ReactNode
}
const LinkWithItemIcon: React.FC<Props> = ({ title, href, leftNode, rightNode, dropdownContent, ...props }) => {
  const ButtonItem = (
    <Button className="button-social" height="32px" padding="6px 12px">
      {leftNode}
      <Text fontSize={[12, , 14]} fontWeight="600" color="#000000">
        {title}
      </Text>
      {rightNode}
    </Button>
  )
  return (
    <WTokensInfo {...props}>
      {dropdownContent ? (
        <Tooltip color="#fff" placement="bottom" title={dropdownContent}>
          {ButtonItem}
        </Tooltip>
      ) : (
        <Link external href={href} style={{ textDecoration: 'none' }}>
          {ButtonItem}
        </Link>
      )}
    </WTokensInfo>
  )
}

export default LinkWithItemIcon
