import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { personalData } from '../assets/data/personalData';

const PersonalData = () => {
	const classes = useStyles();
	const [ fields, setFields ] = useState({});

	useEffect(() => setFields(personalData), []);

	const HandleOnChange = (e) => {
		e.preventDefault();
		setFields({ ...fields, [e.target.name]: e.target.value });
	};

	return (
		<div className={classes.root}>
			<form className={classes.formWrapper}>
				<div className={classes.title}>Editar Dados</div>
				<TextField
					className={classes.formInput}
					fullWidth
					name="name"
					label="Nome Completo"
					value={fields.name}
					onChange={HandleOnChange}
					variant="outlined"
				/>
				<TextField
					className={classes.formInput}
					fullWidth
					name="cpf"
					label="CPF (opcional)"
					value={fields.cpf}
					onChange={HandleOnChange}
					variant="outlined"
				/>
				<TextField
					className={classes.formInput}
					fullWidth
					name="phone"
					label="Celular"
					value={fields.phone}
					onChange={HandleOnChange}
					variant="outlined"
				/>
				<TextField
					disabled
					className={classes.formInput}
					fullWidth
					label="E-mail"
					value={fields.email}
					variant="outlined"
				/>
				<Button className={classes.button} fullWidth color="secondary" variant="contained">
					Confirmar
				</Button>
			</form>
		</div>
	);
};

export default PersonalData;

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
