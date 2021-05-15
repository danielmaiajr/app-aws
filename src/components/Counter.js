import React from 'react';

import MyButton from './MyButton';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { addItemsCart, subItemsCart } from '../redux/actions/cartActions';

const Counter = ({ product }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);

	const exist = cartItems.find((item) => item.product_id === product.product_id);

	const HandleSubItemsCart = (e) => {
		e.preventDefault();
		dispatch(subItemsCart(product));
	};
	const HandleAddItemsCart = (e) => {
		e.preventDefault();
		dispatch(addItemsCart(product));
	};

	return (
		<div className={classes.container}>
			{exist ? (
				<React.Fragment>
					<div className={classes.innerButtons}>
						<MyButton onClick={HandleSubItemsCart}>
							<RemoveIcon color="inherit" fontSize="small" />
						</MyButton>
					</div>

					<div className={classes.innerButtons}>{exist ? exist.quantity : 0}</div>

					<div className={classes.innerButtons}>
						<MyButton onClick={HandleAddItemsCart}>
							<AddIcon color="inherit" fontSize="small" />
						</MyButton>
					</div>
				</React.Fragment>
			) : (
				<MyButton onClick={HandleAddItemsCart}>Adicionar</MyButton>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	cart: state.cart
});

const mapDispatchToProps = {
	addItemsCart,
	subItemsCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		border: `solid 1px ${theme.palette.divider}`,
		borderRadius: 4,
		width: '100%',
		height: 30
	},
	innerButtons: {
		display: 'flex',
		alignItems: 'center'
	}
}));
