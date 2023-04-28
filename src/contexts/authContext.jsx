import { createContext, useState } from "react";
import React from "react";
import { checkAuthentication } from "../services/api.service";
import manageStorage from "../services/storageService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //APP STATE
  let [usuario, setusuario] = useState({});
  const [authError, setAuthError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const login = async (user, password) => {
    //función para autenticar
    const authenticatedusuario = await checkAuthentication(user, password);

    if (!authenticatedusuario) {
      setAuthError(true);
      return;
    }
    //guardar usuario en el estado
    usuario = authenticatedusuario;
    //TODO: No funciona- arreglar →setusuario(authenticatedusuario);
    setIsAuthenticated(true);
    //guardar usuario en el local storage
    manageStorage.setUser(usuario);
  };

  const logout = () => {
    //marcar el usuario como no autenticado
    isAuthenticated(false);
    //regresar el usuario al estado inicial
    setusuario({
      token: "",
      firstName: "",
      secondName: "",
      email: "",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        authError,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
