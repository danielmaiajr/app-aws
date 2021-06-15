import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Modal from '../Modal';
import Address from '../Address';

export default function SelectedAddress() {
	const classes = useStyles();
	const [ isModalOpen, setIsModalOpen ] = useState(false);

	const OnModalClose = () => {
		setIsModalOpen(false);
	};

	return (
		<React.Fragment>
			<button className={classes.button} onClick={() => setIsModalOpen(true)}>
				<div className={classes.title}>ENTREGAR EM</div>
				<div className={classes.subtitle}>Av. José Carlos Paes, 600</div>
			</button>
			<Modal isOpen={isModalOpen} OnClose={OnModalClose}>
				<Address />
			</Modal>
		</React.Fragment>
	);
}

const useStyles = makeStyles({
	button: {
		display: 'flex',
		flexDirection: 'column',
		background: 'inherit',
		border: 'none',
		cursor: 'pointer'
	},
	title: {
		fontSize: 11,
		fontWeight: 400,
		color: '#a6a5a5',
		lineHeight: '16px'
	},
	subtitle: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#5A5353'
	}
});
