import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Cart from '../components/Cart';
import Main from '../components/Main';

const HomePage = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Main />
			<Cart />
		</div>
	);
};

export default HomePage;

const useStyles = makeStyles({
	root: {
		display: 'flex'
	}
});
