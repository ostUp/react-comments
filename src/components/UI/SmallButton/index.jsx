import React from 'react';
import styles from './styles.module.scss';

function SmallButton({ children, ...props }) {
	return (
		<button {...props} className={styles.button}>
			{children}
		</button>
	);
}
export default SmallButton;
