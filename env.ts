// Development
const ENV_DEVELOPMENT = {
  NEXT_PUBLIC_NODE_ENV: 'development',
  NEXT_PUBLIC_APP_URL: 'https://app-openlivenft-dev.netlify.com',
  NEXT_PUBLIC_APP_USER_URL: 'https://openlivev3-dev.netlify.app',
  NEXT_PUBLIC_APP_USER_API: 'https://api-nft-dev.openlive.finance/api/v1',
  NEXT_PUBLIC_APP_USER_API_METADATA: 'https://api-nft-dev.openlive.finance/meta',

  NEXT_PUBLIC_APP_GRAPH_API: 'https://graph-nft.openlive.finance/subgraphs/name/opv/opvnft',

  NEXT_PUBLIC_DEFAULT_CHAIN_ID: 97,
  NEXT_PUBLIC_TOKEN_ADDRESS: '0x93c4a5d89d3a5dcc3b17395f0c730e9e0ca0763d',
  NEXT_PUBLIC_CONTRACT_ADDRESS: '0xda255a3cB45DD26D017e2CD1E5c3B9128D32D07B',
  NEXT_PUBLIC_NFT_ADDRESS: '0x224A2F0B9D487f2646e8D801E896eb2c21522232',
  NEXT_PUBLIC_CONTRACT_FARM: '0xD4aE8F6e257FbEb56361dBD96d8Aff2C027bD9aC',
  NEXT_PUBLIC_CONTRACT_STAKING: '0x876B4fb11A2694e7a16814C561FC6CD79eF8B5cA',

  NEXT_PUBLIC_MORALIS_API: 'https://deep-index.moralis.io/api/v2',
  NEXT_PUBLIC_MORALIS_API_KEY: '3EwdfGDMjcl235uf6DZIniUEIY6rZmbnY6tAWLDeSMFm2r4BW0QgyEG1NelJJNLZ',
  NEXT_PUBLIC_MORALIS_DAPP_URL: 'https://zh59rm5t5l4j.usemoralis.com:2053/server',
  NEXT_PUBLIC_MORALIS_DAPP_ID: 'W0kUA0Xr59ZG6M03m4jZj8BfE89qwMIgLiaxldk9',

  NEXT_PUBLIC_GTAG: '',
}

// staging
const ENV_STAGING = {
  NEXT_PUBLIC_NODE_ENV: 'staging',
  NEXT_PUBLIC_APP_URL: 'https://app-openlivenft-uat.netlify.com',
  NEXT_PUBLIC_APP_USER_URL: 'https://openlivev3-uat.netlify.app',
  NEXT_PUBLIC_APP_USER_API: 'https://api-nft.openlive.finance/api/v1',
  NEXT_PUBLIC_APP_USER_API_METADATA: 'https://metadata.openlivenft.io/meta',

  NEXT_PUBLIC_APP_GRAPH_API: 'https://api.thegraph.com/subgraphs/name/opvgraph/opv-nft',

  NEXT_PUBLIC_DEFAULT_CHAIN_ID: 56,
  NEXT_PUBLIC_TOKEN_ADDRESS: '0x36c7b164f85d6f775cd128966d5819c7d36feff3',
  NEXT_PUBLIC_CONTRACT_ADDRESS: '0x15a212c1295dBe0946Ca300ccB897D378274db64',
  NEXT_PUBLIC_NFT_ADDRESS: '0x0Eef79f34Eef53495270BF1bB795C4F6dc7d7a1a',
  NEXT_PUBLIC_CONTRACT_FARM: '',
  NEXT_PUBLIC_CONTRACT_STAKING: '0xE100667C379DbFAC029bfE1D1F28ea546b3586f6',

  NEXT_PUBLIC_MORALIS_API: 'https://deep-index.moralis.io/api/v2',
  NEXT_PUBLIC_MORALIS_API_KEY: '3EwdfGDMjcl235uf6DZIniUEIY6rZmbnY6tAWLDeSMFm2r4BW0QgyEG1NelJJNLZ',
  NEXT_PUBLIC_MORALIS_DAPP_URL: 'https://zh59rm5t5l4j.usemoralis.com:2053/server',
  NEXT_PUBLIC_MORALIS_DAPP_ID: 'W0kUA0Xr59ZG6M03m4jZj8BfE89qwMIgLiaxldk9',

  NEXT_PUBLIC_GTAG: '',
}

// Production
const ENV_PRODUCTION = {
  NEXT_PUBLIC_NODE_ENV: 'production',
  NEXT_PUBLIC_APP_URL: 'https://app.openlivenft.finance',
  NEXT_PUBLIC_APP_USER_URL: 'https://nft.openlive.finance',
  NEXT_PUBLIC_APP_USER_API: 'https://api-nft.openlive.finance/api/v1',
  NEXT_PUBLIC_APP_USER_API_METADATA: 'https://metadata.openlivenft.io/meta',

  NEXT_PUBLIC_APP_GRAPH_API: 'https://api.thegraph.com/subgraphs/name/opvgraph/opv-nft',

  NEXT_PUBLIC_DEFAULT_CHAIN_ID: 56,
  NEXT_PUBLIC_TOKEN_ADDRESS: '0x36c7b164f85d6f775cd128966d5819c7d36feff3',
  NEXT_PUBLIC_CONTRACT_ADDRESS: '0x15a212c1295dBe0946Ca300ccB897D378274db64',
  NEXT_PUBLIC_NFT_ADDRESS: '0x0Eef79f34Eef53495270BF1bB795C4F6dc7d7a1a',
  NEXT_PUBLIC_CONTRACT_FARM: '',
  NEXT_PUBLIC_CONTRACT_STAKING: '0xE100667C379DbFAC029bfE1D1F28ea546b3586f6',

  NEXT_PUBLIC_MORALIS_API: 'https://deep-index.moralis.io/api/v2',
  NEXT_PUBLIC_MORALIS_API_KEY: '3EwdfGDMjcl235uf6DZIniUEIY6rZmbnY6tAWLDeSMFm2r4BW0QgyEG1NelJJNLZ',
  NEXT_PUBLIC_MORALIS_DAPP_URL: 'https://zh59rm5t5l4j.usemoralis.com:2053/server',
  NEXT_PUBLIC_MORALIS_DAPP_ID: 'W0kUA0Xr59ZG6M03m4jZj8BfE89qwMIgLiaxldk9',

  NEXT_PUBLIC_GTAG: '',
}

const nodeEnv = process.env.NEXT_PUBLIC_NODE_ENV || 'production'
export default nodeEnv === 'development' ? ENV_DEVELOPMENT : nodeEnv === 'staging' ? ENV_STAGING : ENV_PRODUCTION
