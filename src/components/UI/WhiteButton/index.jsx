import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function WhiteButton({ children, ...props }) {
	return (
		<button {...props} className={styles.button}>
			{children}
		</button>
	);
}

export default WhiteButton;
