import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  display: block;
  color: ${({ isPushed, theme }) => (isPushed ? theme.colors.textSubtle : "transparent")};
  font-weight: ${({ isPushed }) => (isPushed ? "bold" : "default")};
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px 0 0" : "0 16px 0 0")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  color: ${({ theme }) => theme.colors.textSubtle};
  position: relative;
  font-weight: 500;

  a {
    font-weight: ${({ isActive }) => (isActive ? "bold" : "400")};
  }

  // left icon
  .w-icon {
    width: 46px;
    height: 35px;
    margin-right: 14px;
  }
  .w-sub-icon {
    width: 42px;
    height: 35px;
  }
  .w-icon,
  .w-sub-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .w-icon svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
  .w-sub-icon svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
  // active
  .w-icon.active,
  .w-sub-icon.active {
    width: 50px;
    height: 35px;

    background: #1eaab2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 10px 10px 10px;
    margin-right: 10px;
  }
  .w-sub-icon.active svg {
    fill: #1eaab2;
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradientBubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

export { MenuEntry, LinkLabelMemo as LinkLabel };
