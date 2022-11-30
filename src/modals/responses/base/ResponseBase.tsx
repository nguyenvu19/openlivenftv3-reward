/* eslint-disable camelcase */
export interface ResponseBase {
  status: 'success' | 'error'
  code: number | string
  message: string
  data: object
}
export interface PropsBase {
  id: number
  name: string
  description?: string
  lang_code?: string
}
