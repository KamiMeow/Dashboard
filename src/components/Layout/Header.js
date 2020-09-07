import React from 'react';
import { Link } from 'react-router-dom';
import routes from '@/router';

function Header(props) {

	console.log(routes);
	const links = routes.map( (route, i) => (
		
		<Link 
			key={route.route + i} 
			to={route.route} 
			>
			<span> {route.title} </span>
		</Link>
	));

  return (
    <header>
      <h2>
				Header
			</h2>
			{links}
    </header>
  );
};

export default Header;