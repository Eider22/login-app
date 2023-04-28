import React, { useContext } from 'react'
import { AuthContext } from '../contexts/authContext'
import { Navigate } from 'react-router-dom';
import manageStorage from '../services/storageService';

export const PrivateRoutes = ({children}) => {

    const user=manageStorage.getUser()
    return (user) ? children : <Navigate to="/login"/>

}
