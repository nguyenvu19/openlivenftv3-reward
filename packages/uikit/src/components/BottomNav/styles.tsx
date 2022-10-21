import styled from "styled-components";
import { Flex } from "../Box";

const StyledBottomNav = styled(Flex)`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 0 24px 8px 8px;
  background: #3bbbbd;
  z-index: 20;

  & > .nav-menu-content {
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;

    overflow-x: auto;
    /* overflow-y: hidden; */

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }

    & > div:not(.right-arrow-menu) {
      margin-right: 20px;
    }
  }

  .right-arrow-menu {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    div {
      border-width: 8px;
      border-style: solid;
      border-color: transparent transparent transparent #ffffff;
    }
  }
`;

export default StyledBottomNav;
