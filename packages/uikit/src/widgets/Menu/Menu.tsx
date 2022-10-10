import React, { useState } from "react";
import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import Footer from "../../components/Footer";
import { useMatchBreakpoints } from "../../contexts";
import CakePrice from "../../components/CakePrice/CakePrice";
import Logo from "./components/Logo";
import {
  MENU_HEIGHT,
  MOBILE_MENU_HEIGHT,
  SIDEBAR_WIDTH_FULL,
  SIDEBAR_WIDTH_REDUCED,
  TOP_BANNER_HEIGHT,
  TOP_BANNER_HEIGHT_MOBILE,
} from "./config";
import { NavProps } from "./types";
import LangSelector from "../../components/LangSelector/LangSelector";
import { MenuContext } from "./context";
import Panel from "./components/Panel/Panel";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  .linear-block-1 {
    position: absolute;
    pointer-events: none;
    top: 0;
    right: 0;
    width: 1200px;
    transform: translate(30%, -60%);
    animation: zoomInOut 42s linear infinite;
  }
  .linear-block-2 {
    position: absolute;
    pointer-events: none;
    bottom: -100px;
    left: 0;
    width: 1000px;
    transform: translate(-15%, 10%);
    animation: zoomInOut2 40s linear infinite;
  }
`;
const WrapperBody = styled.div`
  width: 100%;
  max-width: 1290px;
  margin: 0 auto;
  position: relative;
`;
const StyledNav = styled.nav`
  display: flex;
  align-items: flex-end;

  width: 100%;
  height: ${MENU_HEIGHT}px;
  border-bottom: 1px solid #069cc9; // ${({ theme }) => theme.colors.cardBorder};
  transform: translate3d(0, 0, 0);

  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
`;

const FixedContainer = styled.div<{ showMenu: boolean; height: number }>`
  position: absolute;
  top: ${({ showMenu, height }) => (showMenu ? 0 : `-${height}px`)};
  left: 0;
  transition: top 0.2s;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  z-index: 20;
`;

const TopBannerContainer = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
  min-height: ${({ height }) => `${height}px`};
  max-height: ${({ height }) => `${height}px`};
  width: 100%;
`;

const BodyWrapper = styled(Box)`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const Menu: React.FC<React.PropsWithChildren<NavProps>> = ({
  linkComponent = "a",
  banner,
  rightSide,
  isDark,
  toggleTheme,
  currentLang,
  setLang,
  cakePriceUsd,
  links,
  linksPanel,
  subLinks,
  footerLinks,
  activeItem,
  activeSubItem,
  langs,
  buyCakeLabel,
  children,
}) => {
  const { isMobile } = useMatchBreakpoints();
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu] = useState(true);

  const topBannerHeight = isMobile ? TOP_BANNER_HEIGHT_MOBILE : TOP_BANNER_HEIGHT;

  const totalTopMenuHeight = banner ? MENU_HEIGHT + topBannerHeight : MENU_HEIGHT;

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  // const subLinksWithoutMobile = subLinks?.filter((subLink) => !subLink.isMobileOnly);
  // const subLinksMobileOnly = subLinks?.filter((subLink) => subLink.isMobileOnly);

  return (
    <MenuContext.Provider value={{ linkComponent }}>
      <Wrapper>
        <img className="linear-block-1" src="/images2/linear-block.png " alt="" />
        <img className="linear-block-2" src="/images2/linear-block-1.png " alt="" />
        <WrapperBody>
          <FixedContainer showMenu={showMenu} height={totalTopMenuHeight}>
            {banner && <TopBannerContainer height={topBannerHeight}>{banner}</TopBannerContainer>}
            <StyledNav>
              <Flex width="100%" height="fit-content" alignItems="center" justifyContent="space-between">
                <Flex>
                  <Logo isDark={isDark} href={homeLink?.href ?? "/"} />
                </Flex>
                <Flex alignItems="center" height="100%">
                  {rightSide}
                  <Box mt="4px">
                    <LangSelector
                      currentLang={currentLang}
                      langs={langs}
                      setLang={setLang}
                      buttonScale="xs"
                      color="textSubtle"
                      hideLanguage
                    />
                  </Box>
                </Flex>
              </Flex>
            </StyledNav>
          </FixedContainer>
          <BodyWrapper pt={!subLinks ? `${totalTopMenuHeight + 30}px` : "0"}>
            {/* ========= Sidebar ========= */}
            <Panel
              isPushed={isPushed}
              isMobile={isMobile}
              showMenu={showMenu}
              isDark={isDark}
              toggleTheme={toggleTheme}
              langs={langs}
              setLang={setLang}
              currentLang={currentLang}
              cakePriceUsd={cakePriceUsd}
              pushNav={setIsPushed}
              linksPanel={linksPanel}
              activeItem={activeItem}
              activeSubItem={activeSubItem}
            />

            <Inner isPushed={isPushed} showMenu={showMenu}>
              {children}
              <Footer
                items={footerLinks}
                isDark={isDark}
                toggleTheme={toggleTheme}
                langs={langs}
                setLang={setLang}
                currentLang={currentLang}
                cakePriceUsd={cakePriceUsd}
                buyCakeLabel={buyCakeLabel}
                mb={[`${MOBILE_MENU_HEIGHT}px`, null, "0px"]}
              />
            </Inner>
          </BodyWrapper>
          {isMobile && <BottomNav items={links} activeItem={activeItem} activeSubItem={activeSubItem} />}
        </WrapperBody>
      </Wrapper>
    </MenuContext.Provider>
  );
};

export default Menu;
