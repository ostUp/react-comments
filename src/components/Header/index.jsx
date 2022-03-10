import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Header() {
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
								<Link to="/home" className={styles['nav__list-link']}>
									Пости
								</Link>
							</li>
						</div>
						<li className={styles['nav__list-item']}>
							<Link to="/login" className={styles['nav__list-link']}>
								Увійти
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
