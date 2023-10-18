import React from 'react'
import Admin_navbar from './Admin_navbar'
import { Outlet } from 'react-router-dom'

const Admin_Layout = () => {
  return (
    <>
    <Admin_navbar/>
    <Outlet/>
    </>
  )
}

export default Admin_Layout
