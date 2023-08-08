import React from 'react'
import ReactDOM from 'react-dom/client'

import { GoogleOAuthProvider } from '@react-oauth/google'
import { GOOGLE_OAUTH_CLIENT_ID } from './constants'

import App from './App'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
