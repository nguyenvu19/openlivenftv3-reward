/* eslint-disable no-param-reassign */
import axios from 'axios'
import queryString from 'query-string'
import siteConfig from 'config/siteConfig'
import { getCookiesByKey } from 'utils/cookiesServerside'

export const TOKEN_KEY = 'ac_tk'

const TIME_OUT_RESPONSE_API = 30000 // milliseconds

const baseApiConfig = {
  baseURL: siteConfig.apiUrl,
  headers: {
    'content-type': 'application/json',
  },
  timeout: TIME_OUT_RESPONSE_API,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params, { arrayFormat: 'comma' }),
  },
}

const baseApiClient = axios.create(baseApiConfig)

const request = ({ context, tokenClient, ...options }) => {
  // Serverside
  if (context) {
    const token = getCookiesByKey(context, TOKEN_KEY)
    if (token) {
      baseApiClient.defaults.headers.common.Authorization = `Bearer ${token}`
    }
  }

  // /Clientside
  if (tokenClient) {
    // const token = webStorage.getToken()
    // baseApiClient.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  const onSuccess = (response) => {
    return response?.data
  }

  const onError = (error) => {
    return Promise.reject(error.response)
  }

  return baseApiClient({ ...options })
    .then(onSuccess)
    .catch(onError)
}

export default request
