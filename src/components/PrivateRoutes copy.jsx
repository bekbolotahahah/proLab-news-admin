import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const profileData = JSON.parse(localStorage.getItem('data'))

  return profileData ? <Outlet/> : <Navigate to="/login"/> 
}

export default PrivateRoutes