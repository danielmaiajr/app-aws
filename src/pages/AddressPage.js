import React, { useState, useEffect } from 'react';

import CenterContainer from '../components/Container/CenterContainer';
import Address from '../components/Address';
import AddAddress from '../components/AddAddress';

const AddressPage = () => {
	const [ show, setShow ] = useState(true);
	const [ address, setAddress ] = useState({});

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<CenterContainer>
			{show ? (
				<Address setAddress={setAddress} show={show} setShow={setShow} />
			) : (
				<AddAddress address={address} show={show} setShow={setShow} />
			)}
		</CenterContainer>
	);
};

export default AddressPage;
