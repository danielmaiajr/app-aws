import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import { useSelector, useDispatch } from 'react-redux';
import { getAddress, deleteAddress } from '../redux/actions/addressActions';
import { Button } from '@material-ui/core';

const Address = ({ setAddress, show, setShow }) => {
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

	const OnEdit = (e, add) => {
		e.preventDefault();
		setAddress(add);
		setShow(!show);
	};

	return (
		<div className={classes.root}>
			<Typography variant="h2">Onde você quer receber seu pedido?</Typography>
			{address.map((add) => (
				<div key={add.address_id} className={classes.addressItem}>
					<span className={classes.addressTitle}>
						{add.street}, {add.num}
					</span>
					<span className={classes.addressSubtitle}>{add.neightborhood}</span>
					<div className={classes.addressSubtitle}>
						<span onClick={(e) => OnEdit(e, add)}>EDITAR</span>
						<span> </span>
						<span onClick={(e) => OnDelete(e, add.address_id)}>EXCLUIR</span>
					</div>
				</div>
			))}
			<Button fullWidth color="secondary" variant="contained" onClick={(e) => OnEdit(e, {})}>
				Adicionar Endereço
			</Button>
		</div>
	);
};

export default Address;

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		width: '100%',
		maxWidth: 420,
		padding: '0 20px'
	},
	addressItem: {
		border: '1px solid #ddd',
		borderRadius: 8,
		'&:hover': {
			border: 'solid 1px #aaa'
		},
		padding: '15px',
		marginBottom: 20,
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
