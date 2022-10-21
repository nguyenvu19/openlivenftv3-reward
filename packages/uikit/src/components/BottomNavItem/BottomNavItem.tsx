import React, { useContext } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import { Flex } from "../Box";
import AnimatedIconComponent from "../Svg/AnimatedIconComponent";
import { StyledBottomNavItem, StyledBottomNavText } from "./styles";
import { BottomNavItemProps } from "./types";

const BottomNavItem: React.FC<React.PropsWithChildren<BottomNavItemProps>> = ({
  label,
  icon,
  fillIcon,
  href,
  showItemsOnMobile = false,
  isActive = false,
  disabled = false,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const bottomNavItemContent = (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      style={{ position: "relative" }}
    >
      {icon && (
        <AnimatedIconComponent
          icon={icon}
          fillIcon={fillIcon}
          height="24px"
          width="24px"
          color="transparent"
          isActive={isActive}
        />
      )}
      {!isActive && (
        <StyledBottomNavText color="#fff" fontSize="10px" fontWeight="600">
          {label}
        </StyledBottomNavText>
      )}
    </Flex>
  );

  return showItemsOnMobile ? (
    <StyledBottomNavItem isActive={isActive} style={{ opacity: disabled ? 0.5 : 1 }} type="button" {...props}>
      {bottomNavItemContent}
    </StyledBottomNavItem>
  ) : (
    <StyledBottomNavItem
      isActive={isActive}
      style={{ opacity: disabled ? 0.5 : 1 }}
      as={linkComponent}
      href={href}
      {...props}
    >
      {bottomNavItemContent}
    </StyledBottomNavItem>
  );
};

export default BottomNavItem;
