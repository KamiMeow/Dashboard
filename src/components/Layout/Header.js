import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <h2>
				Header
			</h2>
			<Link to="/">
				<span> Home </span>
			</Link>
			<Link to="/about">
				<span> About </span>
			</Link>
    </header>
  );
};

export default Header;