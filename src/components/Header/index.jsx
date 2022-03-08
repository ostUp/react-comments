import React from 'react';
import styles from './styles.module.scss';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<ul className={styles['nav__list']}>
						<div className={styles['nav__list-left']}>
							<li className={styles['nav__list-item']}>
								<a href="/about" className={styles['nav__list-link']}>
									Про нас
								</a>
							</li>
							<li style={{ marginLeft: 40 }} className={styles['nav__list-item']}>
								<a href="/posts" className={styles['nav__list-link']}>
									Пости
								</a>
							</li>
						</div>
						<li className={styles['nav__list-item']}>
							<a href="/login" className={styles['nav__list-link']}>
								Увійти
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
