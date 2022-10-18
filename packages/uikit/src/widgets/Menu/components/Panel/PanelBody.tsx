import React, { createElement } from "react";
import styled from "styled-components";
import Accordion from "./Accordion";
import { MenuEntry } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../../types";
import { Box } from "../../../../components/Box";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background: #eefbff;
  border: 0.25px solid #0aadad;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const SpaceFooter = styled(Box)`
  height: "200px";
  box-shadow: ${({ theme }) => `inset 46px 0px 0px ${theme.colors.primary}`};
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, linksPanel, activeItem, activeSubItem }) => {
  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  const menuOnDesktop = linksPanel.filter((item) => item.label);

  return (
    <Container>
      {menuOnDesktop.map(({ label, href, icon, type, ...entry }) => {
        const isActive = activeItem === href;
        if (entry.items && entry.items.length > 0) {
          return (
            <Accordion
              key={label}
              icon={icon}
              label={label}
              href={href}
              type={type}
              isActive={isActive}
              isPushed={isPushed}
              initialOpenState={isActive}
              pushNav={pushNav}
            >
              {isPushed &&
                entry.items.map((item, index) => {
                  const isActiveSubItem = activeSubItem === item.href;
                  const SubIcon = item.icon;

                  return (
                    <MenuEntry
                      // eslint-disable-next-line react/no-array-index-key
                      key={`children-${item.href}-${index}`}
                      secondary
                      isActive={isActiveSubItem}
                      onClick={handleClick}
                    >
                      <div className="w-sub-icon">
                        {item.icon &&
                          createElement(SubIcon as any, { color: isActiveSubItem ? "secondary" : "textSubtle" })}
                      </div>
                      <MenuLink type={item.type} href={item.href}>
                        {item.label}
                      </MenuLink>
                    </MenuEntry>
                  );
                })}
            </Accordion>
          );
        }
        return (
          <Accordion
            key={label}
            icon={icon}
            label={label}
            href={href}
            type={type}
            isActive={isActive}
            isPushed={isPushed}
            pushNav={pushNav}
          />
        );
      })}

      <SpaceFooter height="140px" />
    </Container>
  );
};

export default PanelBody;
