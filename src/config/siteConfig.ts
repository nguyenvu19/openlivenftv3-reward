interface HeaderRequest {
  xAuthorization: string
  version: string
}
export interface Environment {
  mode: string
  appName: string
  domain: string
  language: string
  apiUrl: string
  sentryDSN: string
  ubankUrl: string
  header: HeaderRequest
}

function detect(): Environment {
  let domain = 'https://api-dev.diamondwallets.io'
  const config = {
    mode: 'dev',
    appName: 'OpenliveNFT',
    ubankUrl: 'https://uat-http-mops.ubank.vn/mybiz/',
    language: 'en',
    domain,
    apiUrl: `${domain}/api/`, // Production
    sentryDSN: 'https://9cd44f36f59346d28bdad61c70995b56@o896598.ingest.sentry.io/6204599', // Production
    header: {
      xAuthorization: 'c27bf764096fe14c662232bbd9fbb837',
      version: '1.0.0', // DeviceInfo.versionApp,
    },
  }
  switch (config.mode) {
    case 'Dev':
      domain = 'https://api-dev.diamondwallets.io:'
      config.domain = domain
      config.apiUrl = `${domain}/api/`
      config.sentryDSN = 'https://f0e380c056c445da9b1bd5b40638142e@o896598.ingest.sentry.io/6204581'
      config.ubankUrl = 'https://uat-http-mops.ubank.vn/mybiz/'
      break
    default:
      break
  }
  return config
}
const siteConfig = detect()
export default siteConfig
