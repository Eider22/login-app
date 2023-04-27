import { createContext, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getUser, removeUser, setUser } from "../services/storageService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const user = getUser();

  const login = (user) => {
    setUser(user);
    navigate("/");
  };

  const logout = () => {
    removeUser();
    navigate("/login");
  };

  const auth = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) return <Navigate to="/login" />;

  return children;
};

const AuthLogin = ({ children }) => {
  const auth = useAuth();
  if (auth.user) return <Navigate to="/" />;

  return children;
};
export { AuthProvider, ProtectedRoute, AuthLogin, useAuth };
