import React from 'react';
import { Link } from 'gatsby';
import Image from './image';

const Header = ({ posterFluid }) => (
  <header className="masthead text-center text-white">
    <Image fluid={posterFluid} />
  </header>
);

export default Header;
