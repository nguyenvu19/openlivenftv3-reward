import { OPV_MAINNET } from '@pancakeswap/tokens'
import { Flex, Skeleton, Text } from '@pancakeswap/uikit'
import CurrencyFormat from 'react-currency-format'
import { formatBigNumber } from 'utils/formatBalance'
import { useBalance } from 'wagmi'
import { roundNumber } from 'helpers'
import { isAddress } from 'utils'

const TableItemBalance = ({ record, opvPrice }) => {
  const opvBalance = useBalance({
    addressOrName: isAddress(record?.address) ? record?.address : undefined,
    token: OPV_MAINNET.address,
    chainId: 56,
  })

  return (
    <div className="team-wallet-item-balance" style={{ textAlign: 'right' }}>
      {opvBalance.isFetched && opvBalance.data ? (
        <Text bold color="#000000" fontSize={['12px', , '16px']} lineHeight="1.2" textAlign="end">
          <CurrencyFormat
            value={formatBigNumber(opvBalance.data.value, 6)}
            displayType="text"
            thousandSeparator
            renderText={(text) => text}
          />
        </Text>
      ) : (
        <Flex justifyContent="flex-end">
          <Skeleton height="22px" width="60px" />
        </Flex>
      )}
      {opvPrice && opvBalance.data && (
        <Text color="#292929" fontSize={['10px', , '13px']}>
          ~(
          <CurrencyFormat
            value={roundNumber(opvPrice * +formatBigNumber(opvBalance.data.value, 3))}
            displayType="text"
            thousandSeparator
            suffix={` USD`}
            renderText={(text) => text}
          />
          )
        </Text>
      )}
    </div>
  )
}

export default TableItemBalance
