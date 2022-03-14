import React from 'react';
import Button from '../../components/UI/Button';
import MainInput from '../../components/UI/MainInput';
import Header from '../../components/Header';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom'

function Login() {
	const navigate = useNavigate()

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
						<Button s={'main_blue'} onClick={() => navigate('/')} className={styles.btn}>
							Увійти
						</Button>
						<Button s={'main_red'} onClick={() => navigate('/reg')} className={styles.register}>
							Зареєструватися
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
