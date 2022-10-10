import React, { useContext } from "react";
import styled from "styled-components";
import { MenuItemProps } from "../../../../components/MenuItem/types";
import { MenuContext } from "../../context";
import { StyledPanelItemProps } from "../../types";

const StyledMenuItem = styled.a<StyledPanelItemProps>`
  position: relative;
  display: flex;
  align-items: center;

  padding: 0px;
  height: 42px;

  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};

  ${({ $statusColor, theme }) =>
    $statusColor &&
    ` 
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}/* &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
    ${({ $variant }) => $variant === "default" && "border-radius: 16px;"};
  } */
`;

const MenuLink: React.FC<React.PropsWithChildren<MenuItemProps>> = ({
  href,
  isActive = false,
  isDisabled = false,
  children,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const itemLinkProps: any = href
    ? {
        as: linkComponent,
        href,
      }
    : {
        as: "div",
      };

  return (
    <StyledMenuItem {...itemLinkProps} $isActive={isActive} $isDisabled={isDisabled} $statusColor {...props}>
      {children}
    </StyledMenuItem>
  );
};

export default MenuLink;
