import React from 'react'
import {createRoot} from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import {ErrorBoundary} from "@renderer/app/providers/ErrorBoundary";
import {StoreProvider} from "@renderer/app/providers/StoreProvider";
import {ConfigProvider as AntDConfigProvider} from "antd";
import ruRU from 'antd/lib/locale/ru_RU'

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
          <AntDConfigProvider
            locale={ruRU}
            theme={{
              token: {
                // colorPrimary: theme.colors.adminPanel.sidebar,
                // fontFamily: `var('--font-roboto')`
              },
            }}
          >
            <App/>
          </AntDConfigProvider>
        </ErrorBoundary>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
)
