import { Route, Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const isAuthenticated = useSelector(({auth}) => auth.isAuthenticated)
  return (
	<Route
		{...rest}
		render={(props) =>
			!isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
		}
	/>
)};

export default PrivateRoute;
