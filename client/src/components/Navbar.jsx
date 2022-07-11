import React from "react";
import { Link } from "react-router-dom";

let Navbar = () => {
  return (
    <>

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
      </nav> */}

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <Link className="navbar-brand" to="/">
          Pro Cart
        </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
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
            <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Chiru
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="dropdown-item" to="/userprofile">
                User Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/orderhistory">
                Order History
              </Link>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <Link className="dropdown-item" to="/signout">
                Sign Out
              </Link>
            </li>
          </ul>
        </li>
            <li className="nav-item active text-right">
              
            </li>
          </ul>
      
    </div>
  </div>
</nav>
    </>
  );
};
export default Navbar;
