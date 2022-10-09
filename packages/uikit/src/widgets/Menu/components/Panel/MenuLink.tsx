import React, { AnchorHTMLAttributes, useContext } from "react";
import StyledMenuItem from "../../../../components/MenuItem/styles";
import { MenuContext } from "../../context";

const MenuLink: React.FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, children, ...props }) => {
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
    <StyledMenuItem {...itemLinkProps} $isActive $isDisabled $variant $statusColor {...props}>
      {children}
    </StyledMenuItem>
  );
};

export default MenuLink;
