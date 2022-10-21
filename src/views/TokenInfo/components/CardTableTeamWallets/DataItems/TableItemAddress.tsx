import { Link } from '@pancakeswap/uikit'
import { formatCode } from 'helpers'
import { getBlockExploreLink } from 'utils'

const TableItemAddress = ({ address }) => {
  return (
    <div className="team-wallet-item-name" style={{ display: 'flex', justifyContent: 'center' }}>
      <Link fontSize={['12px', , '16px']} bold external href={getBlockExploreLink(address, 'address')}>
        {formatCode(address, 5, 5)}
      </Link>
    </div>
  )
}

export default TableItemAddress
