import type { ColumnsType } from 'antd/es/table'
import { ZERO_ADDRESS } from 'config/constants'
import { NftTransferHistoryItemType } from 'state/nfts/types'
import TxStatus from 'components/TxStatus'
import { formatCode } from 'helpers'
import { Flex, Link, useMatchBreakpoints } from '@pancakeswap/uikit'
import { getBlockExploreLink } from 'utils'
import { useNftTransferHistory } from 'state/nfts/transferHistory'
import WTableMyNft from '../WTableMyNft'
import WTableMyNftMobile from '../WTableMyNftMobile'
import TableItemTransferHistory from './TableItemTransferHistory'

const columns: ColumnsType<NftTransferHistoryItemType> = [
  {
    title: 'No',
    dataIndex: 'index',
    render: (text, __, index) => (
      <div className="table-history-amount">
        <p>{index + 1}</p>
      </div>
    ),
  },
  {
    title: 'Nft Id',
    dataIndex: 'tokenId',
    render: (text) => (
      <div className="table-history-amount">
        <p>{text}</p>
      </div>
    ),
  },
  {
    title: 'Event',
    dataIndex: 'previousOwner',
    render: (_, record) => {
      if (record.previousOwner === ZERO_ADDRESS) {
        return <p style={{ fontWeight: 700 }}>Mint</p>
      }
      if (record.newOwner === ZERO_ADDRESS) {
        return <p style={{ fontWeight: 700 }}>Burn</p>
      }
      return <p style={{ fontWeight: 700 }}>Transfer</p>
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: () => <TxStatus title="Completed" status="COMPLETED" />,
  },
  {
    title: 'From',
    dataIndex: 'previousOwner',
    render: (text) => (
      <Flex justifyContent="center">
        <Link external href={getBlockExploreLink(text, 'address')}>
          {formatCode(text, 5, 5)}
        </Link>
      </Flex>
    ),
  },
  {
    title: 'To',
    dataIndex: 'newOwner',
    render: (text) => (
      <Flex justifyContent="center">
        <Link external href={getBlockExploreLink(text, 'address')}>
          {formatCode(text, 5, 5)}
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

const NftTransferHistory = ({ tokenId }) => {
  const { isMobile } = useMatchBreakpoints()
  const { nftTransferHistory, setParamsNftTransferHistory } = useNftTransferHistory(tokenId)

  const handleLoadMore = () => {
    setParamsNftTransferHistory((prev) => ({ ...prev, total: prev.total + prev.pageSize }))
  }

  return (
    <>
      {isMobile ? (
        <WTableMyNftMobile
          total={nftTransferHistory.total}
          dataSource={nftTransferHistory ? nftTransferHistory.data : []}
          renderItem={(item, index) => <TableItemTransferHistory index={index + 1} nftTransferHistoryItem={item} />}
          handleLoadMore={handleLoadMore}
        />
      ) : (
        <WTableMyNft
          columns={columns}
          total={nftTransferHistory.total}
          dataSource={nftTransferHistory ? nftTransferHistory.data : []}
          handleLoadMore={handleLoadMore}
        />
      )}
    </>
  )
}

export default NftTransferHistory
