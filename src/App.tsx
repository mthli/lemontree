import { useSessionStorage } from 'usehooks-ts'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { GoogleLogin } from '@react-oauth/google'
import { useGoogleOAuth } from './api'

import { Trans, useTranslation } from 'react-i18next'
import './i18n'

import Order from './Order'
import Subscription from './Subscription'

const WIDTH = '336px'

const App = () => {
  const { t } = useTranslation()

  // Persist the state with session storage so that it remains after a page refresh.
  const [credential, setCredential] = useSessionStorage('google-login-credential', '')

  // If the credential has expired, the `error.code` is 401.
  //
  // But in this example we don't need to check the credential has expired,
  // because we only use the "email" field in out server side.
  const { data: user = {}, error } = useGoogleOAuth(credential, '', false)
  const { id: userId = '', token: userToken = '', email = '' } = user

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 4,
        pb: 8,
      }}
    >
      <Box sx={{ width: WIDTH }}>
        <Typography variant='h6' gutterBottom>Lemon Tree</Typography>
        <Typography variant='subtitle2' gutterBottom>
          <Trans i18nKey='subtitle'>
            <Link href='https://github.com/mthli/lemonsqueepy' target='_blank'>link</Link>
          </Trans>
        </Typography>
        <Typography variant='subtitle2'>
          {t(!userId ? 'not_signed_in' : 'has_signed_in').toString()}
        </Typography>
      </Box>
      <Box sx={{ width: WIDTH, mt: 3 }}>
        <GoogleLogin
          ux_mode='popup'
          width={WIDTH}
          onSuccess={({ credential: c = '' }) => {
            setCredential(c)

            // https://github.com/vercel/next.js/discussions/51135
            // https://github.com/MomenSherif/react-oauth/issues/289
            //
            // FIXME (Matthew Lee)
            // We have to refresh again after success, because of
            // 'Cross-Origin-Opener-Policy policy would block the window.postMessage call' for now.
            window.location.reload()
          }}
          onError={() => {
            // DO NOTHING.
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Order
          userId={userId}
          userToken={userToken}
          email={email}
          width={WIDTH}
          marginTop='32px'
        />
        <Subscription
          userId={userId}
          userToken={userToken}
          email={email}
          width={WIDTH}
          marginTop='32px'
        />
      </Box>
      <Typography
        variant='body1'
        component='div'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed',
          bottom: 0,
          left: 0,
          mb: 1,
          width: '100%',
          fontSize: '14px',
        }}
      >
        {t('thanks').toString()}
      </Typography>
    </Container >
  );
}

export default App
