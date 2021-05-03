import { ADD_ITEMS_CART, SUB_ITEMS_CART, DELETE_CART_ITEM, CHANGE_SHOW_CART, GET_CART_ITEMS } from '../types';

import cart from '../../assets/data/cart';

export const getCartItems = () => (dispatch) => {
	dispatch({
		type: GET_CART_ITEMS,
		payload: cart
	});
};

export const addItemsCart = (item) => (dispatch) => {
	dispatch({
		type: ADD_ITEMS_CART,
		payload: item
	});
};

export const subItemsCart = (item) => (dispatch) => {
	dispatch({
		type: SUB_ITEMS_CART,
		payload: item
	});
};

export const deleteItemsCart = () => (dispatch) => {
	dispatch({
		type: DELETE_CART_ITEM,
		payload: []
	});
};

export const changeShowCart = () => (dispatch) => {
	dispatch({
		type: CHANGE_SHOW_CART,
		payload: null
	});
};
