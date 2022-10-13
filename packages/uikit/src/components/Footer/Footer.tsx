import React, { useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "../../widgets/Menu/context";
import { LinkLabelFooter } from "./styles";
import { FooterLinkType } from "./types";

const WFooter = styled.div`
  ul {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    width: 100%;
    list-style: none;
    margin: 0;

    li {
      padding: 20px;
    }
  }
`;

interface Props {
  footerLinks: FooterLinkType[];
}

const MenuItem: React.FC<Props> = ({ footerLinks }) => {
  const { linkComponent } = useContext(MenuContext);
  return (
    <WFooter>
      <ul>
        {footerLinks.map(({ href, label }) => {
          const itemLinkProps: any = href
            ? {
                as: linkComponent,
                href,
              }
            : {
                as: "div",
              };
          return (
            <li key={label}>
              <LinkLabelFooter {...itemLinkProps}>{label}</LinkLabelFooter>
            </li>
          );
        })}
      </ul>
    </WFooter>
  );
};

export default MenuItem;
