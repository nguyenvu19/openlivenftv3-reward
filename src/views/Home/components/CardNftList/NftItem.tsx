import styled from 'styled-components'
import CardNftWithInfo from 'components/Card/CardNftWithInfo'
import { InvestPackageType } from 'state/invest/types'
import { APP_USER_URL } from 'config'
import { OtherCurrencyType } from 'state/otherCurrency/types'

const WNftItem = styled.div``

const NftItem: React.FC<{ packageInvestItem?: InvestPackageType; otherCurrencyList?: OtherCurrencyType[] }> = ({
  packageInvestItem,
  otherCurrencyList,
}) => {
  return (
    <WNftItem>
      <CardNftWithInfo
        packageInvestItem={packageInvestItem}
        href={`${APP_USER_URL}/investment`}
        otherCurrencyList={otherCurrencyList}
      />
    </WNftItem>
  )
}

export default NftItem
