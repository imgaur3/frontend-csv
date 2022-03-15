import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./header-style.css";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light text-center">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Cricket</span>
          <Container>
            <Nav className="ml-auto">
              <NavLink className="nav-link" to="/score">
                <button className="px-2 btn btn-link">SCORE</button>
              </NavLink>
              <NavLink className="nav-link" to="/fielding">
                <button className="px-2 btn btn-link">FIELDING</button>
              </NavLink>
              <NavLink className="nav-link" to="/batting">
                <button className="px-2 btn btn-link">BATTING</button>
              </NavLink>
            </Nav>
          </Container>
        </div>
      </nav>
    </>
  );
};

export default Header;
