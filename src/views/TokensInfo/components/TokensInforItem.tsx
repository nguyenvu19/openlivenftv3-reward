// import { Box, Flex, Image } from '@pancakeswap/uikit'
// import React from 'react'
// import styled from 'styled-components'

// interface TokensInforItem {
//   item: object[]
//   id: number
// }
// const WItemTxhHistory = styled.div`
//   .wItemTxhHistory {
//     width: 100%;
//     padding: 16px;
//     background: #eefbff;
//     border: 1px solid $secondary;
//     border-radius: 12px;

//     .history-item-line {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       margin-bottom: 16px;
//       &.table-history-amount {
//         p {
//           &[data-amount='deposit'] {
//             font-weight: 700;
//             color: green;
//           }
//           &[data-amount='withdraw'] {
//             font-weight: 700;
//             color: red;
//           }
//         }
//       }
//       &.table-history-status {
//         p {
//           &:last-child {
//             &[data-status='Completed'] {
//               background: #008d0e;
//             }
//             &[data-status='Pending'] {
//               background: #ebc500;
//             }
//             color: #ffffff;
//             font-weight: 700;
//             font-size: 16px;
//             line-height: 140%;
//             border-radius: 4px;
//             width: 103px;
//             height: 30px;
//             text-align: center;
//             padding: 4px 8px;
//           }
//         }
//       }
//       &:last-child {
//         margin-bottom: 0;
//       }
//       & > p {
//         color: $text-main;
//         margin-bottom: 16px;
//         &:first-child {
//           font-size: 14px;
//           font-weight: 700;
//           margin-bottom: 0;
//         }
//         &:last-child {
//           font-size: 14px;
//           margin-bottom: 0;
//         }
//       }
//     }
//   }
// `

// const TokensInforItem: React.FC<React.PropsWithChildren<TokensInforItem>> = ({ item }) => {
//   return (
//     <WItemTxhHistory>
//       <div className="wItemTxhHistory">
//         <div className="history-item-line">
//           <p>id</p>
//           <p>{item.id}</p>
//         </div>
//         {/*  */}

//         {/*  */}
//         <div className="history-item-line">
//           <p>Source</p>
//           <Flex alignItems="center" className="staking-item-source">
//             <Box width={24} height={24} mr="8px">
//               <Image width={20} height={20} src={item.currency} />
//             </Box>
//             {item.source}
//           </Flex>
//         </div>
//         {/*  */}
//         <div className="history-item-line table-history-status">
//           <p>Pairs</p>
//           <p>{item.pairs}</p>
//         </div>
//         {/*  */}
//         <div className="history-item-line">
//           <p>from</p>
//           <p>0x4dF...9c700</p>
//         </div>
//         {/*  */}
//         <div className="history-item-line">
//           <p>to</p>
//           <p>0x4dF...9c700</p>
//         </div>
//         <div className="history-item-line">
//           <p>Txh</p>
//           <p>10 Downing Street</p>
//         </div>
//         {/*  */}
//       </div>
//     </WItemTxhHistory>
//   )
// }

// export default TokensInforItem
