import { useState } from 'react'

import { AlertColor } from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput'

import AlertBar from './AlertBar'
import VariantCard from './VariantCard'

import { useTranslation } from 'react-i18next'
import './i18n'

import { useCheckOrder } from './api'
import { STORE_ID, PRODUCT_ID, ORDER_VARIANT_ID } from './constants'

const Order = ({
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
  const [license, setLicense] = useState('')
  const [check, setCheck] = useState(0)
  const [alertOpen, setAlertOpen] = useState(false)

  const { data, error, isLoading } = useCheckOrder(
    check,
    userToken,
    STORE_ID,
    PRODUCT_ID,
    ORDER_VARIANT_ID,
  )

  const { available = false } = data || {}
  const alertSeverity: AlertColor = error ? 'error' : (available ? 'success' : 'warning')
  const alertMessage = t(available ? 'available' : 'unavailable').toString()

  // Must pass custom `user_id` for making it easy to identify the user in our server side.
  // https://docs.lemonsqueezy.com/help/checkout/passing-custom-data#passing-custom-data-in-checkout-links
  const checkoutUrl = 'https://mthli.lemonsqueezy.com/checkout/buy/40500aae-2138-4345-a3f2-86695c5debec'
    + '?media=0&discount=0' // set checkout page style.
    + `&checkout[custom][user_id]=${userId}` // required.
    + `&checkout[email]=${email}` // optional; pre-filling.

  return (
    <>
      <Box sx={{ width, marginTop, pl: 2, pr: 2 }}>
        <VariantCard
          name={`${t('variant').toString()} #${ORDER_VARIANT_ID}`}
          price='0.99'
          desc1={t('30_days_validity').toString()}
          desc2={t('32_activation_tests').toString()}
          desc3Key='invoices_and_receipts'
          checkoutText={t('buy_license').toString()}
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: 2,
          }}
        >
          <OutlinedInput
            placeholder={`${t('license').toString()} *`}
            size='small'
            sx={{ width: '100%', height: '36.5px' }}
            disabled={!userId}
            onChange={({ target: { value = '' } = {} }) => setLicense(value.trim())}
          />
          <Button
            variant='outlined'
            sx={{ ml: 1 }}
            disabled={!userId || !license}
            onClick={() => {
              // TODO
            }}
          >
            {t('activate').toString()}
          </Button>
        </Box>
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

export default Order
