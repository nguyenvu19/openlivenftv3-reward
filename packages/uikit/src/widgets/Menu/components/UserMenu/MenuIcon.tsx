import React from "react";
import styled from "styled-components";
import { Image } from "../../../../components/Image";
import { RefreshIcon, WalletFilledIcon, WarningIcon } from "../../../../components/Svg";
import { Colors } from "../../../../theme/types";

const MenuIconWrapper = styled.div<{ borderColor: keyof Colors }>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-color: ${({ theme, borderColor }) => theme.colors[borderColor]};
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: center;
  width: 52px;
  height: 52px;
  z-index: 102;
`;

const ProfileIcon = styled(Image)`
  left: 0;
  position: absolute;
  top: 0;
  z-index: 102;

  & > img {
    border-radius: 50%;
  }
`;

export const NoProfileMenuIcon: React.FC<React.PropsWithChildren> = () => (
  <MenuIconWrapper borderColor="primary">
    <WalletFilledIcon color="primary" width="24px" />
  </MenuIconWrapper>
);

export const PendingMenuIcon: React.FC<React.PropsWithChildren> = () => (
  <MenuIconWrapper borderColor="secondary">
    <RefreshIcon color="secondary" width="24px" spin />
  </MenuIconWrapper>
);

export const WarningMenuIcon: React.FC<React.PropsWithChildren> = () => (
  <MenuIconWrapper borderColor="warning">
    <WarningIcon color="warning" width="24px" />
  </MenuIconWrapper>
);

export const DangerMenuIcon: React.FC<React.PropsWithChildren> = () => (
  <MenuIconWrapper borderColor="failure">
    <WarningIcon color="failure" width="24px" />
  </MenuIconWrapper>
);

const MenuIcon: React.FC<React.PropsWithChildren<{ avatarSrc?: string }>> = ({ avatarSrc }) => {
  if (!avatarSrc) {
    return <NoProfileMenuIcon />;
  }

  return <ProfileIcon src={avatarSrc} height={32} width={32} />;
};

export default MenuIcon;
