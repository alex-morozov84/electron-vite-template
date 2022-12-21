import React from 'react'
import {createRoot} from "react-dom/client";
import '../shared/assets/index.css'
import App from "./App";

const container = document.getElementById('root') as HTMLElement

const root = createRoot(container)

if (!container) {
  throw new Error('Root container not found. React app mount failed')
}
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
