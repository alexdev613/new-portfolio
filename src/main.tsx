import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './App'
import 'aos/dist/aos.css'
import AOS from 'aos'

import { Toaster } from 'react-hot-toast';

AOS.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster
      containerClassName='mt-10'
      position='top-right'
      reverseOrder={false}
    />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
