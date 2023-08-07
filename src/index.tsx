import React from 'react'
import ReactDOM from 'react-dom/client'

import { GoogleOAuthProvider } from '@react-oauth/google'

import App from './App'
import './index.css'

// FIXME (Matthew Lee) defined as env would be better.
const clientId = '1098077489169-lbdsrj1l2hk3f0ot3j0o33q89iaj1cdr.apps.googleusercontent.com'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
