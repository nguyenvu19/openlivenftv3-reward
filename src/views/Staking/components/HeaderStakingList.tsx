import styled from 'styled-components'
import CurrencyFormat from 'react-currency-format'
import { Button, Flex, Link, Skeleton, Text } from '@pancakeswap/uikit'
import { useGetOpvBalance } from 'hooks/useTokenBalance'
import { formatBigNumber } from 'utils/formatBalance'
import { FetchStatus } from 'config/constants/types'
import { useTotalStaked } from 'state/staking/fetchTotalStaked'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useStakingHistory } from 'state/staking/fetchStakingHistory'
import { useStakingEarn } from 'state/staking/hooks'

const WHeaderStakingList = styled.div`
  width: 100%;
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  row-gap: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 30px 0;
    flex-direction: row;
  }
  .card-info-item {
    margin-right: 20px;
    &:last-child {
      margin-right: 60px;
    }
  }
`
const WCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 49px;
  padding: 10px 14px;
  background: #eefbff;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`

const HeaderStakingList = ({ opvEarned }) => {
  const { account } = useActiveWeb3React()
  const { balance, fetchStatus } = useGetOpvBalance()
  const { totalStaked } = useTotalStaked(account)

  return (
    <WHeaderStakingList>
      <Flex width="100%" flexDirection={['column', , , 'row']} justifyContent="space-between" rowGap="14px">
        <WCardInfo className="card-info-item">
          <Text fontSize={['13px', , '13px']} fontWeight={600} style={{ whiteSpace: 'nowrap' }}>
            OPV AVAILABLE
          </Text>
          {fetchStatus === FetchStatus.Fetched ? (
            <Text fontSize={['13px', , '13px']} fontWeight={600} style={{ whiteSpace: 'nowrap' }}>
              <CurrencyFormat
                value={formatBigNumber(balance, 3)}
                displayType="text"
                thousandSeparator
                renderText={(t) => t}
              />
            </Text>
          ) : (
            <Skeleton height="14px" width="80px" />
          )}
        </WCardInfo>
        <WCardInfo className="card-info-item">
          <Text fontSize={['13px', , '13px']} fontWeight={600} style={{ whiteSpace: 'nowrap' }}>
            OPV STAKED
          </Text>
          {totalStaked !== undefined ? (
            <Text fontSize={['13px', , '13px']} fontWeight={600}>
              <CurrencyFormat value={totalStaked || 0} displayType="text" thousandSeparator renderText={(t) => t} />
            </Text>
          ) : (
            <Skeleton height="14px" width="80px" />
          )}
        </WCardInfo>
        <WCardInfo className="card-info-item">
          <Text fontSize={['13px', , '13px']} fontWeight={600} style={{ whiteSpace: 'nowrap' }}>
            OPV EARNED
          </Text>
          {opvEarned !== undefined ? (
            <Text fontSize={['13px', , '13px']} fontWeight={600}>
              <CurrencyFormat value={opvEarned || 0} displayType="text" thousandSeparator renderText={(t) => t} />
            </Text>
          ) : (
            <Skeleton height="14px" width="80px" />
          )}
        </WCardInfo>
      </Flex>
      <Flex justifyContent={['center', , , 'right']}>
        <Link href="/staking/history">
          <Button>History</Button>
        </Link>
      </Flex>
    </WHeaderStakingList>
  )
}

export default HeaderStakingList
