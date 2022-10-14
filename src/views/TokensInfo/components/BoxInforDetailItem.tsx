import { useTranslation } from '@pancakeswap/localization'
import { Tooltip } from 'antd'
import { Box, Button, Flex, Image, Text } from '@pancakeswap/uikit'
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
const text = (
  <Box>
    <Text fontSize={['12px', , '13px']} color="#000" style={{ cursor: 'pointer' }}>
      24h Low/High
    </Text>
    <Text mt="8px" fontSize={['12px', , '13px']} color="#000" style={{ cursor: 'pointer' }}>
      1m Low/High
    </Text>
    <Text mt="8px" fontSize={['12px', , '13px']} color="#000" style={{ cursor: 'pointer' }}>
      1y Low/High
    </Text>
  </Box>
)

const BoxInforDetailItem = () => {
  const { t } = useTranslation()

  const textInfomation = (
    <Box>
      <Text>{t('textInfomation')}</Text>
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
            <Tooltip color="#fff" placement="bottom" title={textInfomation}>
              <Image mr="8px" width={16} height={16} src="/imgTokensInfo/information.png" />
            </Tooltip>
            <Image width={16} height={16} src="/imgTokensInfo/danger.png" />
          </Flex>
          <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700" mt={['8px', , '20px']} mr="16px">
            $5,355,970
          </Text>
          <Flex width={80} alignItems="center" mt={['8px', , '16px']}>
            <Image width={10} height={10} src="/imgTokensInfo/up-green.png" mr="8px" />
            <Text fontSize={['12px', , '14px']} color="#3EBD7C" fontWeight="600">
              0.02%
            </Text>
          </Flex>
        </Flex>
      </WBoxInforDetailItem>
      {/*  */}
      <WBoxInforDetailItem>
        <Flex flexDirection="column" style={{ width: '100%' }}>
          <Flex alignItems="center">
            <Text fontSize={['12px', , '14px']} mr="16px" color="#5B708F">
              {t('Fully Diluted Market Cap')}
            </Text>
            <Tooltip color="#fff" placement="bottom" title={textInfomation}>
              <Image mr="16px" width={16} height={16} src="/imgTokensInfo/information.png" />
            </Tooltip>
          </Flex>
          <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700" mt={['8px', , '20px']} mr="16px">
            $5,355,970
          </Text>
          <Flex width={80} alignItems="center" mt={['8px', , '16px']}>
            <Image width={10} height={10} src="/imgTokensInfo/down-red.png" mr="8px" />
            <Text fontSize={['12px', , '14px']} color="#D71515" fontWeight="600">
              0.02%
            </Text>
          </Flex>
        </Flex>
      </WBoxInforDetailItem>
      {/*  */}
      <WBoxInforDetailItem>
        <Flex flexDirection="column" style={{ width: '100%' }}>
          <Flex alignItems="center">
            <Tooltip color="#fff" placement="bottom" title={text} trigger={['click']}>
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
            </Tooltip>
            <Tooltip color="#fff" placement="bottom" title={textInfomation}>
              <Image mr="16px" width={16} height={16} src="/imgTokensInfo/information.png" />
            </Tooltip>
          </Flex>
          <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700" mt={['8px', , '20px']} mr="16px">
            $5,355,970
          </Text>
          <Flex width={80} alignItems="center" mt={['8px', , '16px']}>
            <Image width={10} height={10} src="/imgTokensInfo/down-red.png" mr="8px" />
            <Text fontSize={['12px', , '14px']} color="#D71515" fontWeight="600">
              0.02%
            </Text>
          </Flex>
        </Flex>

        <Flex flexDirection="column" style={{ width: '100%' }} mt={['4px', , '32px']}>
          <Flex alignItems="center">
            <Text fontSize={['12px', , '14px']} mr="16px" color="#5B708F">
              {t('Fully Diluted Market Cap')}
            </Text>
            <Image width={16} height={16} src="/imgTokensInfo/danger.png" />
          </Flex>
          <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700" mt="8px" mr="16px">
            0.01707
          </Text>
        </Flex>
      </WBoxInforDetailItem>
      {/*  */}
      <WBoxInforDetailItem>
        <Flex flexDirection="column" style={{ width: '100%', borderBottom: '4px solid #C9D0DF' }}>
          <Flex alignItems="center">
            <Text fontSize={['12px', , '14px']} mr="16px" color="#5B708F">
              {t('Fully Diluted Market Cap')}
            </Text>
            <Tooltip color="#fff" placement="bottom" title={textInfomation}>
              <Image mr="8px" width={16} height={16} src="/imgTokensInfo/information.png" />
            </Tooltip>
            <Image width={16} height={16} src="/imgTokensInfo/danger.png" />
          </Flex>
          <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700" mt={['8px', , '20px']} pb="16px">
            25,355,970,000 OPV
          </Text>
        </Flex>
        <Flex flexDirection="row" style={{ width: '100%' }} mt={['4px', , '32px']}>
          <Box width="100%">
            <Flex alignItems="center">
              <Text fontSize={['12px', , '14px']} mr="16px" color="#5B708F">
                {t('Max Supply')}
              </Text>
              <Tooltip color="#fff" placement="bottom" title={textInfomation}>
                <Image mr="16px" width={16} height={16} src="/imgTokensInfo/information.png" />
              </Tooltip>
              <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700">
                $5,355,970
              </Text>
            </Flex>
            <Flex alignItems="center" mt="8px">
              <Text fontSize={['12px', , '14px']} mr="16px" color="#5B708F">
                {t('Total Supply')}
              </Text>
              <Tooltip color="#fff" placement="bottom" title={textInfomation}>
                <Image mr="16px" width={16} height={16} src="/imgTokensInfo/information.png" />
              </Tooltip>
              <Text color="#000000" fontSize={['12px', , '14px']} fontWeight="700">
                $5,355,970
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
