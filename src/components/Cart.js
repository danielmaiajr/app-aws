import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { getCartItems } from '../redux/actions/cartActions';

import CartItem from './CartItem';
import Divider from './Divider';

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
			<div className={classes.title}>Falta R$ {99 - num},31 para o pedido mínimo</div>
			<Divider />
			<div className={classes.cartScroll}>{cartItems.map((item, i) => <CartItem key={i} product={item} />)}</div>
			<Divider />
			<div className={classes.cartCheckout}>
				<div className={classes.cartCheckoutSubTotal}>
					<div>Subtotal</div>
					<div>R$ {num},69</div>
				</div>
				<div className={classes.cartCheckoutSubTotal}>
					<div>Taxa de entrega</div>
					<div>R$ 0,00</div>
				</div>
				<div className={classes.cartCheckoutTotal}>
					<div>Total</div>
					<div>R$ {num},69</div>
				</div>
				<button className={classes.cartCheckoutButton}>Escolher forma de pagamento</button>
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
	title: {
		backgroundColor: '#F7F7F7',
		color: '#8A8585',
		fontSize: 12,
		padding: '12px 30px',
		margin: '15px 30px'
	},
	cartScroll: {
		margin: 'auto',
		width: '100%',
		height: 'calc(100% - 260px)',
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
		}
	},

	cartCheckout: {
		position: 'absolute',
		bottom: 20,
		left: 0,
		width: 'calc(100% - 60px)',
		padding: '0 30px',
		display: 'flex',
		flexDirection: 'column'
	},
	cartCheckoutSubTotal: {
		fontSize: 16,
		display: 'flex',
		justifyContent: 'space-between',
		padding: '4px 0',
		color: '#717171'
	},
	cartCheckoutTotal: {
		fontSize: 16,
		display: 'flex',
		justifyContent: 'space-between',
		padding: '4px 0',
		color: '#3F3F3F',
		fontWeight: 'bold'
	},
	cartCheckoutButton: {
		border: 'none',
		backgroundColor: '#ea1d2c',
		color: '#FFF',
		fontSize: 16,
		fontWeight: 'bold',
		marginTop: 15,
		padding: '15px 0px',
		borderRadius: '4px',
		'&:hover': {
			cursor: 'pointer'
		}
	}
});
