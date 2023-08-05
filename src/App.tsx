import Container from '@mui/material/Container'

import { GoogleLogin } from '@react-oauth/google'

function App() {
  return (
    <Container
      maxWidth='xs'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        pt: 8,
      }}
    >
      <GoogleLogin
        onSuccess={response => {
          // TODO
        }}
        onError={() => {
          // TODO
        }}
        width={336}
      />
    </Container>
  );
}

export default App
