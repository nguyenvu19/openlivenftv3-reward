import { Pagination } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface PaginationCustomer {
  total: number
  current: number
  onChange: (page: number, pageSize: number) => void
}
const WPagiantionCustomer = styled.div`
  .pagination-wrapper-customer {
    display: flex;
    @media (min-width: 768px) {
      margin-top: 32px;
    }
    justify-content: flex-end;
    ul.ant-pagination {
      li {
        &.ant-pagination-prev,
        &.ant-pagination-next {
          transform: translate(0px, 5px);
          margin: 0;
          button {
            height: 22px;
            width: 22px;
            object-fit: contain;
            background: #069fc2;
            border-radius: 50%;
            color: #fff;
            span {
              display: flex;
              justify-content: center;
            }
          }
        }
        &:hover {
          a {
            color: #069fc2;
            .ant-pagination-item-link-icon {
              color: #069fc2;
            }
          }
          .anticon {
            color: #fff;
          }
        }
        background: none;
        border: none;
        color: #000;
        font-weight: 700;
        &.ant-pagination-options {
          .ant-pagination-options-quick-jumper {
            display: flex;
            flex-direction: row-reverse;
            input {
              border: 1px solid rgba(8, 167, 183, 0.2);
              border-radius: 4px;
              color: #000;
              font-weight: 700;
              padding: 4px 14px;
            }
          }
        }
        &.ant-pagination-item-active {
          background: #eefbff;
          border-radius: 4px;
          border: 1px solid #000;
          border-radius: 4px;
          a {
            color: #000;
          }
        }
        a {
          background: transparent;
          border: none;
        }
        button {
          border: none;
          background: none;
          position: relative;
          &::after {
            position: absolute;
            width: 20px;
            height: 20px;
          }
        }
        &.ant-pagination-jump-next-custom-icon {
          .ant-pagination-item-link {
            .ant-pagination-item-container {
              .ant-pagination-item-ellipsis {
                color: #000;
                transform: translateY(4px);
              }
            }
          }
        }
      }
    }
  }
`

const PaginationCustomer: React.FC<React.PropsWithChildren<PaginationCustomer>> = ({ total, current, ...props }) => (
  <WPagiantionCustomer>
    <div className="pagination-wrapper-customer">
      <Pagination total={total} current={current} showQuickJumper showSizeChanger={false} {...props} />
    </div>
  </WPagiantionCustomer>
)

export default PaginationCustomer
