import { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { GoogleLogin } from '@react-oauth/google'

import { Trans, useTranslation } from 'react-i18next'
import './i18n'

const width = '336px'

function App() {
  const { t } = useTranslation()

  // TODO
  const [user, setUser] = useState()
  const anonymous = !user

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
      <Box sx={{ width }}>
        <Typography variant='h6' gutterBottom>Lemon Tree</Typography>
        <Typography variant='subtitle2' gutterBottom>
          <Trans i18nKey='desc_1'>
            <Link href='https://github.com/mthli/lemonsqueepy'>lemonsqueepy</Link>
          </Trans>
        </Typography>
        <Typography variant='subtitle2'>
          {t('desc_2').toString()}
        </Typography>
      </Box>
      <Box sx={{ width, mt: 3 }}>
        <GoogleLogin
          ux_mode='popup'
          width={width}
          onSuccess={({ credential }) => {
            // https://github.com/vercel/next.js/discussions/51135
            // https://github.com/MomenSherif/react-oauth/issues/289
            //
            // FIXME (Matthew Lee)
            // We have to refresh again after success, because of
            // 'Cross-Origin-Opener-Policy policy would block the window.postMessage call' for now.
            window.location.reload()

            // TODO
          }}
          onError={() => {
            // TODO
          }}
        />
      </Box>
      <Card
        variant='outlined'
        sx={{ width, mt: 4 }}
      >
        <CardContent>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ fontSize: '14px' }}
            gutterBottom
          >
            {t('product_no_1').toString()}
          </Typography>
          <Typography variant='h4' component='div'>
            0.99
            <Typography
              variant='body1'
              component='span'
              color='text.secondary'
              sx={{ fontSize: '14px', ml: 1 }}
            >
              {t('usd').toString()}
            </Typography>
          </Typography>
          <Typography
            variant='body1'
            sx={{ mt: 3 }}
            gutterBottom
          >
            {t('14_days_validity').toString()}
          </Typography>
          <Typography variant='body1' gutterBottom>
            {t('32_activation_tests').toString()}
          </Typography>
          <Typography variant='body1'>
            {t('invoices_and_receipts').toString()}
          </Typography>
          <Button
            variant='contained'
            sx={{ width: '100%', mt: 4 }}
            disabled={anonymous}
            onClick={() => {
              // TODO
            }}
          >
            {t('buy_license').toString()}
          </Button>
        </CardContent>
      </Card>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        width,
        mt: 4,
      }}>
        <TextField
          variant='outlined'
          label={t('license').toString()}
          required
          size='small'
          sx={{ width: '100%' }}
          disabled={anonymous}
          onChange={() => {
            // TODO
          }}
        />
        <Button
          variant='outlined'
          sx={{ ml: 1 }}
          disabled={anonymous}
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
