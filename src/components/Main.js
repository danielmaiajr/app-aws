import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';

import { getProduct } from '../redux/actions/productActions';
import { getCartItems } from '../redux/actions/cartActions';

import Product from './Product';
import { Typography } from '@material-ui/core';

const Main = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);

	useEffect(
		() => {
			dispatch(getProduct());
			dispatch(getCartItems());
			window.scrollTo({ top: 0, behavior: 'smooth' });
		},
		[ dispatch ]
	);

	return (
		<React.Fragment>
			<Typography variant="h2">Mais Vendidos</Typography>
			<div className={classes.content}>
				{product.map((product) => <Product key={product.product_id} product={product} />)}
			</div>
		</React.Fragment>
	);
};

export default Main;

const useStyles = makeStyles((theme) => ({
	content: {
		display: 'flex',
		justifyContent: 'space-between'
	}
}));
