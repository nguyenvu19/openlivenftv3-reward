import React, { useState } from 'react'
import styled from 'styled-components'
import {
  CheckCircleOutlined,
  DollarOutlined,
  FunnelPlotOutlined,
  GroupOutlined,
  HomeOutlined,
  MenuOutlined,
  TeamOutlined,
  WalletOutlined,
  DownOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Avatar, Dropdown, MenuProps } from 'antd'

const { Header, Sider, Content } = Layout

const WAdminLayout = styled.div`
  font-family: Roboto, sans-serif;

  .logo {
    height: 70px;
    background: rgba(0, 0, 0, 0.3);
    margin: 0px;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    border-radius: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

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
  getItem('Dashboard', '1', <HomeOutlined />),
  getItem('Report', 'sub1', <GroupOutlined />, [
    getItem('Wallet', '3'),
    getItem('Customer', '4'),
    getItem('Transaction', '5'),
  ]),
  getItem('Investment', 'sub2', <FunnelPlotOutlined />, [
    getItem('Package', '6'),
    getItem('History', '7'),
    getItem('Dividend', '8'),
  ]),
  getItem('Manager', 'sub3', <TeamOutlined />, [
    getItem('Admin', '9'),
    getItem('Currency', '10'),
    getItem('Chain', '11'),
    getItem('Wallet', '12'),
    getItem('County', '13'),
  ]),
  getItem('Team Wallet', '14', <WalletOutlined />),
  getItem('Admin Claim Deposit', 'sub4', <DollarOutlined />, [getItem('History', '15'), getItem('Claim', '16')]),
  getItem('Check hash deposit', '17', <CheckCircleOutlined />),
]

const AdminLayout = ({ children }: any) => {
  const [collapsed, setCollapsed] = useState(false)

  const userMenu = (
    <Menu>
      <Menu.Item key="1">Item 1</Menu.Item>
      <Menu.Item key="2">Item 2</Menu.Item>
      <Menu.Item key="3">Item 3</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  )

  return (
    <WAdminLayout>
      <Layout style={{ minHeight: '100vh' }}>
        {/* Sidebar */}

        <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} width={240}>
          <div className="logo">
            <img src="/logo2.png" alt="logo2" />
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
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
              <Dropdown.Button
                // style={{ float: 'right' }}
                className="dropdown-btn"
                overlay={userMenu}
                icon={
                  <UserOutlined
                    style={{
                      fontSize: '28px',
                      backgroundColor: '#f0f0f0',
                      borderRadius: '50%',
                    }}
                  />
                }
              />
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
            Content
          </Content>
        </Layout>
      </Layout>

      {/* <div className="inner">{children}</div> */}
    </WAdminLayout>
  )
}

export default AdminLayout
