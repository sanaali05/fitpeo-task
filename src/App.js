import React from 'react'
import Admin_Layout from './components/admin/Admin_Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/admin _css/dashboard.css'
import './css/style.css'
import { Route, Routes } from 'react-router-dom'
import Admin_dashboard from './components/admin/Admin_dashboard'
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Admin_Layout />}>
        <Route index element={<Admin_dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App