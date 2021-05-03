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
			<div>Logo</div>
			<div>Search</div>
			<div>Address</div>
			<div>Menu</div>
			<button onClick={() => signOut()} className={classes.signOut}>
				Sign Out
			</button>
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		background: '#f7f7f7',
		boxShadow: 'inset 0 -1px 0 #dcdcdc',
		position: 'fixed',
		top: 0,
		left: 0,
		height: 80,
		padding: '0 80px',
		width: 'calc(100% - 160px)',
		zIndex: 100
	},
	signOut: {
		border: 'none',
		backgroundColor: 'transparent'
	}
});
