import styled from "styled-components";
import { Text } from "../Text";

export const StyledBottomNavItem = styled.button<{ isActive?: boolean }>`
  display: block;
  border: 0;
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding: 4px 12px;
  background: ${({ isActive }) => (isActive ? "#005E6B" : "transparent")};
  box-shadow: ${({ isActive }) => (isActive ? "0px 3px 4px rgba(0, 0, 0, 0.5)" : "unset")};
  border-radius: 50%;
`;

export const StyledBottomNavText = styled(Text)`
  position: absolute;
  top: 34px;
  left: 50%;
  transform: translateX(-50%);

  white-space: nowrap;
  display: -webkit-box;
  overflow: hidden;
  user-select: none;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
`;
