import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {AdminRoute} from "./components/AdminSignup";
import { Home } from './components/Home';
import { StudentRoute } from './components/StudentSignup';
import { StudentSignin } from './components/StudentSignin';
import { AdminSignin } from './components/AdminSignin';

function App() {

  
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin/signup' element={<AdminRoute />} />
            <Route path='/student/signup' element={<StudentRoute />} />
            <Route path='/student/signin' element={<StudentSignin />} />
            <Route path='/admin/signin' element={<AdminSignin />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
