import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header className="masthead text-center text-white">
    <div className="masthead-content">
      <div className="container">
        <h1 className="masthead-heading mb-0">1st International</h1>
        <h2 className="masthead-subheading mb-0">Tango Festival in Armenia</h2>
        <Link to="/" className="btn btn-primary btn-xl rounded-pill mt-5">
          Book Now
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
