import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import manageStorage from "../services/storageService";

const NavBar = () => {
  const auth = useContext(AuthContext);
  const user = manageStorage.getUser();

  const logout = () => {
    console.log(auth.usuario);
    auth.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          REST-aurante
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-outline-success" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
            <h4 className="me-4">
                <small className="text-body-secondary">Hola, {user?.firstName}</small>
            </h4>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
      </div>
    </nav>
  );
};

export default NavBar;