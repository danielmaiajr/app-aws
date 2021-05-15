import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		textTransform: 'uppercase',
		backgroundColor: '#fff',
		border: 'none',
		padding: '0 10px',
		'&:hover': {
			cursor: 'pointer'
		}
	}
}));

const MyButton = ({ children, ...props }) => {
	const classes = useStyles();
	return (
		<button className={classes.root} {...props}>
			{children}
		</button>
	);
};

export default MyButton;
