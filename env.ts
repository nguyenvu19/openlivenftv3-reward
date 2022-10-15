// Development
const ENV_DEVELOPMENT = {
  NEXT_PUBLIC_NODE_ENV: 'development',
  NEXT_PUBLIC_APP_URL: 'https://app-openlivenft-dev.netlify.com',
  NEXT_PUBLIC_APP_USER_URL: 'https://openlivev3-dev.netlify.app',
  NEXT_PUBLIC_APP_USER_API: 'https://api-nft-dev.openlive.finance/api/v1',

  NEXT_PUBLIC_DEFAULT_CHAIN_ID: '97',
  NEXT_PUBLIC_TOKEN_ADDRESS: '',
  NEXT_PUBLIC_CONTRACT_ADDRESS: '0xee25251199d2ff4e44a01131fd7470169adf166f',
  NEXT_PUBLIC_NFT_ADDRESS: '0x224A2F0B9D487f2646e8D801E896eb2c21522232',

  NEXT_PUBLIC_MORALIS_API: 'https://deep-index.moralis.io/api/v2',
  NEXT_PUBLIC_MORALIS_API_KEY: '3EwdfGDMjcl235uf6DZIniUEIY6rZmbnY6tAWLDeSMFm2r4BW0QgyEG1NelJJNLZ',
  NEXT_PUBLIC_MORALIS_DAPP_URL: 'https://zh59rm5t5l4j.usemoralis.com:2053/server',
  NEXT_PUBLIC_MORALIS_DAPP_ID: 'W0kUA0Xr59ZG6M03m4jZj8BfE89qwMIgLiaxldk9',

  NEXT_PUBLIC_GTAG: 'GTM-PXLD3XW',
}

// Production
const ENV_PRODUCTION = {
  NEXT_PUBLIC_NODE_ENV: 'production',
  NEXT_PUBLIC_APP_URL: 'https://app-openlivenft-dev.netlify.com',
  NEXT_PUBLIC_APP_USER_URL: 'https://openlivev3-dev.netlify.app',
  NEXT_PUBLIC_APP_USER_API: 'https://api-nft-dev.openlive.finance/api/v1',

  NEXT_PUBLIC_DEFAULT_CHAIN_ID: '97',
  NEXT_PUBLIC_TOKEN_ADDRESS: '',
  NEXT_PUBLIC_CONTRACT_ADDRESS: '0xee25251199d2ff4e44a01131fd7470169adf166f',
  NEXT_PUBLIC_NFT_ADDRESS: '0x224A2F0B9D487f2646e8D801E896eb2c21522232',

  NEXT_PUBLIC_MORALIS_API: 'https://deep-index.moralis.io/api/v2',
  NEXT_PUBLIC_MORALIS_API_KEY: '3EwdfGDMjcl235uf6DZIniUEIY6rZmbnY6tAWLDeSMFm2r4BW0QgyEG1NelJJNLZ',
  NEXT_PUBLIC_MORALIS_DAPP_URL: 'https://zh59rm5t5l4j.usemoralis.com:2053/server',
  NEXT_PUBLIC_MORALIS_DAPP_ID: 'W0kUA0Xr59ZG6M03m4jZj8BfE89qwMIgLiaxldk9',

  NEXT_PUBLIC_GTAG: 'GTM-PXLD3XW',
}

const nodeEnv = process.env.NEXT_PUBLIC_NODE_ENV || 'production'
export default nodeEnv === 'development' ? ENV_DEVELOPMENT : ENV_PRODUCTION
