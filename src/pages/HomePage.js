import React from 'react';

import Cart from '../components/Cart';
import LeftContainer from '../components/Container/LeftContainer';
import Main from '../components/Main';

const HomePage = () => {
	return (
		<LeftContainer>
			<Main />
			<Cart />
		</LeftContainer>
	);
};

export default HomePage;
