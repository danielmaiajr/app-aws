import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';
import { getAddress, deleteAddress } from '../redux/actions/addressActions';

const AddressPage = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const address = useSelector((state) => state.address);

	useEffect(
		() => {
			dispatch(getAddress());
		},
		[ dispatch ]
	);
	const OnDelete = (e, id) => {
		e.preventDefault();
		dispatch(deleteAddress(id));
	};

	return (
		<div className={classes.root}>
			<div>
				<h1>Onde você quer receber seu pedido?</h1>
				{address.map((add) => (
					<div key={add.address_id} className={classes.addressItem}>
						<span className={classes.addressTitle}>
							{add.street}, {add.num}
						</span>
						<span className={classes.addressSubtitle}>{add.neightborhood}</span>
						<div className={classes.addressSubtitle}>
							<span>EDITAR</span>
							<span> </span>
							<span onClick={(e) => OnDelete(e, add.address_id)}>EXCLUIR</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AddressPage;

const useStyles = makeStyles({
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		marginTop: 150
	},
	addressItem: {
		border: '1px solid #ddd',
		borderRadius: 8,
		'&:hover': {
			border: 'solid 1px #aaa'
		},
		padding: '15px',
		marginBottom: 10,
		gap: '4px',
		display: 'grid',
		textAlign: 'left',
		alignContent: 'center',
		color: '#717171'
	},
	addressTitle: {
		margin: 0,
		fontSize: 16
	},
	addressSubtitle: {
		margin: 0,
		fontSize: 14
	}
});
