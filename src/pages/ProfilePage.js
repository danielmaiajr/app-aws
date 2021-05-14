import React, { useEffect, useState } from 'react';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { personalData } from '../assets/data/personalData';

import CenterContainer from '../components/Container/CenterContainer';

const ProfilePage = () => {
	const classes = useStyles();
	const [ fields, setFields ] = useState({});

	useEffect(() => setFields(personalData), []);

	const HandleOnChange = (e) => {
		e.preventDefault();
		setFields({ ...fields, [e.target.name]: e.target.value });
	};

	return (
		<CenterContainer>
			<form className={classes.formWrapper}>
				<Typography variant="h2">Editar Dados</Typography>
				<TextField
					className={classes.formInput}
					fullWidth
					name="name"
					label="Nome Completo"
					value={fields.name || ''}
					onChange={HandleOnChange}
					variant="outlined"
				/>
				<TextField
					className={classes.formInput}
					fullWidth
					name="cpf"
					label="CPF (opcional)"
					value={fields.cpf || ''}
					onChange={HandleOnChange}
					variant="outlined"
				/>
				<TextField
					className={classes.formInput}
					fullWidth
					name="phone"
					label="Celular"
					value={fields.phone || ''}
					onChange={HandleOnChange}
					variant="outlined"
				/>
				<TextField
					disabled
					className={classes.formInput}
					fullWidth
					label="E-mail"
					value={fields.email || ''}
					variant="outlined"
				/>
				<Button className={classes.button} fullWidth color="secondary" variant="contained">
					Confirmar
				</Button>
			</form>
		</CenterContainer>
	);
};

export default ProfilePage;

const useStyles = makeStyles((theme) => ({
	formWrapper: {
		width: '100%',
		maxWidth: 420,
		padding: '0 20px'
	},
	formInput: {
		margin: '15px 0'
	},
	button: {
		margin: '15px 0'
	}
}));
