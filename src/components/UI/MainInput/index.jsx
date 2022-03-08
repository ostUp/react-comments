import React from 'react';
import styles from './styles.module.scss';

function MainInput(props) {
	return <input {...props} className={styles.input} />;
}

export default MainInput;
