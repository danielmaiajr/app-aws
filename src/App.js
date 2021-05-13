import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrgerPage';
import ProfilePage from './pages/ProfilePage';
import AddressPage from './pages/AddressPage';

const theme = createMuiTheme({
	palette: {
		background: {
			default: '#FFF'
		}
	}
});

const App = () => {
	const classes = useStyles();

	return (
		<AmplifyAuthenticator>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router>
					<NavBar />
					<div className={classes.root}>
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
						</Switch>
					</div>
				</Router>
			</ThemeProvider>
		</AmplifyAuthenticator>
	);
};

export default App;

const useStyles = makeStyles({
	root: {
		marginTop: 80
	}
});
/* <AddAddress
		address={{
			address_id: uuidv4(),
			neightborhood: 'Lagoa',
			street: 'Avenida Jose Carlos Paes',
			num: '600',
			cep: '27930800'
		}}
	/> */
