import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Auth } from 'aws-amplify';

export default function Navigation() {
	const classes = useStyles();

	const signOut = async () => {
		try {
			await Auth.signOut();
		} catch (error) {
			console.log('error signing out: ', error);
		}
	};

	return (
		<div className={classes.root}>
			<button onClick={() => signOut()} className={classes.signOut}>
				Sign Out
			</button>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'flex-end',
		background: '#f7f7f7',
		boxShadow: 'inset 0 -1px 0 #dcdcdc',
		height: 80,
		padding: '0 30px'
	},
	signOut: {
		border: 'none',
		backgroundColor: 'transparent'
	}
});
