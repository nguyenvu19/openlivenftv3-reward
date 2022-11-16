import React, { useContext } from "react";
import styled from "styled-components";
import EXTERNAL_LINK_PROPS from "../../util/externalLinkProps";
import { MenuContext } from "../../widgets/Menu/context";
import Text from "../Text/Text";
import { LinkProps } from "./types";

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  /* &:hover { 
    text-decoration: underline;
  } */
`;

const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ external, ...props }) => {
  const { linkComponent } = useContext(MenuContext);
  const internalProps = external ? EXTERNAL_LINK_PROPS : {};
  return <StyledLink as={linkComponent} bold {...internalProps} {...props} />;
};

/* eslint-disable react/default-props-match-prop-types */
Link.defaultProps = {
  color: "primary",
};

export default Link;
