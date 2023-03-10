import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: 'Home',
    href: '/home',
    target: '_blank',
    items: [],
  },
  {
    label: 'Service',
    href: '/service',
    target: '',
    items: [],
  },
  {
    label: 'About Us',
    href: 'https://linktr.ee/openlivenft.com',
    target: '_blank',
    items: [],
  },
  {
    label: 'Contact Us',
    href: '',
    target: '_blank',
    items: [],
  },
]
