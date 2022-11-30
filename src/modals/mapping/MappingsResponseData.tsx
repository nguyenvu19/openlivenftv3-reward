import isFunction from 'lodash/isFunction'
import { StatusCode, StatusHttp } from 'config/constants/StatusResponse'
import { ResponseBase } from '../responses/base/ResponseBase'

/**
 * @description Mappings code, message, result_object from response api.
 * or force logout case access_token
 * unauthorized = 3,
 * accessTokenInvalid = 5
 * accessTokenExpired = 6
 * AccessTokenRevoked = 7
 * @param statusHttp
 * @param json
 * @returns ResponseBase
 */
export function getResponseDataMappings(statusHttp: number, json?: ResponseBase): ResponseBase {
  if (json) {
    // Force logout
    switch (json.code) {
      case StatusCode.unauthorized:
      case StatusCode.accessTokenInvalid:
      case StatusCode.accessTokenExpired:
      case StatusCode.AccessTokenRevoked:
      case StatusCode.DWTokenInvalid:
        try {
          if (isFunction(global?.logout)) {
            global?.logout?.()
          }
        } catch (error) {
          console.error('### ResponseData logout exception', error)
        }
        break
      default:
        break
    }
    return json
  }
  // Network error
  if (statusHttp === StatusHttp.networkError || statusHttp === StatusHttp.networkLost) {
    return {
      status: 'error',
      code: statusHttp,
      message: statusHttp === StatusHttp.networkError ? 'network_error' : 'network_lost',
      data: {},
    }
  }
  // Can't get json response from backend
  return {
    status: 'error',
    code: statusHttp,
    message: 'cant_get_json_backend',
    data: {},
  }
}
