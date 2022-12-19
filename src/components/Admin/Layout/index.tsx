import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { DollarOutlined, GroupOutlined, HomeOutlined, MenuOutlined } from '@ant-design/icons'
import { Layout, Menu, MenuProps, Space, Spin } from 'antd'
import styled from 'styled-components'
import BreadCrumbs from 'components/BreadCrumbs'

import { useGetOwner } from 'state/admin/hook'
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
  }

  .header-admin-right {
    line-height: 1.5;
  }
`
const RequireLoginStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

type MenuItem = Required<MenuProps>['items'][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Admin', '/admin', <HomeOutlined />),
  getItem('Campaigns', '/admin/campaigns', <GroupOutlined />),
  getItem('Pool', '/admin/pool', <DollarOutlined />),
]

const userMenu = (
  <Space size={16}>
    <TotalBalance />
    <UserMenu />
  </Space>
)

const AdminLayout = ({ children }: any) => {
  const router = useRouter()
  const { account } = useActiveWeb3React()
  const { owner } = useGetOwner()

  const [collapsed, setCollapsed] = useState(false)

  const { isMobile, isTablet } = useMatchBreakpoints()

  if (!owner) {
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
  if (account?.toLowerCase() !== owner?.toLowerCase()) {
    return <RequireLoginStyled>You do not have access to this site</RequireLoginStyled>
  }
  return (
    <WAdminLayout>
      <Layout style={{ minHeight: '100vh' }}>
        {/* Sidebar */}

        <Sider
          trigger={null}
          collapsible
          collapsed={isMobile || isTablet ? !collapsed : collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={240}
        >
          <div className="logo">
            <Link href="/admin">
              <img src="/logo-text.png" alt="logo" />
            </Link>
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={[router.pathname]}
            key={router.pathname.slice(7)}
            mode="inline"
            items={items}
            onClick={(e) => router.push(e.key)}
          />
          {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="/admin" icon={<HomeOutlined />}>
              <Link href="/admin">Admin</Link>
            </Menu.Item>

            <Menu.SubMenu key="/campaigns" title="Campaigns" icon={<GroupOutlined />}>
              <Link href="/admin/campaigns">Campaigns</Link>
              <Menu.Item key="/admin/campaigns/create">
                <Link href="/admin/campaigns/create">Create Campaigns</Link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu> */}
          ;
        </Sider>

        <Layout className="site-layout">
          {/* Header */}
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

      {/* <div className="inner">{children}</div> */}
    </WAdminLayout>
  )
}

export default AdminLayout
