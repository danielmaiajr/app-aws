import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Logo from './Logo';
import Search from './Search';
import SelectedAddress from './SelectedAddress';
import Profile from './Profile';

export default function NavBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container className={classes.container}>
				<Logo />
				<Search />
				<SelectedAddress />
				<Profile />
			</Container>
		</div>
	);
}

const useStyles = makeStyles(() => ({
	root: {
		height: 80,
		width: '100%',
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 100,
		background: '#f7f7f7',
		boxShadow: 'inset 0 -1px 0 #dcdcdc'
	},
	container: {
		height: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
}));
