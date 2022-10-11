import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  SwapFillIcon,
  EarnFillIcon,
  EarnIcon,
  LiquidityIcon,
  MoreIcon,
  HomeIcon,
  TradeIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { perpLangMap } from 'utils/getPerpetualLanguageCode'
import { perpTheme } from 'utils/getPerpetualTheme'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'
import { SUPPORT_ONLY_BSC } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode) => [
  {
    label: t('Home'),
    icon: HomeIcon,
    fillIcon: SwapFillIcon,
    href: '/home',
    items: [],
    showItemsOnMobile: false,
  },
  {
    label: t('Campaigns'),
    icon: HomeIcon,
    fillIcon: SwapFillIcon,
    href: '/campaigns',
    items: [],
    showItemsOnMobile: false,
  },
  {
    label: t('Trade'),
    icon: TradeIcon,
    fillIcon: SwapFillIcon,
    href: '/swap',
    items: [
      {
        label: t('Swap'),
        icon: SwapIcon,
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        icon: LiquidityIcon,
        href: '/liquidity',
      },
      // {
      //   label: t('Limit'),
      //   icon: SwapIcon,
      //   href: '/limit-orders',
      //   supportChainIds: SUPPORT_ONLY_BSC,
      //   image: '/images/decorations/3d-coin.png',
      // },
      // {
      //   label: t('Perpetual'),
      //   icon: SwapIcon,
      //   href: `https://perp.pancakeswap.finance/${perpLangMap(languageCode)}/futures/BTCUSDT?theme=${perpTheme(
      //     isDark,
      //   )}`,
      //   supportChainIds: SUPPORT_ONLY_BSC,
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
      // {
      //   label: t('Bridge'),
      //   icon: SwapIcon,
      //   href: 'https://bridge.pancakeswap.finance/',
      //   type: DropdownMenuItemType.EXTERNAL_LINK,
      // },
    ],
  },
  {
    label: t('Farms'),
    href: '/farms',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    image: '/images/decorations/pe2.png',
    supportChainIds: SUPPORT_ONLY_BSC,
    items: [],
    showItemsOnMobile: false,
  },
  {
    label: t('Staking'),
    href: '/staking',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    image: '/images/decorations/pe2.png',
    supportChainIds: SUPPORT_ONLY_BSC,
    items: [],
    hideOnMobile: true,
  },
  {
    label: t('My NFTs'),
    href: '/my-nfts',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    image: '/images/decorations/pe2.png',
    supportChainIds: SUPPORT_ONLY_BSC,
    items: [],
    hideOnMobile: true,
  },
  {
    label: t('Marketplace'),
    href: '/marketplace',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    image: '/images/decorations/pe2.png',
    supportChainIds: SUPPORT_ONLY_BSC,
    items: [],
    hideOnMobile: true,
  },
  {
    label: t('Token Info'),
    href: '/token-info',
    icon: EarnIcon,
    fillIcon: EarnFillIcon,
    image: '/images/decorations/pe2.png',
    supportChainIds: SUPPORT_ONLY_BSC,
    items: [],
    hideOnMobile: true,
  },
  {
    label: '',
    href: '/staking',
    icon: MoreIcon,
    items: [
      {
        label: t('Staking'),
        href: '/staking',
      },
      {
        label: t('My NFTs'),
        href: '/my-nfts',
      },
      {
        label: t('Marketplace'),
        href: '/marketplace',
      },
      {
        label: t('Token Info'),
        href: '/token-info',
      },
    ],
  },
]

export default config
