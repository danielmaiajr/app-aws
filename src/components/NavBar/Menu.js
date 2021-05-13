import React from 'react';
import { Auth } from 'aws-amplify';

import { makeStyles } from '@material-ui/core/styles';

import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';

const Menu = () => {
	const classes = useStyles();

	const signOut = async () => {
		try {
			await Auth.signOut();
		} catch (error) {
			console.log('error signing out: ', error);
		}
	};

	return (
		<div className={classes.root}>
			<div className={classes.title}>Olá, Daniel</div>
			<div className={classes.btn}>
				<ListAltOutlinedIcon style={{ marginRight: 30 }} />
				<span>Pedidos</span>
			</div>
			<div className={classes.btn}>
				<ListAltOutlinedIcon style={{ marginRight: 30 }} />
				<span>Pedidos</span>
			</div>
			<div className={classes.btn}>
				<ListAltOutlinedIcon style={{ marginRight: 30 }} />
				<span>Pedidos</span>
			</div>
			<div className={classes.btn} onClick={signOut}>
				<ListAltOutlinedIcon style={{ marginRight: 30 }} />
				<span>Sair</span>
			</div>
		</div>
	);
};

export default Menu;

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		minWidth: '322px',
		background: '#fff',
		top: 38,
		right: 0,
		border: '1px solid #f7f7f7',
		boxShadow: '0 4px 8px rgb(0 0 0 / 10%)',
		borderRadius: '4px',
		fontSize: '1.125rem'
	},
	title: {
		fontWeight: 500,
		fontSize: '1.5625rem',
		lineHeight: '31px',
		padding: '30px 40px 20px'
	},
	btn: {
		color: '#777',
		letterSpacing: '0.5px',
		display: 'flex',
		alignItems: 'center',
		padding: '0px 40px',
		textDecoration: 'none',
		height: '60px',
		background: '0 0',
		border: 'none',
		'&:hover': {
			color: 'red',
			cursor: 'pointer'
		}
	}
});
