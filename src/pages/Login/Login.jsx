import React from 'react';
import Header from '../../components/Header';
import MainButton from '../../components/UI/MainButton';
import MainInput from '../../components/UI/MainInput';
import styles from './styles.module.scss';

function Login() {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.wrapper}>
				<h1 className={styles.header}>Сторінка входу</h1>
				<form className={styles.form}>
					<MainInput type="text" placeholder="Логін" />
					<MainInput type="password" placeholder="Пароль" />
				</form>
				<div className={styles['wrapper__btn']}>
					<MainButton className={styles.btn}>Увійти</MainButton>
					<MainButton
						style={{ backgroundColor: 'white', color: '#ff8a62' }}
						className={styles['register']}
					>
						Зареєструватися
					</MainButton>
				</div>
			</div>
		</div>
	);
}

export default Login;
