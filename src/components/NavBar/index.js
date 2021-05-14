import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import Search from './Search';
import SelectedAddress from './SelectedAddress';
import Profile from './Profile';

export default function NavBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Logo />
			<Search />
			<SelectedAddress />
			<Profile />
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
		padding: '0 300px',
		width: 'calc(100% - 600px)',
		zIndex: 100,
		'@media (min-width: 1024px)': {
			padding: '0 40px',
			width: 'calc(100% - 80px)'
		}
	}
});
