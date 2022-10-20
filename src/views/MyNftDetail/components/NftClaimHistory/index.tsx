import type { ColumnsType } from 'antd/es/table'
import { ZERO_ADDRESS } from 'config/constants'
import { useNftClaimHistory } from 'state/nfts/claimHistory'
import { ClaimHistoryItemType } from 'state/nfts/types'
import TxStatus from 'components/TxStatus'
import { formatCode } from 'helpers'
import { CONTRACT_ADDRESS } from 'config'
import { Flex, Link, useMatchBreakpoints } from '@pancakeswap/uikit'
import { getBlockExploreLink } from 'utils'
import TableClaimHistoryAmount from '../FieldData/Amount'
import WTableMyNft from '../WTableMyNft'
import WTableMyNftMobile from '../WTableMyNftMobile'
import NftClaimHistoryItem from './NftClaimHistoryItem'

const columns: ColumnsType<ClaimHistoryItemType> = [
  {
    title: 'Amount',
    dataIndex: 'amount',
    render: (text) => (
      <div className="table-history-amount">
        <p>
          <TableClaimHistoryAmount amount={text} />
        </p>
      </div>
    ),
  },
  {
    title: 'Event',
    dataIndex: 'userAddress',
    render: (userAddress) => <p style={{ fontWeight: 700 }}>{userAddress === ZERO_ADDRESS ? 'Buy' : 'Bonus'}</p>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: () => <TxStatus title="Completed" status="COMPLETED" />,
  },
  {
    title: 'From',
    dataIndex: 'from',
    render: () => (
      <Flex justifyContent="center">
        <Link external href={getBlockExploreLink(CONTRACT_ADDRESS, 'address')}>
          {formatCode(CONTRACT_ADDRESS, 5, 5)}
        </Link>
      </Flex>
    ),
  },
  {
    title: 'To',
    dataIndex: 'userAddress',
    render: (userAddress) => (
      <Flex justifyContent="center">
        <Link external href={getBlockExploreLink(userAddress, 'address')}>
          {formatCode(userAddress, 5, 5)}
        </Link>
      </Flex>
    ),
  },
  {
    title: 'Txh',
    dataIndex: 'transactionHash',
    render: (transactionHash) => (
      <Flex justifyContent="center">
        <Link external href={getBlockExploreLink(transactionHash, 'transaction')}>
          {formatCode(transactionHash, 5, 5)}
        </Link>
      </Flex>
    ),
  },
]

const NftClaimHistory = ({ tokenId }) => {
  const { isMobile } = useMatchBreakpoints()
  const { nftClaimHistory, setParamsNftClaimHistory } = useNftClaimHistory(tokenId)

  const handleLoadMore = () => {
    setParamsNftClaimHistory((prev) => ({ ...prev, total: prev.total + prev.pageSize }))
  }

  return (
    <>
      {isMobile ? (
        <WTableMyNftMobile
          total={nftClaimHistory.total}
          dataSource={nftClaimHistory ? nftClaimHistory.data : []}
          renderItem={(item) => <NftClaimHistoryItem nftClaimHistoryItem={item} />}
          handleLoadMore={handleLoadMore}
        />
      ) : (
        <WTableMyNft
          columns={columns}
          total={nftClaimHistory.total}
          dataSource={nftClaimHistory ? nftClaimHistory.data : []}
          handleLoadMore={handleLoadMore}
        />
      )}
    </>
  )
}

export default NftClaimHistory
