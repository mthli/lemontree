import useSWR from 'swr'

import { SERVER_BASE_URL } from './constants'

export class RequestError extends Error {
  code: number; // HTTP Status Code.

  constructor(code: number, name: string, message: string) {
    super()
    this.code = code
    this.name = name
    this.message = message
  }
}

export const useGoogleOAuth = (
  credential: string,
  userToken: string = '',
  verifyExp: boolean = false,
) => {
  return useSWR(
    [`${SERVER_BASE_URL}/api/user/oauth/google`, credential, verifyExp],
    async ([url, credential]) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'credential': credential,
          'user_token': userToken,
          'verify_exp': verifyExp,
        })
      })

      const body = await res.json()
      if (!res.ok) throw new RequestError(body['code'], body['name'], body['message'])
      return body
    },
    {
      errorRetryCount: 0,
      revalidateOnFocus: false,
    })
}

const useCheckVariant = (
  check: number,
  apiUrl: string,
  userToken: string,
  storeId: string,
  productId: string,
  variantId: string,
  testMode: boolean = false,
) => {
  const params = new URLSearchParams({
    'user_token': userToken,
    'store_id': storeId,
    'product_id': productId,
    'variant_id': variantId,
    'test_mode': testMode ? 'true' : 'false',
  }).toString()

  return useSWR(
    check ? [check, `${apiUrl}?${params}`] : null,
    async ([_check, url]) => {
      const res = await fetch(url)
      const body = await res.json()
      if (!res.ok) throw new RequestError(body['code'], body['name'], body['message'])
      return body
    },
    {
      errorRetryCount: 0,
      revalidateOnFocus: false,
    })
}

export const useCheckOrder = (
  check: number,
  userToken: string,
  storeId: string,
  productId: string,
  variantId: string,
  testMode: boolean = false,
) => {
  const apiUrl = `${SERVER_BASE_URL}/api/orders/check`
  return useCheckVariant(check, apiUrl, userToken, storeId, productId, variantId, testMode)
}

export const useCheckSubscription = (
  check: number,
  userToken: string,
  storeId: string,
  productId: string,
  variantId: string,
  testMode: boolean = false,
) => {
  const apiUrl = `${SERVER_BASE_URL}/api/subscriptions/check`
  return useCheckVariant(check, apiUrl, userToken, storeId, productId, variantId, testMode)
}

export const useActivateLicense = (
  activate: number,
  licenseKey: string,
  instanceName: string,
) => {
  return useSWR(
    activate ? [activate, `${SERVER_BASE_URL}/api/licenses/activate`, licenseKey, instanceName] : null,
    async ([_activate, url, licenseKey, instanceName]) => {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'license_key': licenseKey,
          'instance_name': instanceName,
        })
      })

      const body = await res.json()
      if (!res.ok) throw new RequestError(body['code'], body['name'], body['message'])
      return body
    },
    {
      errorRetryCount: 0,
      revalidateOnFocus: false,
    })
}
