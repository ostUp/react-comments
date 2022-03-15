import React from 'react';
import Header from '../../components/Header';
import styles from './styles.module.scss';

function About() {
	return (
		<>
			<Header type={'logout'}/>
			<div className={styles.container}>
				<h1 className={styles.about__header}>Про мене</h1>
				<h3 className={styles['about__text']}>
					Цей проект було створено в навчальних цілях{' '}
					<a
						href="https://github.com/ostUp"
						target="_blank"
						rel="noreferrer"
						className={styles['about__text-link']}
					>
						мною
					</a>{' '}
					🚀
				</h3>

				<h3 className={styles['about__text']}>
					Код можете подивитись ось тут{' '}
					<a
						href="https://github.com/ostUp/react-comments"
						target="_blank"
						rel="noreferrer"
						className={styles['about__text-link']}
					>
						ось тут
					</a>{' '}
					👈
				</h3>
				<h3 className={styles['about__text']}>
					Також можете відвідати мій{' '}
					<a
						href="https://github.com/ostUp"
						target="_blank"
						rel="noreferrer"
						className={styles['about__text-link']}
					>
						Telegram
					</a>
					,{' '}
					<a
						href="https://github.com/ostUp"
						target="_blank"
						rel="noreferrer"
						className={styles['about__text-link']}
					>
						LinkedIn
					</a>
					{' і '}
					<a
						href="https://github.com/ostUp/blystsiv"
						target="_blank"
						rel="noreferrer"
						className={styles['about__text-link']}
					>
						вебсайт
					</a>{' '}
					🌐
				</h3>
			</div>
		</>
	);
}

export default About;
