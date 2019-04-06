import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navigation = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
    <div className="container">
      <Link className="navbar-brand" to="/">
        {siteTitle}
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Festival</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Packages</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Media</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">About Armenia</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

Navigation.propTypes = {
  siteTitle: PropTypes.string,
};

Navigation.defaultProps = {
  siteTitle: ``,
};

export default Navigation;
