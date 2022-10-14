import styled from 'styled-components'
import Dots from 'components/Loader/Dots'
import FarmItem from './FarmItem'

export interface ITableProps {
  a?: any
}

const Container = styled.div<{ showBorder?: boolean }>`
  width: 100%;
  margin: 16px 0px;
  background: ${({ theme }) => theme.card.background};
  border: ${({ theme, showBorder }) => (showBorder ? `1px solid ${theme.colors.cardBorder}` : 'unset')};
  border-radius: 16px;
`

const CenterStyled = styled.div`
  text-align: center;

  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 0 8px 40px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  .empty-text {
    color: #5f440f91;
    font-family: iCiel Cadena;
    font-size: 5vw;
    font-weight: 900;
    white-space: nowrap;

    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 3vw;
    }
  }

  button {
    margin-top: 28px;
    border-radius: 13px;
  }
`

const FarmTable: React.FC<React.PropsWithChildren<ITableProps>> = () => {
  const data: any = [
    {
      poolId: 2,
      name: 'OPV-BNB LPs',
      symbol1: 'OPV',
      symbol2: 'BNB',
      logo1: 'https://meta-config.ukadoge.com/userfiles/images/udoge.png',
      logo2: 'https://meta-config.ukadoge.com/userfiles/images/bnb.png',
      tokenAddress1: '0x698111b771363B81D1179AD102e3d8B9cD093a11',
      tokenAddress2: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      contract: '0x8e8f0A118A3aFbA9C1daC22A869A2D3D7f7F8Bd8',
      lpToken: '0x64f659d8692d0355fac70c8f1da59d967b0fdb34',
      startTime: 1656550800000,
      endTime: 1666918800000,
      poolEnded: false,
      poolStatus: 'live',
      dailyRewards: 10368000000,
      userInfo: { amount: 0, rewardDebt: '0', tmpTotalUserDividendsAllPool: 0, userDividends: 0 },
      poolInfo: {
        accCakePerShare: '2636363227059622152',
        allocPoint: 1244160000000,
        startBlock: 1656550800000,
        endBlock: 1666918800000,
        lastRewardBlock: '1664976758',
        lpToken: '0x64f659D8692d0355faC70c8F1DA59D967B0fdb34',
        totalLpSupply: 171713.62512376718,
        isLocked: true,
      },
    },
    {
      poolId: 3,
      name: 'OPV-BNB LPs',
      symbol1: 'OPV',
      symbol2: 'BNB',
      logo1: 'https://meta-config.ukadoge.com/userfiles/images/udoge.png',
      logo2: 'https://meta-config.ukadoge.com/userfiles/images/bnb.png',
      tokenAddress1: '0x698111b771363B81D1179AD102e3d8B9cD093a11',
      tokenAddress2: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      contract: '0x8e8f0A118A3aFbA9C1daC22A869A2D3D7f7F8Bd8',
      lpToken: '0x64f659d8692d0355fac70c8f1da59d967b0fdb34',
      startTime: 1659510000000,
      endTime: 1691046000000,
      poolEnded: false,
      poolStatus: 'live',
      dailyRewards: 10368000000,
      userInfo: { amount: 0, rewardDebt: '0', tmpTotalUserDividendsAllPool: 0, userDividends: 0 },
      poolInfo: {
        accCakePerShare: '4597104524929008975',
        allocPoint: 3784320000000,
        startBlock: 1659510000000,
        endBlock: 1691046000000,
        lastRewardBlock: '1665508143',
        lpToken: '0x64f659D8692d0355faC70c8F1DA59D967B0fdb34',
        totalLpSupply: 182623.12509073922,
        isLocked: true,
      },
    },
  ]

  const infoTokenLPs = {
    balance: 0,
    symbol: 'Cake-LP',
    name: 'Pancake LPs',
    decimals: '18',
    address: '0x64f659D8692d0355faC70c8F1DA59D967B0fdb34',
  }
  const priceToken = 1.4690381679507757e-9
  const priceTokenLPs = 0.0013243180860025663
  return (
    <Container showBorder={data.length <= 0}>
      {data ? (
        data.length > 0 ? (
          data.map((item) => (
            <FarmItem
              key={item.poolId}
              filterBy={{}}
              infoPool={item}
              infoTokenLPs={infoTokenLPs}
              priceToken={priceToken}
              priceTokenLPs={priceTokenLPs}
            />
          ))
        ) : (
          <CenterStyled>No Data</CenterStyled>
        )
      ) : (
        <CenterStyled>
          <Dots>loading</Dots>
        </CenterStyled>
      )}
    </Container>
  )
}

export default FarmTable
