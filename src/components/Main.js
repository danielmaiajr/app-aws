import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';

import { getProduct } from '../redux/actions/productActions';

const Main = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product);

	useEffect(
		() => {
			dispatch(getProduct());
			window.scrollTo({ top: 0, behavior: 'smooth' });
		},
		[ dispatch ]
	);

	return <div className={classes.root}>{product.map((prod) => <h1 key={prod.id}>{prod.product_name}</h1>)}</div>;
};

export default Main;

const useStyles = makeStyles({
	root: {
		display: 'flex',
		width: 'calc(100% - 430px - 120px)',
		padding: '35px 60px 0'
	}
});
