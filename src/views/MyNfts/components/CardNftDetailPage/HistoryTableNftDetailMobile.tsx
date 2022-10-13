/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import { List } from 'antd'
import styled from 'styled-components'
import { AntTablePaginationType } from 'components/AntTable/types'
import ItemRecentTransaction from './ItemRecentTransaction'
import PaginationCustomer from './PaginationCustomer'

interface DataType {
  action: string
  amount: string
  event: string
  status: string
  from: string
  to: string
  txh: string
}

const dataSource2: DataType[] = [
  {
    action: 'deposit',
    amount: '+500 USDT',
    event: 'Buy',
    status: 'Completed',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
  {
    action: 'withdraw',
    amount: '-500 USDT',
    event: 'Bonus',
    status: 'Pending',
    from: '0x4dF...9c700',
    to: '0x4dF...9c700',
    txh: '10 Downing Street',
  },
]

const HistoryTableNftDetailMobile: React.FC = () => {
  const responsiveList = { gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 3, xxl: 3 }
  const [tableParams, setTableParams] = useState<AntTablePaginationType>({
    page: 1,
    pageSize: 10,
  })
  const handleTableChange = (page, pageSize) => {
    setTableParams((prev) => ({
      ...prev,
      page,
      pageSize,
    }))
  }

  return (
    <WrecentTransaction>
      {dataSource2.length > 0 ? (
        <div
          id="scrollableDiv"
          className="recent-txh-mobile"
          style={{
            position: 'relative',
            minHeight: 700,
          }}
        >
          <>
            <List
              dataSource={dataSource2 || []}
              grid={responsiveList}
              renderItem={(item, index) => (
                <List.Item key={`list-${index}`}>
                  <ItemRecentTransaction data={item} index={index} key={index} />
                </List.Item>
              )}
              locale={{
                emptyText: dataSource2.length === 0 ? <div>Empty</div> : <></>,
              }}
            />
            <PaginationCustomer total={dataSource2.length} current={tableParams.page} onChange={handleTableChange} />
          </>
        </div>
      ) : dataSource2 === undefined ? (
        <h4>Loading...</h4>
      ) : (
        <div>Nodata</div>
      )}
    </WrecentTransaction>
  )
}

export default HistoryTableNftDetailMobile

const WrecentTransaction = styled.div`
  margin-bottom: 100px;
  .recent-txh-mobile {
    .infinite-scroll {
      overflow-x: hidden !important;
    }
  }
`
