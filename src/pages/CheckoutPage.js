import React, { useState } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Tabs, Tab, Typography, Grid, TextField, Stepper, Step, StepLabel } from '@material-ui/core';

import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div hidden={value !== index} {...other}>
			{value === index && children}
		</div>
	);
}

function getSteps() {
	return [ 'Select campaign settings', 'Create an ad group', 'Create an ad' ];
}

export default function CheckoutPage() {
	const classes = useStyles();

	const { address } = useSelector((state) => state);
	const { cartItems } = useSelector((state) => state.cart);

	const [ value, setValue ] = useState(0);
	const [ activeStep, setActiveStep ] = React.useState(1);
	const steps = getSteps();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container className={classes.container}>
			<Stepper activeStep={activeStep}>
				{steps.map((label) => (
					<Step key={label} expanded>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<Typography variant="h2">Finalize seu pedido</Typography>
			<Tabs value={0} index={0}>
				<Tab label="Entrega" disableRipple />
				<Tab label="Retirada" disableRipple disabled />
			</Tabs>
			<TabPanel value={0} index={0}>
				<div className={classes.delivery_container}>
					<div className={classes.delivey_image} />
					<div className={classes.delivey_address}>
						<div>
							<b>Av. Jose Carlos Paes, N° 600</b>
						</div>
						<div>Casa 19 - Lagoa</div>
					</div>
					<div style={{ marginRight: 15 }}>Trocar</div>
				</div>

				<div className={classes.selected_delivery}>Hoje, 60 - 80 min</div>

				<div className={classes.delivery_type_container}>
					<div className={classes.delivery_type}>
						<div>Padrão</div>
						<div>Hoje, 60 - 80 min</div>
						<div>R$ 6,90</div>
					</div>
					<div className={classes.delivery_type}>
						<div>Agendar Entrega</div>
					</div>
				</div>
			</TabPanel>

			<div className={classes.divider} />

			<Tabs value={value} onChange={handleChange}>
				<Tab label="Pague pelo site" disableRipple />
				<Tab label="Pague na entrega" disableRipple />
			</Tabs>
			<TabPanel value={value} index={0}>
				<Grid container spacing={2} className={classes.site_pay_container}>
					<Grid item xs={6}>
						<div style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
							Adicione um cartão no Merkatho
						</div>
						<div style={{ fontSize: 13, marginBottom: 20, color: '#777' }}>
							É prático, seguro e você não perde nenhum minuto a mais quando seu pedido chegar.
						</div>
						<div
							style={{
								backgroundColor: '#EA1D2C',
								fontWeight: 'bold',
								fontSize: 16,
								color: 'white',
								textAlign: 'center',
								padding: 15,
								borderRadius: 4
							}}
						>
							Adicionar Cartão
						</div>
					</Grid>
					<Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', transform: 'rotateZ(0deg)' }}>
						<img src="https://cdn.onlinewebfonts.com/svg/img_453473.png" width="65%" />
					</Grid>
				</Grid>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Grid container spacing={2} className={classes.site_pay_container}>
					Selectione um meio de pagamento
				</Grid>
			</TabPanel>

			<div className={classes.divider} />

			<TextField
				className={classes.cpf_input}
				label="CPF/CNPJ na nota"
				defaultValue="108.924.127-55"
				variant="outlined"
				fullWidth
			/>
			<div
				style={{
					backgroundColor: '#EA1D2C',
					fontWeight: 'bold',
					fontSize: 16,
					color: 'white',
					textAlign: 'center',
					padding: 15,
					borderRadius: 4,
					margin: '20px 0 60px 0'
				}}
			>
				Agendar Pedido
			</div>
		</Container>
	);
}

const useStyles = makeStyles((theme) => ({
	container: {
		width: 550,
		maxWidth: '100%',
		marginTop: 110
	},
	delivery_container: {
		display: 'flex',
		padding: '35px 0',
		alignItems: 'center',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	delivey_image: {
		padding: 25,
		margin: '0 20px',
		backgroundColor: '#EEE',
		borderRadius: 4
	},
	delivey_address: {
		flex: 1
	},

	selected_delivery: {
		fontWeight: 'bold',
		fontSize: 16
	},

	delivery_type_container: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	delivery_type: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		height: 90,
		width: '49%',
		padding: '10px 15px',
		margin: '20px 0',
		border: '1px solid #DDD',
		borderRadius: 4,
		cursor: 'pointer',
		'&:hover': {
			border: '1px solid #EA1D2C'
		}
	},
	site_pay_container: {
		height: 220,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	cpf_input: {
		margin: '25px 0'
	},
	divider: {
		borderBottom: '1px solid #DDD',
		margin: '15px 0'
	}
}));
