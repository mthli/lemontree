import { useState } from 'react'

import { AlertColor } from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import AlertBar from './AlertBar'
import VariantCard from './VariantCard'

import { useTranslation } from 'react-i18next'
import './i18n'

import { useCheckSubscription } from './api'
import { STORE_ID, PRODUCT_ID, SUBSCRIPTION_VARIANT_ID } from './constants'

const Subscription = ({
  userId = '',
  userToken = '',
  email = '',
  width,
  marginTop,
}: {
  userId?: string,
  userToken?: string,
  email?: string,
  width?: string,
  marginTop?: string,
}) => {
  const { t } = useTranslation()
  const [check, setCheck] = useState(0)
  const [alertOpen, setAlertOpen] = useState(false)

  const { data, error, isLoading } = useCheckSubscription(
    check,
    userToken,
    STORE_ID,
    PRODUCT_ID,
    SUBSCRIPTION_VARIANT_ID,
  )

  const { available = false } = data || {}
  const alertSeverity: AlertColor = error ? 'error' : (available ? 'success' : 'warning')
  const alertMessage = t(available ? 'available' : 'unavailable').toString()

  // Must pass custom `user_id` for making it easy to identify the user in our server side.
  // https://docs.lemonsqueezy.com/help/checkout/passing-custom-data#passing-custom-data-in-checkout-links
  const checkoutUrl = 'https://mthli.lemonsqueezy.com/checkout/buy/fce1d1a0-1e52-4c68-a75f-4aa4a114631b'
    + '?media=0&discount=0' // set checkout page style.
    + `&checkout[custom][user_id]=${userId}` // required.
    + `&checkout[email]=${email}` // optional; pre-filling.

  return (
    <>
      <Box sx={{ width, marginTop, pl: 2, pr: 2 }}>
        <VariantCard
          name={`${t('variant').toString()} #${SUBSCRIPTION_VARIANT_ID}`}
          price='0.99'
          desc1={t('1_day_free_trial').toString()}
          desc2={t('renew_after_30_days').toString()}
          desc3Key='manage_subscription'
          checkoutText={t('subscribe').toString()}
          checkoutUrl={checkoutUrl}
          anonymous={!userId}
        />
        <Button
          variant='outlined'
          sx={{ width, mt: 2 }}
          disabled={!userToken}
          onClick={() => {
            if (isLoading) return
            setCheck(check + 1)
            setAlertOpen(true)
          }}
        >
          {t('check').toString()}
        </Button>
      </Box>
      {
        data && !isLoading &&
        <AlertBar
          severity={alertSeverity}
          message={alertMessage}
          open={alertOpen}
          onClose={() => setAlertOpen(false)}
        />
      }
    </>
  )
}

export default Subscription
