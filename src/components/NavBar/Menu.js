import React from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';

const Menu = ({ setShow, show }) => {
	const classes = useStyles();

	const signOut = async () => {
		try {
			await Auth.signOut();
			setShow(!show);
		} catch (error) {
			console.log('error signing out: ', error);
		}
	};

	return (
		<div className={classes.root}>
			<div className={classes.title}>Olá, Daniel</div>
			<Link className={classes.btn} to="/order" onClick={() => setShow(!show)}>
				<ListAltOutlinedIcon style={{ marginRight: 30 }} />
				<span>Pedidos</span>
			</Link>
			<Link className={classes.btn} to="/address" onClick={() => setShow(!show)}>
				<ListAltOutlinedIcon style={{ marginRight: 30 }} />
				<span>Endereços</span>
			</Link>
			<Link className={classes.btn} to="/profile" onClick={() => setShow(!show)}>
				<ListAltOutlinedIcon style={{ marginRight: 30 }} />
				<span>Editar dados</span>
			</Link>
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
