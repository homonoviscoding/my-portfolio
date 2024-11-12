// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDom from 'react-dom'
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
