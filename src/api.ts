import useSWR from 'swr'

const BASE_URL = 'https://lemon.mthli.com'

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
    [`${BASE_URL}/api/user/oauth/google`, credential, verifyExp],
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
      errorRetryCount: 2,
    })
}
