import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { useTranslation } from 'react-i18next'
import './i18n'

import VariantCard from './VariantCard'
import { SUBSCRIPTION_VARIANT_ID } from './constants'

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

  // Must pass custom `user_id` for making it easy to identify the user in our server side.
  // https://docs.lemonsqueezy.com/help/checkout/passing-custom-data#passing-custom-data-in-checkout-links
  const checkoutUrl = 'https://mthli.lemonsqueezy.com/checkout/buy/fce1d1a0-1e52-4c68-a75f-4aa4a114631b'
    + '?media=0&discount=0' // set checkout page style.
    + `&checkout[custom][user_id]=${userId}` // required.
    + `&checkout[email]=${email}` // optional; pre-filling.

  return (
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
          // TODO
        }}
      >
        {t('check').toString()}
      </Button>
    </Box>
  )
}

export default Subscription
