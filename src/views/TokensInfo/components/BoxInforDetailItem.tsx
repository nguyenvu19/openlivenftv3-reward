import { useTranslation } from '@pancakeswap/localization'
import { Tooltip } from 'antd'
import { isNumber, roundNumber } from 'helpers'
import { Box, Button, Flex, Image, Text } from '@pancakeswap/uikit'
import CurrencyFormat from 'react-currency-format'
import styled from 'styled-components'

const WBoxInforDetailItem = styled.div`
  border-bottom: 0.2px solid #5b708f;
  &:last-child {
    border-bottom: none;
  }
  width: 100%;
  display: flex;
  row-gap: 24px;
  flex-flow: row wrap;
  max-width: 100%;
  padding: 16px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    border-bottom: none;
    &:last-child {
      border-right: none;
    }
    padding: 0 8px;
    border-right: 0.2px solid #5b708f;
  }
`
// const text = (
//   <Box>
//     <Text fontSize={['12px', , '13px']} color="#000" style={{ cursor: 'pointer' }}>
//       24h Low/High
//     </Text>
//     <Text mt="8px" fontSize={['12px', , '13px']} color="#000" style={{ cursor: 'pointer' }}>
//       1m Low/High
//     </Text>
//     <Text mt="8px" fontSize={['12px', , '13px']} color="#000" style={{ cursor: 'pointer' }}>
//       1y Low/High
//     </Text>
//   </Box>
// )

const BoxInforDetailItem = ({ dataLatest }) => {
  const { t } = useTranslation()
  const marketCap = dataLatest?.self_reported_market_cap
  const maxSupply = dataLatest?.max_supply
  const totalSupply = dataLatest?.total_supply
  const volumn = dataLatest?.quote?.USD?.volume_24h

  const selfReportCirculatingSupply = dataLatest?.self_reported_circulating_supply
  const price = dataLatest?.quote?.USD?.price
  // const marketCap = price * fetData?.circulating_supply     = 0 ???

  const FullyDilutedMarketCap = maxSupply ? price * maxSupply : price * totalSupply

  const textInfomationMarketCap = (
    <Box>
      <Text fontSize={[12, , 13]} color="#000">
        {t(
          "The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.",
        )}
      </Text>
    </Box>
  )
  const textInfomation24h = (
    <Box>
      <Text fontSize={[12, , 13]} color="#000">
        {t('A measure of how much of a cryptocurrency was traded in the last 24 hours.')}
      </Text>
    </Box>
  )

  const textInfomationFullyDiluted = (
    <Box>
      <Text fontSize={[12, , 13]} color="#000">
        {t('The market cap if the max supply was in circulation.')}
      </Text>
    </Box>
  )
  const textInfomationSelfReport = (
    <Box>
      <Text fontSize={[12, , 13]} color="#000">
        {t(
          'The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.',
        )}
      </Text>
    </Box>
  )
  const textInfomationMaxSupply = (
    <Box>
      <Text fontSize={[12, , 13]} color="#000">
        {t(
          'The maximum amount of coins that will ever exist in the lifetime of the cryptocurrency. It is analogous to the fully diluted shares in the stock market.',
        )}
      </Text>
    </Box>
  )
  const textInfomationTotalSupply = (
    <Box>
      <Text fontSize={[12, , 13]} color="#000">
        {t(
          'The amount of coins that have been already created, minus any coins that have been burned. It is analogous to the outstanding shares in the stock market.',
        )}
      </Text>
    </Box>
  )

  return (
    <>
      <WBoxInforDetailItem>
        <Flex flexDirection="column" style={{ width: '100%' }}>
          <Flex alignItems="center">
            <Text fontSize={['12px', , '14px']} mr="16px" color="#5B708F">
              {t('Market Cap')}
            </Text>
            <Tooltip color="#fff" placement="bottom" title={textInfomationMarketCap}>
              <Image mr="8px" width={16} height={16} src="/imgTokensInfo/information.png" />
            </Tooltip>
            <Image width={16} height={16} src="/imgTokensInfo/danger.png" />
          </Flex>
          <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700" mt={['8px', , '20px']} mr="16px">
            {isNumber(marketCap) ? (
              <CurrencyFormat
                value={roundNumber(marketCap, { decimals: null })}
                displayType="text"
                thousandSeparator
                prefix={` $`}
                renderText={(text) => text}
              />
            ) : (
              '--'
            )}
          </Text>
          {/* <Flex width={80} alignItems="center" mt={['8px', , '16px']}>
            <Image width={10} height={10} src="/imgTokensInfo/up-green.png" mr="8px" />
            <Text fontSize={['12px', , '14px']} color="#3EBD7C" fontWeight="600">
              {isNumber(totalSupply) ? (
                <CurrencyFormat
                  value={roundNumber(marketCap, { decimals: null })}
                  displayType="text"
                  thousandSeparator
                  prefix={` $`}
                  renderText={(text) => text}
                />
              ) : (
                '--'
              )}
            </Text>
          </Flex> */}
        </Flex>
      </WBoxInforDetailItem>
      {/*  */}
      <WBoxInforDetailItem>
        <Flex flexDirection="column" style={{ width: '100%' }}>
          <Flex alignItems="center">
            <Text fontSize={['12px', , '14px']} mr="16px" color="#5B708F">
              {t('Fully Diluted Market Cap')}
            </Text>
            <Tooltip color="#fff" placement="bottom" title={textInfomationFullyDiluted}>
              <Image mr="16px" width={16} height={16} src="/imgTokensInfo/information.png" />
            </Tooltip>
          </Flex>
          <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700" mt={['8px', , '20px']} mr="16px">
            {/* <CurrencyFormat
              value={FullyDilutedMarketCap}
              displayType="text"
              prefix={` $`}
              thousandSeparator
              renderText={(text) => text}
            /> */}
            {isNumber(FullyDilutedMarketCap) ? (
              <CurrencyFormat
                value={roundNumber(FullyDilutedMarketCap, { decimals: null })}
                displayType="text"
                thousandSeparator
                prefix={` $`}
                renderText={(text) => text}
              />
            ) : (
              '--'
            )}
          </Text>
          {/* <Flex width={80} alignItems="center" mt={['8px', , '16px']}>
            <Image width={10} height={10} src="/imgTokensInfo/down-red.png" mr="8px" />
            <Text fontSize={['12px', , '14px']} color="#D71515" fontWeight="600">
              0.02%
            </Text>
          </Flex> */}
        </Flex>
      </WBoxInforDetailItem>
      {/*  */}
      <WBoxInforDetailItem>
        <Flex flexDirection="column" style={{ width: '100%' }}>
          <Flex alignItems="center">
            {/* <Tooltip color="#fff" placement="bottom" title={text} trigger={['click']}> */}
            <Button
              width="61px"
              height="27px"
              padding="0 4px"
              scale="sm"
              mr="16px"
              style={{ background: '#EDF0F3', boxShadow: 'none' }}
            >
              <Text fontSize={['12px', , '14px']} color="#5B708F" fontWeight="600">
                24h
              </Text>
              <Image width={10} height={10} src="/imgTokensInfo/down-outline.png" ml="8px" />
            </Button>
            {/* </Tooltip> */}
            <Tooltip color="#fff" placement="bottom" title={textInfomation24h}>
              <Image mr="16px" width={16} height={16} src="/imgTokensInfo/information.png" />
            </Tooltip>
          </Flex>
          <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700" mt={['8px', , '20px']} mr="16px">
            {isNumber(volumn) ? (
              <CurrencyFormat
                value={roundNumber(volumn, { decimals: null })}
                displayType="text"
                thousandSeparator
                prefix={` $`}
                renderText={(text) => text}
              />
            ) : (
              '--'
            )}
          </Text>
          {/* <Flex width={80} alignItems="center" mt={['8px', , '16px']}>
            <Image width={10} height={10} src="/imgTokensInfo/down-red.png" mr="8px" />
            <Text fontSize={['12px', , '14px']} color="#D71515" fontWeight="600">
              0.02%
            </Text>
          </Flex> */}
        </Flex>

        {/* <Flex flexDirection="column" style={{ width: '100%' }} mt={['4px', , '32px']}>
          <Flex alignItems="center">
            <Text fontSize={['12px', , '14px']} mr="16px" color="#5B708F">
              {t('Volume / Market Cap')}
            </Text>
            <Image width={16} height={16} src="/imgTokensInfo/danger.png" />
          </Flex>
          <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700" mt="8px" mr="16px">
            <CurrencyFormat
              value={selfReportCirculatingSupply}
              displayType="text"
              suffix={` OPV`}
              thousandSeparator
              renderText={(text) => text}
            />
            {isNumber(selfReportCirculatingSupply) ? (
              <CurrencyFormat
                value={roundNumber(selfReportCirculatingSupply, { decimals: null })}
                displayType="text"
                thousandSeparator
                prefix={` $`}
                renderText={(text) => text}
              />
            ) : (
              '--'
            )}
            ???
          </Text>
        </Flex> */}
      </WBoxInforDetailItem>
      {/*  */}
      <WBoxInforDetailItem>
        <Flex flexDirection="column" style={{ width: '100%', borderBottom: '4px solid #C9D0DF' }}>
          <Flex alignItems="center">
            <Text fontSize={['12px', , '14px']} mr="16px" color="#5B708F">
              {t('Self Reported Circulating Supply')}
            </Text>
            <Tooltip color="#fff" placement="bottom" title={textInfomationSelfReport}>
              <Image mr="8px" width={16} height={16} src="/imgTokensInfo/information.png" />
            </Tooltip>
            <Image width={16} height={16} src="/imgTokensInfo/danger.png" />
          </Flex>
          <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700" mt={['8px', , '20px']} pb="16px">
            {isNumber(selfReportCirculatingSupply) ? (
              <CurrencyFormat
                value={roundNumber(selfReportCirculatingSupply, { decimals: null })}
                displayType="text"
                thousandSeparator
                suffix={` ${dataLatest?.symbol}`}
                renderText={(text) => text}
              />
            ) : (
              '--'
            )}
          </Text>
        </Flex>
        <Flex flexDirection="row" style={{ width: '100%' }}>
          <Box width="100%">
            <Flex alignItems="center">
              <Text fontSize={['12px', , '14px']} mr="16px" color="#5B708F">
                {t('Max Supply')}
              </Text>
              <Tooltip color="#fff" placement="bottom" title={textInfomationMaxSupply}>
                <Image mr="16px" width={16} height={16} src="/imgTokensInfo/information.png" />
              </Tooltip>
              <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700">
                {/* <CurrencyFormat
                  value={maxSupply}
                  displayType="text"
                  prefix={` $`}
                  thousandSeparator
                  renderText={(text) => text}
                /> */}
                {isNumber(maxSupply) ? (
                  <CurrencyFormat
                    value={roundNumber(maxSupply, { decimals: null })}
                    displayType="text"
                    thousandSeparator
                    prefix={` $`}
                    renderText={(text) => text}
                  />
                ) : (
                  '--'
                )}
              </Text>
            </Flex>
            <Flex alignItems="center" mt="8px">
              <Text fontSize={['12px', , '14px']} mr="16px" color="#5B708F">
                {t('Total Supply')}
              </Text>
              <Tooltip color="#fff" placement="bottom" title={textInfomationTotalSupply}>
                <Image mr="16px" width={16} height={16} src="/imgTokensInfo/information.png" />
              </Tooltip>
              <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700">
                {isNumber(totalSupply) ? (
                  <CurrencyFormat
                    value={roundNumber(totalSupply, { decimals: null })}
                    displayType="text"
                    thousandSeparator
                    prefix={` $`}
                    renderText={(text) => text}
                  />
                ) : (
                  '--'
                )}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </WBoxInforDetailItem>
      {/*  */}
    </>
  )
}

export default BoxInforDetailItem
