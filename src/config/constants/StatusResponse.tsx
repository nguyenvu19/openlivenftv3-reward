export enum StatusHttp {
  ok = 200, // server alway response 200
  networkLost = -123, // local: no network
  networkError = -321, // local: Server die or time out
}
// Status code of backend
export enum StatusCode {
  success = 'success',
  error = 'error',

  // Errors
  invalidClient = 1, // miss X-Authorization in header
  invalidParameters = 2, // data request invalid or exist.
  unauthorized = 3, // access_token: miss Authorization in header
  permissionDenied = 4, // access_token: permission Denied
  accessTokenInvalid = 5, // access_token: invalid
  accessTokenExpired = 6, // access_token: expired
  AccessTokenRevoked = 7, // access_token: revoked

  // Diamond Wallet code
  DWTokenInvalid = 'err_token_invalid',
}
