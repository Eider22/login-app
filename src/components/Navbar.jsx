import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import manageStorage from "../services/storageService";
import { getFreeGames } from "../services/api.service";

const NavBar = () => {
  const auth = useContext(AuthContext);
  const user = manageStorage.getUser();
  const [searchInput, setSearchInput] = useState("");
  const searchInputRef = useRef(null);

  const filterHandler = (event)=>{
    event.preventDefault();
    const value = searchInputRef.current.value;
    setSearchInput(value);
  }

  const logout = () => {
    console.log(auth.usuario);
    auth.logout();
  };

  useEffect(() => {
    console.log("searchInput changed", searchInput);
    getFreeGames(searchInput);
  }, [searchInput]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          FREE-games
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
                <small className="text-body-secondary">Hola, {user?.firstName} 👋</small>
            </h4>
            <form className="d-flex" role="search">
              <input
               ref={searchInputRef}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button onClick={filterHandler} className="btn btn-outline-success">
                Search
              </button>
            </form>
          </div>
      </div>
    </nav>
  );
};

export default NavBar;
