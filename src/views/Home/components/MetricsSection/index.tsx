import { Flex, Text, Box } from '@pancakeswap/uikit'
import IconCard, { IconCardData } from '../IconCard'
import DecorationCloud01 from '../../images/DecorationCloud01.png'
import MarketCapIcon from '../../images/marketcapIcon.png'
import MexcIcon from '../../images/mexcIcon.png'
import PancakeIcon from '../../images/pancakeIcon.png'

const Stats = () => {
  const UsersCardData: IconCardData = {
    background: '#B2FDC7',
    icon: <img src={DecorationCloud01.src} alt="" />,
  }

  const TradesCardData: IconCardData = {
    icon: <img src={DecorationCloud01.src} alt="" />,
  }

  const StakedCardData: IconCardData = {
    icon: <img src={DecorationCloud01.src} alt="" />,
  }

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column" mb="70px">
      <Flex width="100%" flexDirection={['column', null, null, 'row']}>
        <IconCard {...UsersCardData} mr={[null, null, null, '33px', '66px']} mb={['16px', null, null, '0']}>
          <Flex flexDirection="column">
            <Text fontWeight="bold" mb="6px">
              OPV on Coinmarketcap
            </Text>
            <Flex alignItems="center" justifyContent="center">
              <Text
                as="a"
                color="#347FF0"
                fontWeight="bold"
                textAlign="center"
                href="https://coinmarketcap.com/vi/currencies/openlive-nft/"
                target="_blank"
              >
                Via Coinmarketcap
              </Text>
              <Box width="16px" height="16px" ml="4px">
                <img src={MarketCapIcon.src} alt="" />
              </Box>
            </Flex>
          </Flex>
        </IconCard>
        <IconCard {...TradesCardData} mr={[null, null, null, '33px', '66px']} mb={['16px', null, null, '0']}>
          <Flex flexDirection="column">
            <Text fontWeight="bold" mb="6px">
              OPV on Mexc
            </Text>
            <Flex alignItems="center" justifyContent="center">
              <Text
                as="a"
                href="https://www.mexc.com/exchange/OPV_USDT"
                color="#347FF0"
                fontWeight="bold"
                textAlign="center"
                target="_blank"
              >
                Via Mexc
              </Text>
              <Box width="16px" height="16px" ml="4px">
                <img src={MexcIcon.src} alt="" />
              </Box>
            </Flex>
          </Flex>
        </IconCard>
        <IconCard {...StakedCardData}>
          <Flex flexDirection="column">
            <Text fontWeight="bold" mb="6px">
              OPV on Pancake
            </Text>
            <Flex alignItems="center" justifyContent="center">
              <Text as="a" href="" color="#347FF0" fontWeight="bold" textAlign="center" target="_blank">
                Via Pancake
              </Text>
              <Box width="16px" height="16px" ml="4px">
                <img src={PancakeIcon.src} alt="" />
              </Box>
            </Flex>
          </Flex>
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
