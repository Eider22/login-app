import React, { useContext } from 'react'
import { AuthContext } from '../contexts/authContext';
import { Navigate } from 'react-router-dom';

export const PublicRoutes = ({children}) => {

    const {isAuthenticated} = useContext(AuthContext);
    return (!isAuthenticated) ? children : <Navigate to="/"/>

}
