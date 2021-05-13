import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from './pages/HomePage';

const App = (props) => {
	return (
		<AmplifyAuthenticator>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<HomePage />
				{/* <Address /> */}
				{/* <AddAddress
				address={{
					address_id: uuidv4(),
					neightborhood: 'Lagoa',
					street: 'Avenida Jose Carlos Paes',
					num: '600',
					cep: '27930800'
				}}
			/> */}
				{/* <PersonalData /> */}
				{/* <Menu /> */}
			</ThemeProvider>
		</AmplifyAuthenticator>
	);
};

export default App;

const theme = createMuiTheme({
	palette: {
		background: {
			default: '#FFF'
		}
	}
});
