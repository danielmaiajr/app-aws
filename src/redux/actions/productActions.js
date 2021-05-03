import { GET_PRODUCT } from '../types';

// import { API, graphqlOperation } from 'aws-amplify';
// import { listProducts as ListProducts } from '../../graphql/queries';

import { products } from '../../assets/data/products';

export const getProduct = () => async (dispatch) => {
	dispatch({
		type: GET_PRODUCT,
		payload: products
	});
	/* 	try {
		const productData = await API.graphql(graphqlOperation(ListProducts));
		console.log('productData:', productData);
		dispatch({
			type: GET_PRODUCT,
			payload: productData.data.listProducts.items
		});
	} catch (err) {
		console.log('error fetching product...', err);
	} */
};
