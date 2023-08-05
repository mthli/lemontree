import React from 'react'
import ReactDOM from 'react-dom/client'

import { GoogleOAuthProvider } from '@react-oauth/google'

import App from './App'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='304531247476-58f940f3b0dgrupg95cdo8b51fspupdv.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
)
