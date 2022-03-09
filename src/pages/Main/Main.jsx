import React from 'react';
import Header from '../../components/Header';
import styles from './styles.module.scss';

function Main() {
	return (
		<div>
			<Header />
			<div className={styles.container}>
				Main
			</div>
		</div>
	);
}

export default Main;
