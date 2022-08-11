import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import { BiArchive } from "react-icons/bi";

import Auth from '../../utils/auth';

const styles = {
  Nav: {
    background: "#f3233a",
  },
  NavLink: {
    color: "#F5F8F7",
  },
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <Nav style={styles.Nav}  className="justify-content-end me-auto" expand="lg">
      <Nav.Item>
        <Nav.Link style={styles.NavLink} as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link style={styles.NavLink} as={Link} to="/profile">
          Profile
        </Nav.Link>
      </Nav.Item>
      {Auth.loggedIn() ? (
        <>
          <Nav.Item>
            <Nav.Link style={styles.NavLink} onClick={logout}>
              Logout
            </Nav.Link>
          </Nav.Item>
        </>
      ) : (
        <>
          <Nav.Item>
            <Nav.Link style={styles.NavLink} as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={styles.NavLink} as={Link} to="/signup" >
              Signup
            </Nav.Link>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
};

export default Header;
