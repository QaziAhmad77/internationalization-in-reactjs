/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import i18n from "./i18n.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <React.Suspense fallback="Loading...">
      <App />
    </React.Suspense>
  </StrictMode>,
)
