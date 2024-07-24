import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import DrawerComp from './components/DrawerComp/DrawerComp';

import { Outlet } from "react-router-dom";

function App() {


  return (
    <>
      <div className='flex'>
        <DrawerComp />
        <Outlet></Outlet>
      </div>

    </>
  )
}

export default App
