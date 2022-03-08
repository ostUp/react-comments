import React from 'react';
import Header from '../../components/Header';
import MainButton from '../../components/UI/MainButton';
import MainInput from '../../components/UI/MainInput';
import styles from './styles.module.scss';

function Register() {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.wrapper}>
				<h1 className={styles.header}>Сторінка реєстрації</h1>
				<form className={styles.form}>
					<MainInput type="text" placeholder="Логін" />
					<MainInput type="password" placeholder="Пароль" />
					<MainInput type="password" placeholder="Повторіть пароль" />
				</form>
				<div className={styles['wrapper__btn']}>
					<MainButton className={styles['register']}>Зареєструватися</MainButton>
					<MainButton style={{ backgroundColor: 'white', color: '#ff8a62' }} className={styles.btn}>
						Увійти
					</MainButton>
				</div>
			</div>
		</div>
	);
}

export default Register;
