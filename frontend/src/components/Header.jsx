import React from "react";
import LogSigBtn from "../homepage/LoginBtn";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/auth";
import "./header.css";

function Header() {
  const auth = useAuth();
  const history = useHistory();

  function logout() {
    auth.removeToken();
    auth.saveAdoptedPet([]);
    auth.saveFosteredPet([]);
    auth.saveLikedPet([]);
    auth.saveIsLoggedIn(false);
    history.push("/");
  }

  return (
    <header id="header">
      {/* <div className="d-block"></div> */}
      {auth.token ? (
        <div className="d-flex align-items-center justify-content-evenly flex-grow-1">
          <div>
            <button onClick={logout} className="btn btn-link text-danger">
              Logout
            </button>
            <Link className="link text-dark" to={"/settings/" + auth.userId}>
              Settings
            </Link>
            {auth.userType === 1 ? (
              <Link className="link text-dark ms-3" to={"/dashboard"}>
                Dashboard
              </Link>
            ) : (
              <></>
            )}
          </div>

          <h1 className="text-secondary text-center display-4">Pet Adoption Agency</h1>

          <div className="d-flex flex-column justify-content-center align-items-center">
            <i class="fas fa-paw"></i>
            <Link to="/">
              <button className="text-dark btn btn-link">Home</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <i class="fas fa-paw"></i>
          <h1 className="me-5 display-5">Welcome To The Pet Adoption Agency</h1>
          <LogSigBtn />
        </>
      )}
    </header>
  );
}

export default Header;
