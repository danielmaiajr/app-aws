import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Counter from './Counter';

const Product = (props) => {
	const classes = useStyles();

	const { product } = props;

	return (
		<div className={classes.root}>
			<img src={product.image_url} alt={product.product_name} className={classes.image} />
			<div className={classes.imageOverlay} />
			<div className={classes.price}>R$ {product.price},69</div>

			<div className={classes.name}>{product.product_name}</div>

			<div className={classes.button}>
				<Counter product={product} />
			</div>
		</div>
	);
};

export default Product;

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		flexDirection: 'column',
		width: '120px',
		position: 'relative'
	},
	image: {
		height: 100,
		width: 100,
		padding: 10,

		borderRadius: 8 //CHANGE: THEME
	},
	imageOverlay: {
		height: 120,
		width: 120,
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: 8 //CHANGE: THEME
	},

	price: {
		fontSize: 18,
		fontWeight: 500
	},
	name: {},
	button: {
		width: '100%'
	}
}));
