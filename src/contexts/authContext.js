import { createContext, useState } from "react";
import React from 'react'

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    //APP STATE
    const [usuario, setusuario] = useState({
        token : "",
        firstName : "",
        secondName : "",
        email: ""
    });
    const [authError, setAuthError] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);



    const login = ({user, password}) => {
        //función para autenticar
        const authenticatedusuario = null;

        if (authenticatedusuario) {
            //guardar usuario en el estado
            setusuario(authenticatedusuario);
            //poner en true el estado autenticado
            setIsAuthenticated(true);
            //guardar usuario en el local storage
            localStorage.setItem('usuario', JSON.stringify(authenticatedusuario));
        } else {
            //marcar error en true si es null
            setAuthError(true)
        }
        //guardar usuario en el estado
        setusuario(authenticatedusuario)
        //guardar usuario en el local storage
        localStorage.setItem('usuario', JSON.stringify(usuario));
    }

    const logout = () => {
        //marcar el usuario como no autenticado
        isAuthenticated(false);
        //regresar el usuario al estado inicial
        setusuario({
            token : "",
            firstName : "",
            secondName : "",
            email: ""
        });
    };


    return (
        <AuthContext.Provider value={{
            usuario,
            authError,
            isAuthenticated,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>)
}
