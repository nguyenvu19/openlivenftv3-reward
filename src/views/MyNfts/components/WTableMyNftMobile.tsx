import { Button } from '@pancakeswap/uikit'
import { List } from 'antd'
import styled from 'styled-components'

const WTableMyNftMobileStyled = styled.div`
  margin-bottom: 100px;
  .recent-txh-mobile {
    .infinite-scroll {
      overflow-x: hidden !important;
    }
  }
`
const WTableFooter = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`

const WTableMyNftMobile = ({ dataSource, total, renderItem, handleLoadMore }) => {
  return (
    <WTableMyNftMobileStyled>
      {dataSource?.length > 0 ? (
        <div className="recent-txh-mobile">
          <List
            dataSource={dataSource}
            grid={{ gutter: 16, xs: 1, sm: 1, md: 1, lg: 2, xl: 3, xxl: 3 }}
            renderItem={(item) => <List.Item key={item.id}>{renderItem(item)}</List.Item>}
            locale={{
              emptyText: dataSource?.length === 0 ? <div>Empty</div> : <></>,
            }}
          />
          <WTableFooter>
            <Button scale="sm" disabled={total > dataSource?.length} onClick={handleLoadMore}>
              Load More
            </Button>
          </WTableFooter>
        </div>
      ) : dataSource === undefined ? (
        <h4>Loading...</h4>
      ) : (
        <div>Nodata</div>
      )}
    </WTableMyNftMobileStyled>
  )
}

export default WTableMyNftMobile
