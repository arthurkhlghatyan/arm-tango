import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Navigation = ({ siteTitle }) => (
  <Navbar
    className="navbar-custom"
    variant="dark"
    expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/">
        {siteTitle}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="Festival">
            <NavDropdown.Item as={Link} to="/">DJs</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/">Orchestra</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/">Maestros</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/">Packages</Nav.Link>
          <Nav.Link as={Link} to="/">Media</Nav.Link>
          <Nav.Link as={Link} to="/">About Armenia</Nav.Link>
          <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
};

Navigation.defaultProps = {
  siteTitle: ``,
};

export default Navigation;
