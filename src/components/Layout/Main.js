import React, { Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import routes from '@/router';

function Main(props) {

	const { history } = props;
	return (
		<div>
				<Suspense fallback={<div> Загрузка </div>}>
					<Switch>
							{
								routes.map(route => (
									<Route
										key={ route.route }
										history={ history }
										component={ route.component }
										exact={ route.isExact }
										path={ route.route }
									/>
								))
							}
					</Switch>
				</Suspense>
		</div>
	);
};

export default withRouter(Main);

