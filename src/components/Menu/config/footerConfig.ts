import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: 'Dashboard',
    href: '/dashboard',
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
    href: '',
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
