import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './theme';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrgerPage';
import ProfilePage from './pages/ProfilePage';
import AddressPage from './pages/AddressPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
	return (
		<AmplifyAuthenticator>
			<ThemeProvider theme={theme}>
				<CssBaseline />

				<Router>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>

						<Route exact path="/order">
							<OrderPage />
						</Route>

						<Route exact path="/profile">
							<ProfilePage />
						</Route>

						<Route exact path="/address">
							<AddressPage />
						</Route>

						<Route exact path="/checkout">
							<CheckoutPage />
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</AmplifyAuthenticator>
	);
};

export default App;
