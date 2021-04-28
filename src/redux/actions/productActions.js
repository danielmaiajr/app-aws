import { GET_PRODUCT } from '../types';
import { API, graphqlOperation } from 'aws-amplify';

import { listProducts as ListProducts } from '../../graphql/queries';

export const getProduct = () => async (dispatch) => {
	try {
		const productData = await API.graphql(graphqlOperation(ListProducts));
		console.log('productData:', productData);
		dispatch({
			type: GET_PRODUCT,
			payload: productData.data.listProducts.items
		});
	} catch (err) {
		console.log('error fetching product...', err);
	}
};
