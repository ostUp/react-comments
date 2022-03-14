import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Button from '../../components/UI/Button';
import MainInput from '../../components/UI/MainInput';
import styles from './styles.module.scss';

function Register() {
	const navigate = useNavigate()
	return (
		<>
			<Header />
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<h1 className={styles.header}>Сторінка реєстрації</h1>
					<form className={styles.form}>
						<MainInput type="text" placeholder="Логін" />
						<MainInput type="password" placeholder="Пароль" />
						<MainInput type="password" placeholder="Повторіть пароль" />
					</form>
					<div className={styles['wrapper__btn']}>
						<Button s={'main_blue'} onClick={() => navigate('/login')} className={styles.register}>
							Зареєструватися
						</Button>
						<Button s={'main_red'} onClick={() => navigate('/')} className={styles.btn}>
							Увійти
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
