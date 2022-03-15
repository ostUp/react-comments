import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

function Button({ s, children, ...props }) {
	return (
		<button
			{...props}
			className={classNames({
				[styles.main_red]: s === 'main_red',
				[styles.main_blue]: s === 'main_blue',
				[styles.medium_red]: s === 'medium_red',
				[styles.medium_blue]: s === 'medium_blue',
				[styles.small_red]: s === 'small_red',
				[styles.small_blue]: s === 'small_blue',
				[styles.pagination]: s === 'pagination',
			})}
		>
			{children}
		</button>
	);
}

export default Button;
