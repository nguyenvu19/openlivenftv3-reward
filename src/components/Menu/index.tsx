import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { Menu as UikitMenu } from '@pancakeswap/uikit'
import { useTranslation, languageList } from '@pancakeswap/localization'
import PhishingWarningBanner from 'components/PhishingWarningBanner'
import { NetworkSwitcher } from 'components/NetworkSwitcher'
import useTheme from 'hooks/useTheme'
import { useCakeBusdPrice } from 'hooks/useBUSDPrice'
import { usePhishingBannerManager } from 'state/user/hooks'
import UserMenu from './UserMenu'
import { useMenuItems } from './hooks/useMenuItems'
import GlobalSettings from './GlobalSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'
import { SettingsMode } from './GlobalSettings/types'

export const linksPanel = [
  // {
  //   label: "POOLS",
  //   icon: "PoolIcon",
  //   href: "#",
  //   att: "SOON",
  //   initialOpenState: true,
  //   calloutClass: 'rainbow',
  // },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
    calloutClass: 'rainbow',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Earning',
    icon: 'EarningIcon',
    att: 'SOON',
    href: '#',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    att: 'iconHot',
    href: '#',
  },
  {
    label: 'HORA Gallery',
    icon: 'GalleryIcon',
    att: 'SOON',
    href: '#',
  },
  {
    label: 'Sport NFT',
    icon: 'SpotIcon',
    href: '#',
  },
  {
    label: 'Launchpad',
    icon: 'LaunchpadIcon',
    att: 'SOON',
    href: '#',
  },
  {
    label: 'Gamification',
    icon: 'GamificationIcon',
    att: 'iconHot',
    href: '#',
  },
  {
    label: 'ETH2.0',
    icon: 'ETH2Icon',
    att: 'SOON',
    href: '#',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    att: 'SOON',
    href: '#',
  },
  {
    label: 'Contact',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Twitter',
        href: '#',
      },
      {
        label: 'Medium',
        href: '#',
      },
      {
        label: 'Telegram',
        href: '#',
      },
    ],
  },
]

const Menu = (props) => {
  const { isDark, setTheme } = useTheme()
  const cakePriceUsd = useCakeBusdPrice({ forceMainnet: true })
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useRouter()
  const [showPhishingWarningBanner] = usePhishingBannerManager()

  const menuItems = useMenuItems()

  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? 'light' : 'dark')
  }, [setTheme, isDark])

  const getFooterLinks = useMemo(() => {
    return footerLinks(t)
  }, [t])

  return (
    <>
      <UikitMenu
        linkComponent={(linkProps) => {
          return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
        }}
        rightSide={
          <>
            {/* <GlobalSettings mode={SettingsMode.GLOBAL} /> */}
            <NetworkSwitcher />
            <UserMenu />
          </>
        }
        // banner={showPhishingWarningBanner && typeof window !== 'undefined' && <PhishingWarningBanner />}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={currentLanguage.code}
        langs={languageList}
        setLang={setLanguage}
        cakePriceUsd={cakePriceUsd}
        links={menuItems}
        linksPanel={linksPanel}
        // subLinks={activeMenuItem?.hideSubNav || activeSubMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
        footerLinks={getFooterLinks}
        activeItem={activeMenuItem?.href}
        activeSubItem={activeSubMenuItem?.href}
        buyCakeLabel={t('Buy CAKE')}
        {...props}
      />
    </>
  )
}

export default Menu
