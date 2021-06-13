import React from 'react';
import { createPortal } from 'react-dom';

import { styled, makeStyles } from '@material-ui/core/styles';

import { useSpring, animated } from '@react-spring/web';

export default function Modal({ children, isOpen, OnClose }) {
	const classes = useStyles();

	const styles = useSpring({ y: isOpen ? 0 : 500 });
	const animatedBackground = useSpring({ opacity: isOpen ? 1 : 0 });

	if (!isOpen) return null;

	return createPortal(
		<Container>
			<animated.div style={animatedBackground} className={classes.backGround} onClick={() => OnClose()} />
			<animated.div style={styles} className={classes.modalContainer}>
				{children}
			</animated.div>
		</Container>,
		document.getElementById('modal-root')
	);
}

const Container = styled('div')({
	position: 'absolute',
	overflow: 'hidden',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	inset: 0
});

const useStyles = makeStyles({
	backGround: {
		position: 'absolute',
		overflow: 'hidden',
		inset: 0,
		zIndex: 200,
		backgroundColor: 'rgba(0, 0, 0, 0.7)'
	},
	modalContainer: {
		width: 500,
		height: 300,
		zIndex: 300,
		backgroundColor: '#FFF'
	}
});
