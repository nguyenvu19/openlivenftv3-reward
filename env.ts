// Development
const ENV_DEVELOPMENT = {
  NEXT_PUBLIC_NODE_ENV: 'development',
  NEXT_PUBLIC_APP_URL: 'https://app-openlivenft-dev.netlify.com',
  NEXT_PUBLIC_APP_USER_URL: 'https://openlivev3-dev.netlify.app',
  NEXT_PUBLIC_APP_USER_API: 'https://api-nft-dev.openlive.finance/api/v1',

  NEXT_PUBLIC_DEFAULT_CHAIN_ID: 97,
  NEXT_PUBLIC_TOKEN_ADDRESS: '0x93c4a5d89d3a5dcc3b17395f0c730e9e0ca0763d',
  NEXT_PUBLIC_CONTRACT_ADDRESS: '0xF4153b354dD5f97E013AB7D3348454ba9AF580d2',
  NEXT_PUBLIC_NFT_ADDRESS: '0x224A2F0B9D487f2646e8D801E896eb2c21522232',
  NEXT_PUBLIC_CONTRACT_FARM: '0xD4aE8F6e257FbEb56361dBD96d8Aff2C027bD9aC',

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

  NEXT_PUBLIC_DEFAULT_CHAIN_ID: 56,
  NEXT_PUBLIC_TOKEN_ADDRESS: '',
  NEXT_PUBLIC_CONTRACT_ADDRESS: '',
  NEXT_PUBLIC_NFT_ADDRESS: '',
  NEXT_PUBLIC_CONTRACT_FARM: '',

  NEXT_PUBLIC_MORALIS_API: 'https://deep-index.moralis.io/api/v2',
  NEXT_PUBLIC_MORALIS_API_KEY: '3EwdfGDMjcl235uf6DZIniUEIY6rZmbnY6tAWLDeSMFm2r4BW0QgyEG1NelJJNLZ',
  NEXT_PUBLIC_MORALIS_DAPP_URL: 'https://zh59rm5t5l4j.usemoralis.com:2053/server',
  NEXT_PUBLIC_MORALIS_DAPP_ID: 'W0kUA0Xr59ZG6M03m4jZj8BfE89qwMIgLiaxldk9',

  NEXT_PUBLIC_GTAG: 'GTM-PXLD3XW',
}

const nodeEnv = process.env.NEXT_PUBLIC_NODE_ENV || 'production'
export default nodeEnv === 'development' ? ENV_DEVELOPMENT : ENV_PRODUCTION
