import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const AddAddress = ({ address }) => {
	const classes = useStyles();

	const [ fields, setFields ] = useState({});

	useEffect(
		() => {
			if (address) setFields(address);
		},
		[ address ]
	);

	const HandleOnChange = (e) => {
		e.preventDefault();
		setFields({ ...fields, [e.target.name]: e.target.value });
	};

	return (
		<div className={classes.root}>
			<form className={classes.formWrapper}>
				<div className={classes.title}>{address ? 'Editar Endereço' : 'Adicionar Endereço'}</div>
				<TextField
					className={classes.formInput}
					fullWidth
					name="neightborhood"
					label="Bairro"
					value={fields.neightborhood ? fields.neightborhood : ''}
					onChange={HandleOnChange}
					variant="outlined"
				/>
				<TextField
					className={classes.formInput}
					fullWidth
					name="street"
					label="Rua"
					value={fields.street ? fields.street : ''}
					onChange={HandleOnChange}
					variant="outlined"
				/>
				<TextField
					className={classes.formInput}
					fullWidth
					name="num"
					label="Número"
					value={fields.num ? fields.num : ''}
					onChange={HandleOnChange}
					variant="outlined"
				/>
				<TextField
					className={classes.formInput}
					fullWidth
					name="cep"
					label="CEP"
					value={fields.cep ? fields.cep : ''}
					onChange={HandleOnChange}
					variant="outlined"
				/>
				<Button className={classes.button} fullWidth color="secondary" variant="contained">
					Salvar
				</Button>
			</form>
		</div>
	);
};

export default AddAddress;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center'
	},
	formWrapper: {
		width: '100%',
		maxWidth: 420,
		padding: '0 20px'
	},
	title: {
		fontSize: '1.5625rem',
		fontWeight: 500,
		margin: '40px 0',
		color: '#414143'
	},
	formInput: {
		margin: '15px 0'
	},
	button: {
		padding: '15px 0',
		margin: '15px 0'
	}
}));
