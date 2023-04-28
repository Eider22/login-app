import { Navigate } from 'react-router-dom';
import manageStorage from '../services/storageService';

export const PublicRoutes = ({children}) => {

    const user=manageStorage.getUser()
    return (!user) ? children : <Navigate to="/"/>

}
