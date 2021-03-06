import React from 'react';
import Button from '../../components/UI/Button';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

function NotFound() {
	const navigate = useNavigate()
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles['left__side']}>
					<h1 className={styles['left__side-header']}>404 Error</h1>
					<p className={styles['left__side-title']}>Ой, сторінки, яку Ви шукали, не існує</p>
					<p className={styles['left__side-subtitle']}>
						Не панікуйте і перейдіть на головну сторінку
					</p>
				</div>
				<div className="right__side">
					<Button s={'main_blue'} onClick={() => navigate('/')} >На головну</Button>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
