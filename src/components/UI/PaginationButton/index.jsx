import React from 'react';
import styles from './styles.module.scss';

function PaginationButton({ children, ...props }) {
	return (
		<a {...props} className={styles.button}>
			{children}
		</a>
	);
}

export default PaginationButton;
