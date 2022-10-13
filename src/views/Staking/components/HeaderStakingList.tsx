import styled from 'styled-components'
import { Button, Flex, Text } from '@pancakeswap/uikit'

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
  padding: 10px 24px;
  background: #eefbff;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`

const HeaderStakingList = () => {
  return (
    <WHeaderStakingList>
      <Flex width="100%" flexDirection={['column', , , 'row']} justifyContent="space-between" rowGap="14px">
        <WCardInfo className="card-info-item">
          <Text fontSize={['13px', , '16px']}>OPV AVAILABLE</Text>
          <Text fontSize={['13px', , '16px']}>0</Text>
        </WCardInfo>
        <WCardInfo className="card-info-item">
          <Text fontSize={['13px', , '16px']}>OPV STAKED</Text>
          <Text fontSize={['13px', , '16px']}>0</Text>
        </WCardInfo>
        <WCardInfo className="card-info-item">
          <Text fontSize={['13px', , '16px']}>OPV EARNED</Text>
          <Text fontSize={['13px', , '16px']}>0</Text>
        </WCardInfo>
      </Flex>
      <Flex justifyContent={['center', , , 'right']}>
        <Button>History</Button>
      </Flex>
    </WHeaderStakingList>
  )
}

export default HeaderStakingList
