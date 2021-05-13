import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';

import { getProduct } from '../redux/actions/productActions';
import { getCartItems } from '../redux/actions/cartActions';

import Product from './Product';

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
		<div className={classes.root}>
			<h1>Mais Vendidos</h1>
			<div className={classes.content}>
				{product.map((product) => <Product key={product.product_id} product={product} />)}
			</div>
		</div>
	);
};

export default Main;

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: 'calc(100% - 430px - 2* 300px)',
		padding: '0 300px'
	},
	content: {
		display: 'flex',
		width: '80%'
	}
});
