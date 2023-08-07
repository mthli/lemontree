import { CSSProperties } from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { Trans, useTranslation } from 'react-i18next'
import './i18n'

const VariantCard = ({
  name,
  price,
  desc1,
  desc2,
  desc3Key,
  checkoutText,
  checkoutUrl,
  anonymous,
  style = {},
}: {
  name: string,
  price: string,
  desc1: string,
  desc2: string,
  desc3Key: string,
  checkoutText: string,
  checkoutUrl: string,
  anonymous: boolean,
  style?: CSSProperties,
}) => {
  const { t } = useTranslation()
  return (
    <Card variant='outlined' style={style}>
      <CardContent>
        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ fontSize: '14px' }}
          gutterBottom
        >
          {name}
        </Typography>
        <Typography variant='h4' component='div'>
          {price}
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
          {desc1}
        </Typography>
        <Typography variant='body1' gutterBottom>
          {desc2}
        </Typography>
        <Typography variant='body1'>
          <Trans i18nKey={desc3Key}>
            <Link href='https://app.lemonsqueezy.com/my-orders' target='_blank'>link</Link>
          </Trans>
        </Typography>
        <Button
          variant='contained'
          sx={{ width: '100%', mt: 4 }}
          disabled={anonymous}
          onClick={() => window.location.href = checkoutUrl}
        >
          {checkoutText}
        </Button>
      </CardContent>
    </Card>
  )
}

export default VariantCard
