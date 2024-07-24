import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom';
import DrawerComp from './components/DrawerComp/DrawerComp.jsx';
import DashBoard from './components/dashboard/Dashboard.jsx';
import Inventory from './components/Inventory/Inventory.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='dashbord' element={<DashBoard/>}/>
      <Route path='inventory' element={<Inventory/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
)
