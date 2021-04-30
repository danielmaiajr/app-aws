import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from '../components/Navigation';
import Cart from '../components/Cart';
import Main from '../components/Main';

const HomePage = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Navigation />
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
