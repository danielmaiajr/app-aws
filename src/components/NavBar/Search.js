import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export default function Search() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<IconButton type="submit" className={classes.iconButton} aria-label="search">
				<SearchIcon />
			</IconButton>
			<InputBase className={classes.input} placeholder="Busque por produto" />
		</div>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.background.default,
		borderRadius: 8,
		width: 420
	},
	iconButton: {
		marginLeft: theme.spacing(1),
		color: '#EA1D2C',
		'&:hover': {
			backgroundColor: theme.palette.background.default
		}
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1
	}
}));
