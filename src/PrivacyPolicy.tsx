import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { useTranslation } from 'react-i18next'
import './i18n'

const WIDTH = '336px'

const PrivacyPolicy = () => {
  const { t } = useTranslation()
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
        <Typography variant='h6' gutterBottom>
          {t('privacy_policy').toString()}
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          {t('privacy_policy_desc1').toString()}
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          {t('privacy_policy_desc2').toString()}
        </Typography>
        <Typography variant='subtitle2' gutterBottom>
          {t('privacy_policy_desc3').toString()}
        </Typography>
      </Box>
    </Container>
  )
}

export default PrivacyPolicy
