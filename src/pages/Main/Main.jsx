import React from 'react';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Select from '../../components/Select';
import MainInput from '../../components/UI/MainInput';
import WhiteButton from '../../components/UI/WhiteButton';
import styles from './styles.module.scss';

function Main() {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<h1 className={styles['main__header']}>Сторінка з постами</h1>
				<div className={styles['main__top']}>
					<Select />
					<div className="main__top-add">
						<WhiteButton>Додати пост 🔥</WhiteButton>
					</div>
					<div className={styles['main__top-search']}>
						<MainInput placeholder="Пошук..." />
					</div>
				</div>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</>
	);
}

export default Main;
