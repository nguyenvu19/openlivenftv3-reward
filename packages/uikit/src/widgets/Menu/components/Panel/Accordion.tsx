import React, { ElementType, createElement, ReactNode, useContext, useState } from "react";
import styled from "styled-components";
import { LinkLabel, MenuEntry } from "./MenuEntry";
import { PushedProps } from "../../types";
import { MENU_ENTRY_HEIGHT } from "../../config";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../../../components/Svg";
import { MenuContext } from "../../context";
import { DropdownMenuItemType } from "../../../../components/DropdownMenu/types";

interface Props extends PushedProps {
  label: string;
  href?: string;
  type?: number;
  icon?: ElementType<any>;
  initialOpenState?: boolean;
  className?: string;
  isActive?: boolean;
  children?: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
  box-shadow: ${({ theme }) => `inset 46px 0px 0px ${theme.colors.primary}`};
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  border-style: solid;
  border-width: 1px 0;
  padding-left: 46px;
`;

const Accordion: React.FC<Props> = ({
  label,
  icon,
  href,
  type,
  isPushed,
  pushNav,
  initialOpenState = false,
  className,
  isActive,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  const { linkComponent } = useContext(MenuContext);

  const itemLinkProps: any = href
    ? {
        as: linkComponent,
        href,
        ...(type === DropdownMenuItemType.INTERNAL_LINK ? { target: "_blank" } : {}),
      }
    : {
        as: "div",
      };

  const Icon = icon;
  return (
    <Container>
      <MenuEntry className={className} isActive={isActive} onClick={handleClick}>
        <div className={`w-icon ${isActive ? "active" : ""}`}>
          {icon && createElement(Icon as any, { color: isActive ? "secondary" : "textSubtle" })}
        </div>
        <LinkLabel {...itemLinkProps} isPushed={isPushed}>
          {label}
        </LinkLabel>
        {children && <>{isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</>}
      </MenuEntry>
      {children && (
        <AccordionContent
          isOpen={isOpen}
          isPushed={isPushed}
          maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
        >
          {children}
        </AccordionContent>
      )}
    </Container>
  );
};

export default Accordion;
// export default React.memo(Accordion, (prev, next) => prev.isPushed === next.isPushed);
