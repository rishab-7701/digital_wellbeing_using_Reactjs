import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Layout from './Layout'
import ScreenTime from './components/ScreenTime/ScreenTime.jsx'
import BreakReminder from './components/BreakReminder/BreakReminder.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import HomePage from './components/Home/Home.jsx'

const router =createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"",
        element:<HomePage/>
      },
      {
        path:"ScreenTime",
        element:<ScreenTime/>
      },
      {
        path:"BreakReminder",
        element:<BreakReminder/>
      }
    ]
  }
  
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
