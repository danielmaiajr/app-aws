import { GET_ADDRESS, POST_ADDRESS, DELETE_ADDRESS, PUT_ADDRESS } from '../types';

import { v4 as uuidv4 } from 'uuid';
import { address } from '../../assets/data/address';

const ADDRESS_ID = uuidv4();

export const getAddress = () => (dispatch) => {
	dispatch({
		type: GET_ADDRESS,
		payload: address
	});
};

export const postAddress = (obj) => (dispatch) => {
	dispatch({
		type: POST_ADDRESS,
		payload: {
			address_id: ADDRESS_ID,
			neightborhood: obj.neightborhood,
			street: obj.street,
			num: obj.num,
			cep: obj.cep
		}
	});
};

export const putAddress = (fields) => (dispatch) => {
	dispatch({
		type: PUT_ADDRESS,
		payload: fields
	});
};

export const deleteAddress = (id) => (dispatch) => {
	dispatch({
		type: DELETE_ADDRESS,
		payload: id
	});
};
