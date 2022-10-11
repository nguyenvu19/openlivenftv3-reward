import { ReactNode } from 'react'
import styled from 'styled-components'
import { Card, Box, CardProps } from '@pancakeswap/uikit'
import DecorationShoppingCard from '../images/DecorationShoppingCard.png'

const StyledCard = styled(Card)<{ background: string; rotation?: string }>`
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  border: 1px solid #4f9aef;
  box-shadow: 6px 8px 4px rgba(0, 0, 0, 0.25);

  position: relative;
  overflow: unset;

  .decoration-bg {
    position: absolute;
    bottom: 0;
    right: -20px;
    opacity: 0.6;
    z-index: 1;
  }
  .card-body {
    min-height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > * {
      z-index: 2;
    }
  }
`

const IconWrapper = styled(Box)<{ rotation?: string }>`
  position: absolute;
  top: 14px;
  left: 14px;

  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

interface IconCardProps extends IconCardData, CardProps {
  children: ReactNode
}

export interface IconCardData {
  icon: ReactNode
  background?: string
  borderColor?: string
  rotation?: string
}

const IconCard: React.FC<React.PropsWithChildren<IconCardProps>> = ({
  icon,
  background,
  borderColor,
  rotation,
  children,
  ...props
}) => {
  return (
    <StyledCard background={background} borderBackground={borderColor} rotation={rotation} {...props}>
      <img className="decoration-bg" src={DecorationShoppingCard.src} alt="" />
      <div className="card-body">
        <IconWrapper rotation={rotation}>{icon}</IconWrapper>
        {children}
      </div>
    </StyledCard>
  )
}

export default IconCard
