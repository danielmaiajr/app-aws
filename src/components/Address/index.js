import React, { useState, useEffect } from 'react';

import ShowAddress from './ShowAddress';
import AddAddress from './AddAddress';

const Address = () => {
	const [ show, setShow ] = useState(true);
	const [ address, setAddress ] = useState({});

	useEffect(() => {
		setShow(true);
	}, []);

	return (
		<React.Fragment>
			{show ? (
				<ShowAddress setAddress={setAddress} show={show} setShow={setShow} />
			) : (
				<AddAddress address={address} show={show} setShow={setShow} />
			)}
		</React.Fragment>
	);
};

export default Address;
