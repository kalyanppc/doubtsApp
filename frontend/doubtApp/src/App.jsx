import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {AdminRoute} from "./components/Admin";
import { Home } from './components/Home';
import { StudentRoute } from './components/Student';

function App() {

  
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<AdminRoute />} />
            <Route path='/student' element={<StudentRoute />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
