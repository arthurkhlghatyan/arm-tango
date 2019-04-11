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
            <NavDropdown.Item as={Link} to="/about-armenia">About Armenia</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/djs">DJs</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/orchestra">Orchestra</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/maestros">Teachers/Dancers</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Packages">
            <NavDropdown.Item as={Link} to="/packages">
              Festival and Tour packages
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/workshops-and-milongas">
              Workshops and milongas
            </NavDropdown.Item>
          </NavDropdown>
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
