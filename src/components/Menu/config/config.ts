import {
  MenuItemsType,
  DropdownMenuItemType,
  SwapIcon,
  FarmIcon,
  TokenInfoIcon,
  LiquidityIcon,
  MoreIcon,
  HomeIcon,
  StakingIcon,
  TradeIcon,
  CampaignIcon,
  MyNftIcon,
  MarketplaceIcon,
} from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
import { DropdownMenuItems } from '@pancakeswap/uikit/src/components/DropdownMenu/types'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Home'),
    icon: HomeIcon,
    fillIcon: HomeIcon,
    href: '/home',
    items: [],
    showItemsOnMobile: false,
  },
  {
    label: t('Campaigns'),
    icon: CampaignIcon,
    fillIcon: CampaignIcon,
    href: '/campaigns',
    items: [],
    showItemsOnMobile: false,
  },
  {
    label: t('Trade'),
    icon: TradeIcon,
    fillIcon: TradeIcon,
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
    ],
  },
  {
    label: t('Farms'),
    href: '/farms',
    icon: FarmIcon,
    fillIcon: FarmIcon,
    image: '/images/decorations/pe2.png',
    items: [],
    showItemsOnMobile: false,
  },
  {
    label: t('Staking'),
    href: '/staking',
    icon: StakingIcon,
    fillIcon: StakingIcon,
    image: '/images/decorations/pe2.png',
    items: [],
    hideOnMobile: true,
  },
  {
    label: t('My NFTs'),
    href: '/my-nfts',
    icon: MyNftIcon,
    fillIcon: MyNftIcon,
    image: '/images/decorations/pe2.png',
    items: [],
    hideOnMobile: true,
  },
  {
    label: t('Marketplace'),
    href: 'https://openlivenft.io/',
    icon: MarketplaceIcon,
    fillIcon: MarketplaceIcon,
    image: '/images/decorations/pe2.png',
    type: DropdownMenuItemType.EXTERNAL_LINK,
    items: [],
    hideOnMobile: true,
  },
  {
    label: t('Token Info'),
    href: '/token-info',
    icon: TokenInfoIcon,
    fillIcon: TokenInfoIcon,
    image: '/images/decorations/pe2.png',
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
