import styled from 'styled-components'
import Dots from 'components/Loader/Dots'
import { FarmsItemType } from 'state/farmsOpv/types'
import FarmItem from './FarmItem'

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

export interface Props {
  tabFarmActive?: string
  farmsData?: FarmsItemType[]
  tokenPriceUsd?: number
  priceTokenLPs?: number
  infoLpsWithUserBalance?: any
  totalUserDividendsAllPool?: number
  fetchFarmsData: () => void
}
const FarmTable: React.FC<Props> = ({
  tabFarmActive,
  farmsData,
  tokenPriceUsd,
  priceTokenLPs,
  infoLpsWithUserBalance,
  fetchFarmsData,
}) => {
  return (
    <Container showBorder={farmsData?.length <= 0}>
      {farmsData ? (
        farmsData.length > 0 ? (
          farmsData.map((item) => (
            <FarmItem
              key={item.poolId}
              infoPool={item}
              tabFarmActive={tabFarmActive}
              tokenPriceUsd={tokenPriceUsd}
              priceTokenLPs={priceTokenLPs}
              infoLpsWithUserBalance={infoLpsWithUserBalance}
              fetchFarmsData={fetchFarmsData}
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
