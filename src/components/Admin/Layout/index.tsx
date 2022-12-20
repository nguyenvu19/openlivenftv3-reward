/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import React, { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { DollarOutlined, GroupOutlined, HomeOutlined, MenuOutlined } from '@ant-design/icons'
import { Layout, Menu, MenuProps, Space, Spin } from 'antd'
import styled from 'styled-components'
import BreadCrumbs from 'components/BreadCrumbs'

import { useGetOwnerStaking, useGetOwnerContract } from 'state/admin/hook'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import ConnectWalletButton from 'components/ConnectWalletButton'
import UserMenu from '../../Menu/UserMenu'
import TotalBalance from '../../Menu/UserMenu/Totalbalance'
import { useMatchBreakpoints } from '../../../../packages/uikit/src/contexts'

const { Header, Sider, Content } = Layout

const WAdminLayout = styled.div`
  font-family: Roboto, sans-serif;

  .logo {
    height: 70px;
    background: rgba(0, 0, 0, 0.3);
    padding: 0;
    margin: 0px;
    text-align: center;
    overflow: hidden;
    border-radius: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${({ theme }) => theme.mediaQueries.sm} {
      padding: 0 10px;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .ant-menu-root {
    background-color: #2d3446;
    height: 100%;
    padding: 35px 0;
  }

  .anticon {
    margin-right: 20px;
  }

  .ant-menu-item {
    margin: 0;

    .ant-menu-item-active {
      color: #fff;
    }
  }

  .ant-menu-title-content {
    margin-left: 22px;
  }

  .ant-menu-sub {
    .ant-menu-item-active {
      span {
        color: #fff;
      }
    }
    .ant-menu-item-selected {
      span {
        color: #fff;
      }
    }
  }

  .ant-menu-sub {
    .ant-menu-item-selected {
      background-color: rgba(0, 0, 0, 4) !important;
    }
  }

  .ant-menu-item-only-child {
    background-color: #00000000 !important;
    color: rgb(120, 129, 149) !important;
    margin: 0 !important;
  }

  .ant-layout-header {
    height: 70px;
    background-color: #fff;
  }

  .ant-layout-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .ant-btn {
      border-radius: 50%;
      border: none;

      .anticon-user {
        width: 40px;
        height: 40px;
      }
    }
  }

  .ant-layout-content {
    padding: 20px 20px 0px !important;
    margin: 0 0 -32px 0 !important;

    .ant-breadcrumb {
      ol {
        li:first-child {
          display: none;
        }
      }
    }
  }

  .ant-layout-sider-collapsed {
    width: 0;
    min-width: 0 !important;
    max-width: 0 !important;
    flex: 0 0 0 !important;

    ${({ theme }) => theme.mediaQueries.sm} {
      width: 80px;
      min-width: 80px !important;
      max-width: 80px !important;
      flex: 0 0 80px !important;
    }

    li {
      a {
        p {
          display: none;
        }
      }
    }
  }

  .header-admin-right {
    line-height: 1.5;

    .ant-space-item:last-child {
      > div {
        > div:last-child {
          position: absolute;
          inset: 0px 0px auto auto;
          transform: translate(-31px, 61px) !important;
        }
      }
    }
  }
`
const RequireLoginStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const WMenuStyled = styled.div`
  list-style: none;

  background-color: #2d3446;
  height: 100%;
  padding: 45px 0;
  display: none;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: flex;
    flex-direction: column;
  }

  li {
    padding: 12px 24px;
    margin-bottom: 8px;

    &.active {
      padding-left: 24px;
      background-color: rgba(0, 0, 0, 4);
      display: flex;
      color: #fff;
      align-items: center;
      transition: border-color 0.3s, background 0.3s, padding 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);

      a {
        color: #fff;
      }
    }

    a {
      color: rgb(120, 129, 149);
      display: flex;
      align-items: center;
      flex-direction: row;
      &:hover {
        color: #fff;
      }

      span {
        margin-left: 10px;
      }

      p {
        margin-left: 22px;
      }
    }
  }
`

interface MenuItemType {
  key: string
  label: string
  icon: ReactElement
}

export const getActiveMenuItem = ({ pathname, menuConfig }: { pathname: string; menuConfig: MenuItemType[] }) => {
  if (pathname === '/admin') {
    return menuConfig.find((menuItem) => pathname.startsWith(menuItem.key))
  }
  return menuConfig.slice(1).find((menuItem) => pathname.startsWith(menuItem.key))
}

const items: MenuItemType[] = [
  {
    key: '/admin',
    label: 'Admin',
    icon: <HomeOutlined />,
  },
  {
    key: '/admin/campaigns',
    label: 'Campaigns',
    icon: <GroupOutlined />,
  },
  {
    key: '/admin/pool',
    label: 'Pool',
    icon: <DollarOutlined />,
  },
]

const AdminLayout = ({ children }: any) => {
  const router = useRouter()
  const { account } = useActiveWeb3React()

  const { ownerStake } = useGetOwnerStaking()
  const { ownerContract } = useGetOwnerContract()

  const [collapsed, setCollapsed] = useState(false)

  const { isMobile, isTablet } = useMatchBreakpoints()
  const activeMenuItem = getActiveMenuItem({ menuConfig: items, pathname: router.pathname })
  const [isOwner, setIsOwner] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    switch (router.pathname) {
      case '/admin':
        if (ownerContract || ownerStake) {
          setIsOwner(
            account?.toLowerCase() === ownerContract?.toLowerCase() ||
              account?.toLowerCase() === ownerStake?.toLowerCase(),
          )

          setLoading(false)
        }
        break

      case '/admin/campaigns':
        if (ownerContract) {
          setIsOwner(account?.toLowerCase() === ownerContract?.toLowerCase())
          setLoading(false)
        }
        break

      case '/admin/pool':
        if (ownerStake) {
          setIsOwner(account?.toLowerCase() === ownerStake?.toLowerCase())
          setLoading(false)
        }
        break

      default:
        break
    }
  }, [account, ownerContract, ownerStake, router])

  if (loading) {
    return (
      <RequireLoginStyled>
        <Spin />
      </RequireLoginStyled>
    )
  }
  if (!account) {
    return (
      <RequireLoginStyled>
        <ConnectWalletButton />
      </RequireLoginStyled>
    )
  }
  if (!isOwner) {
    return <RequireLoginStyled>You do not have access to this site</RequireLoginStyled>
  }
  return (
    <WAdminLayout>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={isMobile || isTablet ? !collapsed : collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={240}
        >
          <div className="logo">
            <Link href="/admin">
              <a>
                <img src="/logo-text.png" alt="logo" />
              </a>
            </Link>
          </div>

          <WMenuStyled>
            {items.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.key} className={activeMenuItem.key === item.key ? `active` : ''}>
                  <Link href={`${item.key}`}>
                    <a>
                      {Icon}
                      <p>{item.label}</p>
                    </a>
                  </Link>
                </li>
              )
            })}
          </WMenuStyled>
        </Sider>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: '0 31px' }}>
            <div className="header-admin-left">
              {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </div>

            <div className="header-admin-right">
              <Space size={16}>
                <TotalBalance />
                <UserMenu />
              </Space>
            </div>
          </Header>

          {/* Content child */}
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <BreadCrumbs />
            {children}
          </Content>
        </Layout>
      </Layout>
    </WAdminLayout>
  )
}

export default AdminLayout
