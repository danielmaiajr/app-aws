import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Logo from './Logo';
import Search from './Search';
import SelectedAddress from './SelectedAddress';
import Profile from './Profile';
import Container from '../Container/Container';

export default function NavBar() {
	const classes = useStyles();

	return (
		<Container styles={classes.root}>
			<Logo />
			<Search />
			<SelectedAddress />
			<Profile />
		</Container>
	);
}

const useStyles = makeStyles(() => ({
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
		zIndex: 100
	}
}));
