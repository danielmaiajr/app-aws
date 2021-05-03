import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { getCartItems } from '../redux/actions/cartActions';

import CartItem from './CartItem';

const Cart = () => {
	const classes = useStyles();

	const dispatch = useDispatch();
	const { cartItems } = useSelector((state) => state.cart);

	useEffect(
		() => {
			console.log('Renderizando o carrinho');
			dispatch(getCartItems());
		},
		[ dispatch ]
	);

	let num = 0;
	if (cartItems.length > 0) {
		cartItems.forEach((n) => {
			num += n.quantity * n.price;
		});
	}

	return (
		<div className={classes.root}>
			<div className={classes.cartScroll}>{cartItems.map((item, i) => <CartItem key={i} product={item} />)}</div>
			<div className={classes.cartCheckout}>
				<div className={classes.cartCheckoutTotal}>Total: R$ {num}</div>
				<div to="/checkout" className={classes.cartCheckoutButton}>
					Finalizar
				</div>
			</div>
		</div>
	);
};

export default Cart;

const useStyles = makeStyles({
	root: {
		height: 'calc(100vh - 80px)',
		width: 430,
		position: 'fixed',
		top: 80,
		right: 0,
		boxShadow: '-3px 0 10px -5px rgb(0 0 0 / 30%)',
		background: '#fff'
	},

	cartScroll: {
		margin: 'auto',
		width: '100%',
		overflowY: 'auto',
		overflowX: 'hidden',
		height: ' calc(100% - 100px)',
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
		}
	},

	cartCheckout: {
		bottom: 0,
		right: 0,
		width: '100%',
		backgroundColor: 'rgb(245, 245, 245)',
		padding: '30px 0',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	cartCheckoutTotal: {
		marginLeft: '30px',
		fontWeight: 'bold'
	},
	cartCheckoutButton: {
		backgroundColor: '#ea1d2c',
		color: '#FFF',
		fontWeight: 'bold',
		padding: '10px 30px',
		marginRight: '30px',
		borderRadius: '5px'
	}
});
