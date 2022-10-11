/* eslint-disable @typescript-eslint/no-explicit-any */
import { ElementType } from "react";
import { BoxProps } from "../Box";
import { DropdownMenuItems } from "../DropdownMenu/types";

export type MenuItemsType = {
  label: string;
  href: string;
  type?: number;
  icon?: ElementType<any>;
  fillIcon?: ElementType<any>;
  items?: DropdownMenuItems[];
  disabled?: boolean;
  showOnMobile?: boolean;
  hideOnMobile?: boolean;
  showItemsOnMobile?: boolean;
};

export interface MenuItemsProps extends BoxProps {
  items: MenuItemsType[];
  activeItem?: string;
  activeSubItem?: string;
}
