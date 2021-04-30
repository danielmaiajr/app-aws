import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Cart = () => {
	const classes = useStyles();
	return <div className={classes.root}>Cart</div>;
};

export default Cart;

const useStyles = makeStyles({
	root: {
		height: 'calc(100vh - 80px)',
		width: 430,
		position: 'fixed',
		right: 0,
		boxShadow: '-3px 0 10px -5px rgb(0 0 0 / 30%)',
		zIndex: '9993',
		background: '#fff'
	}
});
