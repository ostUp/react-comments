import React from 'react';
import MainButton from '../../components/UI/MainButton';
import MainInput from '../../components/UI/MainInput';
import Header from '../../components/Header';
import styles from './styles.module.scss';
import WhiteButton from '../../components/UI/WhiteButton';

function Login() {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h1 className={styles.header}>Сторінка входу</h1>
					<form className={styles.form}>
						<MainInput type="text" placeholder="Логін" />
						<MainInput type="password" placeholder="Пароль" />
					</form>
					<div className={styles['wrapper__btn']}>
						<MainButton className={styles.btn}>Увійти</MainButton>
						<WhiteButton className={styles['register']}>Зареєструватися</WhiteButton>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
