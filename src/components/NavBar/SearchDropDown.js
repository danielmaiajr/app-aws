import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector } from 'react-redux';

import CartItem from '../CartItem';

const SearchDropDown = () => {
	const classes = useStyles();

	const product = useSelector((state) => state.product);

	return (
		<div className={classes.root}>
			<div className={classes.cartScroll}>{product.map((prod, i) => <CartItem key={i} product={prod} />)}</div>
		</div>
	);
};

export default SearchDropDown;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		width: 430,
		top: 52,
		right: 0,
		backgroundColor: theme.palette.background.default,
		boxShadow: '0 4px 8px rgb(0 0 0 / 10%)',
		border: '1px solid #f7f7f7',
		borderRadius: 4
	},
	cartScroll: {
		width: '100%',
		overflowY: 'auto',
		overflowX: 'hidden',
		'&::-webkit-scrollbar': {
			width: '5px'
		},
		/* Track */
		'&::-webkit-scrollbar-track': {
			background: '#fff'
		},
		/* Handle */
		'&::-webkit-scrollbar-thumb': {
			background: '#888'
		},
		/* Handle on hover */
		'&::-webkit-scrollbar-thumb:hover': {
			background: '#555'
		},
		height: 'calc(100vh - 400px)',
		[theme.breakpoints.down('lg')]: {
			height: 'calc(100vh - 200px)'
		}
	}
}));
