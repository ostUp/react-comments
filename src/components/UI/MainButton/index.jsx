import React from 'react';
import styles from './styles.module.scss';

function MainButton({ children, ...props }) {
	return (
		<button {...props} className={styles.button}>
			{children}
		</button>
	);
}

export default MainButton;
