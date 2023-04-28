import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import LoginComponent from '../components/LoginComponent'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
  return (
    <Routes>
          <Route 
            path="/"
            element={
                <PrivateRoutes>
                    <Home/>
                </PrivateRoutes>
                
            }/>
          <Route
            path="/login"
            element={
                <PublicRoutes>
                    <LoginComponent/>
                </PublicRoutes>
            }/>
    </Routes>
  )
}
