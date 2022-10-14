import { Box, Button, Flex, Image, Link, Text, useTooltip } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { Tooltip } from 'antd'
import { useTranslation } from '@pancakeswap/localization'

const WTokensInfo = styled.div`
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

const TokensInfoSocial = (props) => {
  const { t } = useTranslation()

  // textCommunity
  const textCommunity = (
    <Box>
      <Link external href="/">
        <Flex width="124px" height="20px" mt="4px" mb="4px" alignItems="center">
          <Text>{t('ethplorer.io')}</Text>
          <Image width={16} height={16} src="/imgTokensInfo/social.png" ml={['8px', , '16px']} />
        </Flex>
      </Link>
    </Box>
  )
  // textChat
  const textChat = (
    <Box>
      <Link external href="/">
        <Flex width="124px" height="20px" mt="4px" mb="4px" alignItems="center">
          <Text>{t('ethplorer.io')}</Text>
          <Image width={16} height={16} src="/imgTokensInfo/social.png" ml={['8px', , '16px']} />
        </Flex>
      </Link>
    </Box>
  )
  // textWhitepaper
  const textWhitepaper = (
    <Box>
      <Link external href="/">
        <Flex width="124px" height="20px" mt="4px" mb="4px" alignItems="center">
          <Text>{t('ethplorer.io')}</Text>
          <Image width={16} height={16} src="/imgTokensInfo/social.png" ml={['8px', , '16px']} />
        </Flex>
      </Link>
    </Box>
  )
  // textButtonCoppy
  const textButtonCoppy = (
    <Box>
      <Flex width="80px" height="20px" mt="4px" mb="4px" alignItems="center">
        <Text fontSize={[10, , 12]} color="#fff">
          {t('Copy Address')}
        </Text>
      </Flex>
    </Box>
  )
  // textButtonMetaMask
  const textButtonMetaMask = (
    <Box>
      <Flex width="100px" height="20px" mt="4px" mb="4px" alignItems="center">
        <Text fontSize={[10, , 12]} color="#fff">
          {t('Add to MetaMask')}
        </Text>
      </Flex>
    </Box>
  )

  return (
    <WTokensInfo {...props}>
      <Box>
        <Flex alignItems="center">
          <Box width="31px" mr={['4px', , '16px']}>
            <Image width={30} height={30} src="/images2/opvIcon.png" />
          </Box>
          <Text color="#007CA1" fontWeight="700" fontSize={[12, 14, 24]} mb="0">
            {t('OpenLive NFT')}
          </Text>
          <Box ml={['8px', , '32px']} background="#EDF0F3" borderRadius="8px">
            <Text color="#000000" fontSize={[12, , 16]} padding="2px 24px">
              OPV
            </Text>
          </Box>
          <Tooltip color="#fff" placement="bottom" title={textWhitepaper}>
            <Button className="button-social-share" width="90px" height="32px" ml={['8px', , '16px']} padding="6px 8px">
              <Image width={20} height={20} src="/imgTokensInfo/share.png" mr="8px" />
              <Text fontSize={[12, , 14]} color="#000000">
                {t('Share')}
              </Text>
            </Button>
          </Tooltip>
        </Flex>
        <Flex alignItems="center" mt={['8px', , '32px']} flexWrap="wrap">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button className="button-social" width={[170, , 200]} height="32px" mt={['8px', , , ,]} padding="6px 8px">
              <Image width={20} height={20} src="/imgTokensInfo/link.png" mr={['8px', , '16px']} />
              <Text fontSize={[12, , 14]} fontWeight="600" color="#000000">
                openlivenft.com
              </Text>
              <Image width={20} height={20} src="/imgTokensInfo/social.png" ml={['8px', , '16px']} />
            </Button>
          </Link>
          <Link href="/" style={{ textDecoration: 'none' }}>
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
                {t('Explorers')}
              </Text>
              <Image width={20} height={20} src="/imgTokensInfo/social.png" ml={['8px', , '16px']} />
            </Button>
          </Link>

          {/* Community */}
          <Tooltip color="#fff" placement="bottom" title={textCommunity}>
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
                {t('Community')}
              </Text>
              <Image width={20} height={20} src="/imgTokensInfo/circle-down.png" ml={['8px', , '16px']} />
            </Button>
          </Tooltip>

          {/* Chat */}
          <Tooltip color="#fff" placement="bottom" title={textChat}>
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
                {t('Chat')}
              </Text>
              <Image width={20} height={20} src="/imgTokensInfo/circle-down.png" ml={['8px', , '16px']} />
            </Button>
          </Tooltip>
          <Link href="/" style={{ textDecoration: 'none' }}>
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
                {t('Whitepaper')}
              </Text>
              <Image width={20} height={20} src="/imgTokensInfo/social.png" ml={['8px', , '16px']} />
            </Button>
          </Link>
        </Flex>

        <Flex alignItems="center" mt={['8px', , '32px']} flexWrap="wrap">
          <Box className="token-info-button-contract">
            <Text fontSize={[12, , 14]} fontWeight="600" color="#002C6F">
              {t('Contracts')}:
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
              height="27px"
            >
              <Image width={20} height={20} src="/imgTokensInfo/binance.png" mr="8px" />
              <Link external href="/" display="flex">
                <Text fontSize={[9, , 12]} fontWeight="400" color="#000000">
                  <span style={{ color: '#5B708F' }}>BNB Smart Chain (BEP20):</span>
                  <span style={{ color: '#292929' }}>0x36C7...35FEfF3</span>
                </Text>
              </Link>
              {/* button-coppy */}
              <Tooltip color="#000" placement="top" title={textButtonCoppy}>
                <Box width={12} height={14} ml="8px" className="token-info-button-coppy">
                  <Image width={12} height={14} src="/imgTokensInfo/coppy.png" />
                </Box>
              </Tooltip>

              {/* button-metamask */}
              <Tooltip color="#000" placement="top" title={textButtonMetaMask}>
                <Box width={16} height={16} className="token-info-button-metamask" ml="8px">
                  <Image width={16} height={16} src="/imgTokensInfo/metamask.png" />
                </Box>
              </Tooltip>
            </Flex>
          </Box>
          <Box ml={[0, , '24px', '54px']} mt={['16px', , 0, 0]}>
            <Flex>
              <Text fontSize={[12, , 14]} fontWeight="600" color="#002C6F">
                {t('Audist')}:
              </Text>
              <Tooltip color="#fff" placement="bottom" title={textWhitepaper}>
                <Box width={20} height={20} ml={['8px', , '16px']}>
                  <Image width={20} height={20} src="/imgTokensInfo/information.png" />
                </Box>
              </Tooltip>
            </Flex>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button
                className="button-social"
                width={[130, , 127]}
                height="32px"
                mt={['8px', , , ,]}
                padding="6px 8px"
              >
                <Image width={20} height={20} src="/imgTokensInfo/certik.png" mr={['8px', , '16px']} />
                <Text fontSize={[12, , 14]} fontWeight="600" color="#00112B">
                  {t('Certik')}
                </Text>
                <Image width={20} height={20} src="/imgTokensInfo/social.png" ml={['8px', , '16px']} />
              </Button>
            </Link>
          </Box>
        </Flex>
      </Box>
    </WTokensInfo>
  )
}

export default TokensInfoSocial
