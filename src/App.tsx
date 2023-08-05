import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import { GoogleLogin } from '@react-oauth/google'

const width = '336px'

function App() {
  return (
    <Container
      maxWidth='xs'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: 8,
      }}
    >
      <Box sx={{ width: width }}>
        <GoogleLogin
          width={width}
          onSuccess={({ credential }) => {
            // TODO
          }}
        />
      </Box>
      <Card
        variant='outlined'
        sx={{
          mt: 4,
          width: width,
        }}
      >
        <CardContent>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ fontSize: '14px' }}
            gutterBottom
          >
            Product #1
          </Typography>
          <Typography variant='h4' component='div'>
            0.99
            <Typography
              variant='body1'
              component='span'
              color='text.secondary'
              sx={{ fontSize: '14px', ml: 1 }}
            >
              USD
            </Typography>
          </Typography>
          <Typography
            variant='body1'
            sx={{ mt: 3 }}
            gutterBottom
          >
            • 1 month validity 🌖
          </Typography>
          <Typography variant='body1' gutterBottom>• 100 activation tests 🚀</Typography>
          <Typography variant='body1'>• Invoices and receipts 🧾</Typography>
          <Button
            variant='contained'
            sx={{ width: '100%', mt: 4 }}
            onClick={() => {
              // TODO
            }}
          >
            Buy License
          </Button>
        </CardContent>
      </Card>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        width: width,
        mt: 4,
      }}>
        <TextField
          variant='outlined'
          label='License'
          size='small'
          sx={{ width: '100%' }}
          onChange={() => {
            // TODO
          }}
        />
        <Button
          variant='outlined'
          sx={{ ml: 1 }}
          onClick={() => {
            // TODO
          }}
        >
          Test
        </Button>
      </Box>
    </Container>
  );
}

export default App
