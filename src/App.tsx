import { useEffect, useState } from 'react'
import { useSessionStorage } from 'usehooks-ts'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import VariantCard from './VariantCard'

import { GoogleLogin } from '@react-oauth/google'
import { useGoogleOAuth } from './api'

import { Trans, useTranslation } from 'react-i18next'
import './i18n'

const WIDTH = '336px'

// Copied from Lemon Squeezy Product Details.
const ORDER_VARIANT_ID = '109551'
const SUBSCRIPTION_VARIANT_ID = '109552'

const App = () => {
  const { t } = useTranslation()
  const [license, setLicense] = useState('')

  // Persist the state with session storage so that it remains after a page refresh.
  const [credential, setCredential] = useSessionStorage('google-login-credential', '')

  // If the credential has expired, the `error.code` is 401.
  //
  // But in this example we don't need to check the credential has expired,
  // because we only use the "email" field in out server side.
  const { data: user, error } = useGoogleOAuth(credential, '', false)
  const anonymous = !user || error

  // Must pass custom `user_id` for making it easy to identify the user in our server side.
  // https://docs.lemonsqueezy.com/help/checkout/passing-custom-data#passing-custom-data-in-checkout-links
  const { id: userId = '', email = '' } = user || {}
  const orderCheckoutUrl = 'https://mthli.lemonsqueezy.com/checkout/buy/ac87c10e-093c-434a-9bdd-7287b361e98c'
    + '?media=0&discount=0' // set checkout page style.
    + `&checkout[custom][user_id]=${userId}` // required.
    + `&checkout[email]=${email}` // optional; pre-filling.
  const subscriptionCheckoutUrl = 'https://mthli.lemonsqueezy.com/checkout/buy/f7ef033f-5782-4885-8487-4c27e0f3c9f4'
    + '?media=0&discount=0' // set checkout page style.
    + `&checkout[custom][user_id]=${userId}` // required.
    + `&checkout[email]=${email}` // optional; pre-filling.

  useEffect(() => {
    // @ts-ignore
    window.createLemonSqueezy()
  }, [])

  return (
    <Container
      maxWidth='xs'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 4,
        pb: 4,
      }}
    >
      <Box sx={{ width: WIDTH }}>
        <Typography variant='h6' gutterBottom>Lemon Tree</Typography>
        <Typography variant='subtitle2' gutterBottom>
          <Trans i18nKey='subtitle1'>
            <Link href='https://github.com/mthli/lemonsqueepy' target='_blank'>link</Link>
          </Trans>
        </Typography>
        <Typography variant='subtitle2'>
          {t('subtitle2').toString()}
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
      <VariantCard
        name={`${t('variant').toString()} #${ORDER_VARIANT_ID}`}
        price='0.99'
        desc1={t('30_days_validity').toString()}
        desc2={t('32_activation_tests').toString()}
        desc3Key='invoices_and_receipts'
        checkoutText={t('buy_license').toString()}
        checkoutUrl={orderCheckoutUrl}
        anonymous={anonymous}
        style={{ width: WIDTH, marginTop: '32px' }}
      />
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        width: WIDTH,
        mt: 4,
      }}>
        <TextField
          variant='outlined'
          label={t('license').toString()}
          required
          size='small'
          sx={{ width: '100%' }}
          disabled={anonymous}
          onChange={({ target: { value = '' } = {} }) => setLicense(value.trim())}
        />
        <Button
          variant='outlined'
          sx={{ ml: 1 }}
          disabled={anonymous || !license}
          onClick={() => {
            // TODO
          }}
        >
          {t('activate').toString()}
        </Button>
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
