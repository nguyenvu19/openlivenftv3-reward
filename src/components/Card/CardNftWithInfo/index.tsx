import { Flex, Skeleton, Text } from '@pancakeswap/uikit'
import CurrencyFormat from 'react-currency-format'
import { FlexGap } from 'components/Layout/Flex'
import MediaCard from 'components/MediaCard'
import { InvestPackageType } from 'state/invest/types'
import styled from 'styled-components'
import { isNumber, roundNumber } from 'helpers'
import { OtherCurrencyType } from 'state/otherCurrency/types'

const WCardNftWithInfo = styled.div`
  display: block;
  background: #eefbff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  ${({ theme }) => theme.mediaQueries.md} {
    border: 1px solid #00438e;
    border-radius: 20px;
    box-shadow: 8px 10px 4px rgba(0, 0, 0, 0.25);
  }

  .card-nft-cover {
    max-width: 100%;
    text-align: center;
    img {
      width: 100%;
    }
  }

  .card-nft-body {
    padding: 24px;
  }
`

const CardNftWithInfo: React.FC<{
  packageInvestItem?: InvestPackageType
  href?: string
  otherCurrencyList?: OtherCurrencyType[]
  onSelectItem?: (item: any) => void
}> = ({ packageInvestItem, href, otherCurrencyList, onSelectItem }) => {
  if (!packageInvestItem) {
    return (
      <WCardNftWithInfo>
        <Skeleton height={['300px', , '416px']} />
      </WCardNftWithInfo>
    )
  }

  const fCurrency = otherCurrencyList?.find((curr) => curr._id === packageInvestItem?.currency_invest)
  // const fCurrencyReward = otherCurrencyList?.find((curr) => curr._id === packageInvestItem?.currency_bonus_token)
  const opvReward = packageInvestItem?.meta_data?.find((item) => item.key === 'OPV Reward')

  const propsItem: any = href
    ? {
        href,
        as: 'a',
        target: '_blank',
      }
    : {}
  return (
    <WCardNftWithInfo
      onClick={() => {
        if (onSelectItem) onSelectItem(packageInvestItem)
      }}
      {...propsItem}
    >
      <>
        <div className="card-nft-cover">
          <MediaCard fileUrl={packageInvestItem.avatar} />
        </div>
        <div className="card-nft-body">
          <Text fontSize={[20]} fontWeight="bold" mb="14px">
            {packageInvestItem.title}
          </Text>
          <FlexGap flexDirection="column" rowGap="10px">
            <Flex justifyContent="space-between">
              <Text>Price:</Text>
              <Text fontWeight="bold">
                {isNumber(packageInvestItem?.price_invest) ? (
                  <CurrencyFormat
                    value={roundNumber(packageInvestItem.price_invest, { decimals: 18 })}
                    displayType="text"
                    thousandSeparator
                    suffix={fCurrency ? ` ${fCurrency.code}` : ''}
                    renderText={(t) => t}
                  />
                ) : (
                  '--'
                )}
              </Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Daily Reward:</Text>
              <Text fontWeight="bold">{opvReward && opvReward?.value}</Text>
            </Flex>
            <Flex justifyContent="space-between">
              <Text>Dividend:</Text>
              {packageInvestItem?.dividend_rate !== undefined && (
                <Text fontWeight="bold">
                  {isNumber(packageInvestItem?.dividend_rate) ? `${packageInvestItem.dividend_rate}%` : '--'}
                </Text>
              )}
            </Flex>
          </FlexGap>
        </div>
      </>
    </WCardNftWithInfo>
  )
}

export default CardNftWithInfo
