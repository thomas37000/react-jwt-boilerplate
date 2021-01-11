import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/login">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/logout">Disconnect</Link>
          </li>
          <li>
            <Link to="/account">Create your account</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
