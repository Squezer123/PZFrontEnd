import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { SytemContextProvider } from "./Context/ContextProvider.tsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SytemContextProvider>
      <App />
    </SytemContextProvider>
  </React.StrictMode>,
)
