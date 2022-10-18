// import { List } from 'antd'
// import { AntTablePaginationType } from 'components/AntTable/types'
// import { useState } from 'react'
// import styled from 'styled-components'
// import TokensInforItem from './TokensInforItem'

// const WCardTableMarketPlaceMobile = styled.div``

// const CardTableMarketPlaceMobile = ({ packageItem }) => {
//   const responsiveList = { gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 3, xxl: 3 }
//   const [tableParams, setTableParams] = useState<AntTablePaginationType>({
//     page: 1,
//     pageSize: 10,
//   })
//   const handleTableChange = (page, pageSize) => {
//     setTableParams((prev) => ({
//       ...prev,
//       page,
//       pageSize,
//     }))
//   }
//   return (
//     <WCardTableMarketPlaceMobile>
//       {packageItem.length > 0 ? (
//         <div
//           id="scrollableDiv"
//           className="recent-txh-mobile"
//           style={{
//             position: 'relative',
//             minHeight: 700,
//           }}
//         >
//           <>
//             <List
//               dataSource={packageItem || []}
//               grid={responsiveList}
//               renderItem={(item, index) => (
//                 <List.Item key={`list-${index}`}>
//                   <TokensInforItem data={item} index={index} key={index} />
//                 </List.Item>
//               )}
//               locale={{
//                 emptyText: packageItem.length === 0 ? <div>Empty</div> : <></>,
//               }}
//             />
//             {/* <PaginationCustomer total={packageItem.length} current={tableParams.page} onChange={handleTableChange} /> */}
//           </>
//         </div>
//       ) : packageItem === undefined ? (
//         <h4>Loading...</h4>
//       ) : (
//         <div>Nodata</div>
//       )}
//     </WCardTableMarketPlaceMobile>
//   )
// }

// export default CardTableMarketPlaceMobile
