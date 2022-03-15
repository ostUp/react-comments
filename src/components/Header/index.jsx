import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Header({ type }) {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<ul className={styles['nav__list']}>
						<div className={styles['nav__list-left']}>
							<li className={styles['nav__list-item']}>
								<Link to="/about" className={styles['nav__list-link']}>
									Про мене
								</Link>
							</li>
							<li style={{ marginLeft: 40 }} className={styles['nav__list-item']}>
								<Link to="/" className={styles['nav__list-link']}>
									Пости
								</Link>
							</li>
						</div>
						<li className={styles['nav__list-item']}>
							<Link
								to={
									type === 'login'
										? '/'
										: type === 'register'
										? '/login'
										: type === 'logout'
										? '/login'
										: '/login'
								}
								className={styles['nav__list-link']}
							>
								{type === 'login' ? 'Увійти' : type === 'register' ? 'Створити акаунт' : 'Вийти'}
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
