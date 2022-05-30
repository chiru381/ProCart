import React from "react";
import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Pro Cart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/mobiles">
                Mobiles
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/laptops">
                Laptops
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/watches">
                Watches
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/upload">
                Product Upload
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/react">
                React
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/node">
                Node
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/express">
                Express
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/mongodb">
                Mongodb
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/cart">
                <i className="fa fa-shopping-cart">
                  <span className="badge badge-success">2</span>
                </i>
              </Link>
            </li>

            <li className="nav-item active text-right">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item active text-right">
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item active text-right">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
