import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Header = ({ posterFluid }) => (
  <header className="masthead text-center text-white">
    <Img fluid={posterFluid} />
  </header>
);

export default Header;
