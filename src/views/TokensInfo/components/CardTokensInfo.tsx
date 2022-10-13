import { Box, Button, Flex, Image, Link, Text, useTooltip } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'

const WTokensInfo = styled.div`
  width: 100%;
  padding: 16px;
  background: #eefbff;
  border: 1px solid rgba(67, 108, 255, 0.3);
  border-radius: 24px;

  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  ${({ theme }) => theme.mediaQueries.sm} {
    gap: 60px;
    padding: 24px;
  }
  .button-social {
    background: #edf0f3;
    box-shadow: none;
  }
  .button-social-share {
    background: #fff;
    box-shadow: none;
    border: 1px solid #edf0f3;
  }
  .token-info-button-contract {
    a {
      &:hover {
        opacity: 0.7;
        text-decoration: none;
      }
      &:active {
        transform: translateY(1px);
      }
    }
  }
  .token-info-button-coppy,
  .token-info-button-metamask {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transform: translateY(1px);
    }
  }
`

const CardTokensInfo = (props) => {
  const { t } = useTranslation()
  // Tooltips
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Link external href="/">
        <Flex width="160px" height="20px" mt="4px" alignItems="center">
          <Text>{t('openlivenft.com')}</Text>
          <Image width={16} height={16} src="/imgTokensInfo/social.png" ml={['8px', , '16px']} />
        </Flex>
      </Link>
    </>,
    { placement: 'bottom' },
  )

  return (
    <WTokensInfo {...props}>
      <Box>
        <Flex alignItems="center">
          <Box width="31px" mr={['4px', , '16px']}>
            <Image width={30} height={30} src="/images2/opvIcon.png" />
          </Box>
          <Text color="#007CA1" fontWeight="700" fontSize={[12, 14, 24]} mb="0">
            OpenLive NFT
          </Text>
          <Box ml={['8px', , '32px']} background="#EDF0F3" borderRadius="8px">
            <Text color="#000000" fontSize={[12, , 16]} padding="2px 24px">
              OPV
            </Text>
          </Box>
          <Button className="button-social-share" width="90px" height="32px" ml={['8px', , '16px']} padding="6px 8px">
            <Image width={20} height={20} src="/imgTokensInfo/share.png" mr="8px" />
            <Text fontSize={[12, , 14]} color="#000000">
              Share
            </Text>
          </Button>
          {tooltipVisible && tooltip}
        </Flex>
        <Flex alignItems="center" mt={['8px', , '32px']} flexWrap="wrap">
          <Flex ref={targetRef}>
            <Button
              ref={targetRef}
              className="button-social"
              width={[165, , 200]}
              height="32px"
              mt={['8px', , , ,]}
              padding="6px 8px"
            >
              <Image width={20} height={20} src="/imgTokensInfo/link.png" mr={['8px', , '16px']} />
              <Text fontSize={[12, , 14]} fontWeight="600" color="#000000">
                openlivenft.com
              </Text>
              <Image width={20} height={20} src="/imgTokensInfo/social.png" ml={['8px', , '16px']} />
            </Button>
          </Flex>
          <Button
            className="button-social"
            width={[130, , 152]}
            height="32px"
            ml={['8px', , '16px']}
            mt={['8px', , , ,]}
            padding="6px 8px"
          >
            <Image width={20} height={20} src="/imgTokensInfo/explorer.png" mr={['8px', , '16px']} />
            <Text fontSize={[12, , 14]} fontWeight="600" color="#000000">
              Explorers
            </Text>
            <Image width={20} height={20} src="/imgTokensInfo/social.png" ml={['8px', , '16px']} />
          </Button>
          <Button
            className="button-social"
            width={[142, , 167]}
            height="32px"
            ml={['8px', , , '16px']}
            mt={['8px', , , ,]}
            padding="6px 8px"
          >
            <Image width={20} height={20} src="/imgTokensInfo/profile.png" mr={['8px', , '16px']} />
            <Text fontSize={[12, , 14]} fontWeight="600" color="#000000">
              Community
            </Text>
            <Image width={20} height={20} src="/imgTokensInfo/circle-down.png" ml={['8px', , '16px']} />
          </Button>
          <Button
            className="button-social"
            width={[100, , 120]}
            height="32px"
            ml={['8px', , , '16px']}
            mt={['8px', , , ,]}
            padding="6px 8px"
          >
            <Image width={20} height={20} src="/imgTokensInfo/messages.png" mr={['8px', , '16px']} />
            <Text fontSize={[12, , 14]} fontWeight="600" color="#000000">
              Chat
            </Text>
            <Image width={20} height={20} src="/imgTokensInfo/circle-down.png" ml={['8px', , '16px']} />
          </Button>
          <Button
            className="button-social"
            width={[145, , 168]}
            height="32px"
            ml={['8px', , , '16px']}
            mt={['8px', , , ,]}
            padding="6px 8px"
          >
            <Image width={20} height={20} src="/imgTokensInfo/folder.png" mr={['8px', , '16px']} />
            <Text fontSize={[12, , 14]} fontWeight="600" color="#000000">
              Whitepaper
            </Text>
            <Image width={20} height={20} src="/imgTokensInfo/social.png" ml={['8px', , '16px']} />
          </Button>
        </Flex>

        <Flex alignItems="center" mt={['8px', , '32px']} flexWrap="wrap">
          <Box className="token-info-button-contract">
            <Text fontSize={[12, , 14]} fontWeight="600" color="#002C6F">
              Contracts:
            </Text>
            <Flex
              display="flex"
              alignItems="center"
              className="button-social"
              background="#edf0f3"
              width={[270, , 330]}
              mt={['8px', , , ,]}
              borderRadius="8px"
              padding="6px 8px"
              height="32px"
            >
              <Image width={20} height={20} src="/imgTokensInfo/binance.png" mr="8px" />
              <Link external href="/" display="flex">
                <Text fontSize={[9, , 12]} fontWeight="400" color="#000000">
                  <span style={{ color: '#5B708F' }}>BNB Smart Chain (BEP20):</span>
                  <span style={{ color: '#292929' }}>0x36C7...35FEfF3</span>
                </Text>
              </Link>
              <Box ref={targetRef} width={12} height={14} ml="8px" className="token-info-button-coppy">
                <Image width={12} height={14} src="/imgTokensInfo/coppy.png" />
              </Box>
              <Box ref={targetRef} width={16} height={16} className="token-info-button-metamask" ml="8px">
                <Image width={16} height={16} src="/imgTokensInfo/metamask.png" />
              </Box>
            </Flex>
          </Box>
          <Box ml={[0, , '24px', '54px']} mt={['16px', , 0, 0]}>
            <Flex>
              <Text fontSize={[12, , 14]} fontWeight="600" color="#002C6F">
                Audist:
              </Text>
              <Box ref={targetRef} width={20} height={20} ml={['8px', , '16px']}>
                <Image width={20} height={20} src="/imgTokensInfo/information.png" />
              </Box>
            </Flex>
            <Button className="button-social" width={[130, , 127]} height="32px" mt={['8px', , , ,]} padding="6px 8px">
              <Image width={20} height={20} src="/imgTokensInfo/certik.png" mr={['8px', , '16px']} />
              <Text fontSize={[12, , 14]} fontWeight="600" color="#00112B">
                Certik
              </Text>
              <Image width={20} height={20} src="/imgTokensInfo/social.png" ml={['8px', , '16px']} />
            </Button>
          </Box>
        </Flex>
      </Box>
    </WTokensInfo>
  )
}

export default CardTokensInfo
