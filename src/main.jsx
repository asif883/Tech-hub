import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router.jsx'
import Context from './AuthPovider/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Context>
      <RouterProvider router={router}></RouterProvider>
   </Context>
  </StrictMode>,
)
