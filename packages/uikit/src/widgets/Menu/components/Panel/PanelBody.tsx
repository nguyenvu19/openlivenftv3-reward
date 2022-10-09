import React from "react";
import styled from "styled-components";
import * as IconModule from "../../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import Attach from "./Attach";
import { PanelProps, PushedProps } from "../../types";
import { SvgProps } from "../../../../components/Svg";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const ImportIcons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;

  background: #eefbff;
  border: 0.25px solid #0aadad;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const BlockIcon = styled.div`
  position: absolute;
  top: 7px;
  left: 50%;
  font-size: 10px;
  color: #fc0909;
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, linksPanel }) => {
  const location = {};

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {linksPanel.map((entry) => {
        // const isImg = entry.icon.endsWith('.png') || entry.icon.endsWith('.jpg');
        const Icon = ImportIcons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
          const itemActive = entry.items.some((item) => item.href === location.pathname);

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              // className={calloutClass}
              isActive={itemActive}
            >
              {isPushed &&
                entry.items.map((item, index) => (
                  <MenuEntry
                    // eslint-disable-next-line react/no-array-index-key
                    key={`children-${item.href}-${index}`}
                    secondary
                    isActive
                    onClick={handleClick}
                  >
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname}>
            <MenuLink href={entry.href} onClick={handleClick} target={entry.target}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
              {isPushed && <BlockIcon>{entry.att && <Attach att={entry.att} />}</BlockIcon>}
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
