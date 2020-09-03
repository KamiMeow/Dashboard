import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from '../../views/Home';
import About from '../../views/About';

function Main(props) {
	const { history } = props

	return (
		<div>
			<Switch>
				<Route history={history} path="/" component={Home}/>
				<Route history={history} path="/about" component={About}/>
			</Switch>
		</div>
	);
};

export default withRouter(Main);

