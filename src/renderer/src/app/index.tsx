import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ErrorBoundary } from '@renderer/app/providers/ErrorBoundary'
import { StoreProvider } from '@renderer/app/providers/StoreProvider'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Root container not found. React app mount failed')
}

const root = createRoot(container)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
)
