import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				a: {
					textDecoration: 'none'
				}
			}
		},
		MuiButton: {
			// Name of the rule
			contained: {
				boxShadow: 'none',
				padding: '15px 0',
				textTransform: 'capitalize',
				fontSize: 16,
				borderRadius: 4
			}
		}
	},
	typography: {
		h2: {
			fontSize: 25,
			fontWeight: 500,
			margin: '30px 0'
		}
	},
	palette: {
		secondary: {
			main: '#EA1D2C'
		},
		tonalOffset: 0,
		background: {
			default: '#FFF'
		},
		text: {
			primary: '#5A5353',
			secondary: '#717171',
			hint: '#A6A6A6'
		},
		divider: '#E4E1E1'
	},
	spacing: 4
});
