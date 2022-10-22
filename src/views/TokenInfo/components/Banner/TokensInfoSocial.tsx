import { Tooltip } from 'antd'
import styled from 'styled-components'
import { Box, Button, Flex, Image, Link, Skeleton, Text } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import { formatCode } from 'helpers'
import { CopyButton } from 'components/CopyButton'
import AddToWalletButton from 'components/AddToWallet/AddToWalletButton'
import LinkWithItemIcon from '../LinkWithItemIcon'

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

const TokensInfoSocial = ({ dataInfo }) => {
  const { t } = useTranslation()

  // textCommunity
  const textCommunity = (
    <Box>
      <Link external href="https://t.me/OpenLiveNFT" style={{ textDecoration: 'none' }}>
        <Flex width="245px" height="20px" mt="4px" mb="4px" alignItems="center">
          <Text color="#000000" fontSize="11px" fontWeight="600">
            https://t.me/OpenLiveNFT
          </Text>
          <Image width={16} height={16} src="/imgTokensInfo/social.png" ml={[, , '8px']} />
        </Flex>
      </Link>
      <Link external href="https://openlivenftproject.medium.com" mt="8px" style={{ textDecoration: 'none' }}>
        <Flex width="245px" height="20px" mt="4px" mb="4px" alignItems="center">
          <Text color="#000000" fontSize="11px" fontWeight="600">
            https://openlivenftproject.medium.com
          </Text>
          <Image width={16} height={16} src="/imgTokensInfo/social.png" ml={[, , '8px']} />
        </Flex>
      </Link>
      <Link external href="https://twitter.com/OpenLiveNFT" mt="8px" style={{ textDecoration: 'none' }}>
        <Flex width="245px" height="20px" mt="4px" mb="4px" alignItems="center">
          <Text color="#000000" fontSize="11px" fontWeight="600">
            https://twitter.com/OpenLiveNFT
          </Text>
          <Image width={16} height={16} src="/imgTokensInfo/social.png" ml={[, , '8px']} />
        </Flex>
      </Link>
      <Link external href="https://www.reddit.com/r/openLiveNFT" mt="8px" style={{ textDecoration: 'none' }}>
        <Flex width="245px" height="20px" mt="4px" mb="4px" alignItems="center">
          <Text color="#000000" fontSize="11px" fontWeight="600">
            https://www.reddit.com/r/openLiveNFT
          </Text>
          <Image width={16} height={16} src="/imgTokensInfo/social.png" ml={[, , '8px']} />
        </Flex>
      </Link>
    </Box>
  )
  // tooltipChat
  const tooltipChat = (
    <Box>
      <Link external href="https://t.me/OpenLiveNFT" style={{ textDecoration: 'none' }}>
        <Flex width="400px" height="20px" mt="4px" mb="4px" alignItems="center">
          <Text fontSize="11px" fontWeight="600" color="#000000">
            https://t.me/OpenLiveNFT
          </Text>
          <Image width={16} height={16} src="/imgTokensInfo/social.png" ml={[, , '8px']} />
        </Flex>
      </Link>
      <Link external href="https://discord.com/invite/47pTAVsEUF" style={{ textDecoration: 'none' }}>
        <Flex width="400px" height="20px" mt="4px" mb="4px" alignItems="center">
          <Text fontSize="11px" fontWeight="600" color="#000000">
            https://discord.com/invite/47pTAVsEUF
          </Text>
          <Image width={16} height={16} src="/imgTokensInfo/social.png" ml={[, , '8px']} />
        </Flex>
      </Link>
    </Box>
  )
  // tooltipAudit
  const tooltipAudit = (
    <Text fontSize={[12, , 13]} color="#000">
      {t('Partners listed below conduct security assessments on the provided source code.')}
    </Text>
  )
  // textButtonCopy
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
    <WTokensInfo>
      <Flex alignItems="center" mb="24px">
        <Box
          width={['24px', , '32px']}
          height={['24px', , '32px']}
          mr={['4px', , '16px']}
          style={{ borderRadius: '50%', overflow: 'hidden' }}
        >
          <img src="/imgTokensInfo/opv-logo.png" alt="" />
        </Box>
        <Text
          color="#007CA1"
          fontWeight="700"
          fontSize={[12, 14, 24]}
          mb="0"
          style={{ whiteSpace: 'nowrap', lineHeight: 'unset' }}
        >
          {dataInfo?.name || <Skeleton width="120px" />}
        </Text>
        <Box ml={['8px', , '32px']} background="#EDF0F3" borderRadius="8px">
          <Text color="#000000" fontSize={[12, , 16]} padding="2px 24px">
            {dataInfo?.symbol || <Skeleton width="20px" />}
          </Text>
        </Box>
        <Button className="button-social-share" width="90px" height="32px" ml={['8px', , '16px']} padding="6px 8px">
          <Box width={['16px', , '20px']} height={['16px', , '20px']} mr={['6px', , '8px']}>
            <img src="/imgTokensInfo/share.png" alt="" />
          </Box>
          <Text fontSize={[12, , 14]} color="#000000">
            {t('Share')}
          </Text>
        </Button>
      </Flex>
      <Flex alignItems="center" mb={['24px', , '24px']} flexWrap="wrap" style={{ rowGap: '12px' }}>
        {/* openlivenft.com */}
        <LinkWithItemIcon
          mr={['12px', , '24px']}
          title={t('openlivenft.com')}
          href="https://openlivenft.com"
          leftNode={
            <Box width={['16px', , '20px']} height={['16px', , '20px']} mr={['6px', , '8px']}>
              <img src="/imgTokensInfo/link.png" alt="" />
            </Box>
          }
          rightNode={
            <Box width={['16px', , '20px']} height={['16px', , '20px']} ml={['6px', , '8px']}>
              <img src="/imgTokensInfo/social.png" alt="" />
            </Box>
          }
        />

        {/* Explorers */}
        <LinkWithItemIcon
          mr={['12px', , '24px']}
          title={t('Explorers')}
          href="https://bscscan.com/address/0x36C7B164F85D6F775cD128966D5819c7d36FEfF3"
          leftNode={
            <Box width={['16px', , '20px']} height={['16px', , '20px']} mr={['6px', , '8px']}>
              <img src="/imgTokensInfo/explorer.png" alt="" />
            </Box>
          }
          rightNode={
            <Box width={['16px', , '20px']} height={['16px', , '20px']} ml={['6px', , '8px']}>
              <img src="/imgTokensInfo/social.png" alt="" />
            </Box>
          }
        />

        {/* Community */}
        <LinkWithItemIcon
          mr={['12px', , '24px']}
          title={t('Community')}
          leftNode={
            <Box width={['16px', , '20px']} height={['16px', , '20px']} mr={['6px', , '8px']}>
              <img src="/imgTokensInfo/profile.png" alt="" />
            </Box>
          }
          rightNode={
            <Box width={['16px', , '20px']} height={['16px', , '20px']} ml={['6px', , '8px']}>
              <img src="/imgTokensInfo/circle-down.png" alt="" />
            </Box>
          }
          dropdownContent={textCommunity}
        />

        {/* Chat */}
        <LinkWithItemIcon
          mr={['12px', , '24px']}
          title={t('Chat')}
          leftNode={
            <Box width={['16px', , '20px']} height={['16px', , '20px']} mr={['6px', , '8px']}>
              <img src="/imgTokensInfo/messages.png" alt="" />
            </Box>
          }
          rightNode={
            <Box width={['16px', , '20px']} height={['16px', , '20px']} ml={['6px', , '8px']}>
              <img src="/imgTokensInfo/circle-down.png" alt="" />
            </Box>
          }
          dropdownContent={tooltipChat}
        />

        {/* Whitepaper */}
        <LinkWithItemIcon
          mr={['12px', , '24px']}
          title={t('Whitepaper')}
          href="https://docs.openlivenft.com"
          leftNode={
            <Box width={['16px', , '20px']} height={['16px', , '20px']} mr={['6px', , '8px']}>
              <img src="/imgTokensInfo/folder.png" alt="" />
            </Box>
          }
          rightNode={
            <Box width={['16px', , '20px']} height={['16px', , '20px']} ml={['6px', , '8px']}>
              <img src="/imgTokensInfo/social.png" alt="" />
            </Box>
          }
        />
      </Flex>

      <Flex alignItems="center" flexWrap="wrap">
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
            <Box width={['16px', , '20px']} height={['16px', , '20px']} mr="8px">
              <img src="/imgTokensInfo/binance.png" alt="" />
            </Box>
            <Link external href={`https://bscscan.com/address/${dataInfo?.platform?.token_address}`} display="flex">
              <Text fontSize={[9, , 12]} fontWeight="400" color="#000000" style={{ whiteSpace: 'nowrap' }}>
                <span style={{ color: '#5B708F' }}>{dataInfo?.platform?.name} Smart Chain (BEP20):</span>
                <span style={{ color: '#000', fontWeight: '600' }}>
                  {formatCode(dataInfo?.platform?.token_address, 6, 6)}
                </span>
              </Text>
            </Link>
            {/* button-coppy */}
            <Flex style={{ gap: '4px', position: 'relative' }} ml="4px" alignItems="center">
              <CopyButton
                width="16px"
                buttonColor="textSubtle"
                text={dataInfo?.platform?.token_address}
                tooltipMessage={t('Token address copied')}
                tooltipTop={-20}
                tooltipRight={40}
                tooltipFontSize={12}
              />
              <AddToWalletButton
                variant="text"
                p="0"
                height="auto"
                width="fit-content"
                tokenAddress={dataInfo?.platform?.token_address}
                tokenSymbol="OPV"
                tokenDecimals={18}
                tokenLogo=""
              />
            </Flex>
          </Flex>
        </Box>
        <Box ml={[0, , '24px', '54px']} mt={['16px', , 0, 0]}>
          <Flex>
            <Text fontSize={[12, , 14]} fontWeight="600" color="#002C6F">
              {t('Audist')}:
            </Text>
            <Tooltip color="#fff" placement="bottom" title={tooltipAudit}>
              <Box width={['16px', , '20px']} height={['16px', , '20px']} ml={['8px', , '16px']}>
                <img src="/imgTokensInfo/information.png" alt="" />
              </Box>
            </Tooltip>
          </Flex>
          <Link
            external
            href="https://cmc.certik-skynet.com/redirect?project=openlive-nft"
            style={{ textDecoration: 'none' }}
          >
            <Button className="button-social" height="32px" mt={['8px', , , ,]} padding="6px 8px">
              <Box width={['16px', , '20px']} height={['16px', , '20px']} mr={['16px', , '24px']}>
                <img src="/imgTokensInfo/certik.png" alt="" />
              </Box>
              <Text fontSize={[12, , 14]} fontWeight="600" color="#00112B">
                {t('Certik')}
              </Text>
              <Box width={['16px', , '20px']} height={['16px', , '20px']} ml={['16px', , '24px']}>
                <img src="/imgTokensInfo/social.png" alt="" />
              </Box>
            </Button>
          </Link>
        </Box>
      </Flex>
    </WTokensInfo>
  )
}

export default TokensInfoSocial
