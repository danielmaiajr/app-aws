import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import NavBar from '../components/NavBar';
import Cart from '../components/Cart';
import Main from '../components/Main';

const HomePage = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<NavBar />
			<div className={classes.root}>
				<Main />
				<Cart />
			</div>
		</React.Fragment>
	);
};

export default HomePage;

const useStyles = makeStyles({
	root: {
		display: 'flex'
	}
});
