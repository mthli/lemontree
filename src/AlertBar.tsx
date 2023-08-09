import { forwardRef } from 'react';

import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert ref={ref} variant='filled' elevation={4} {...props} />
})

const AlertBar = ({
  severity = 'info',
  message,
  open,
  onClose,
}: {
  severity: AlertColor,
  message: string,
  open: boolean,
  onClose: () => void,
}) => {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{ mb: 4 }}
    >
      <Alert severity={severity} sx={{ width: '100%' }} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default AlertBar
