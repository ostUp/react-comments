import React, { useState } from 'react';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import PostList from '../../components/PostList';
import Select from '../../components/Select';
import MainInput from '../../components/UI/MainInput';
import Modal from '../../components/UI/Modal';
import WhiteButton from '../../components/UI/WhiteButton';
import styles from './styles.module.scss';

function Main() {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body: 'quia et suscipituuntur expedita et cumnreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto',
		},
		{
			id: 2,
			title: 'qui est esse',
			body: 'est rerum tempoint nihil reprehenderit dolor beatae ea dolores nequiis voluptate porro vel nihil molestiae ut reicienui neque nisi nulla',
		},
		{
			id: 3,
			title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
			body: 'et iusto sed qu aut adnvoluptatem doloribus vel accusantium quis pariaturnmolestiae porro eius odio et labore et velit aut',
		},
		{
			id: 4,
			title: 'eum et est occaecati',
			body: 'ullam et ssit aadcdsmcom ifomdovm iofdmi midfmif m mfi quis sunt voluptatem rerum illo velit',
		},
		{
			id: 5,
			title: 'qui est esse',
			body: 'est rerum tempoint nihil reprehenderit dolor beatae ea dolores nequiis voluptate porro vel nihil molestiae ut reicienui neque nisi nulla',
		},
		{
			id: 6,
			title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
			body: 'et iusto sed qu aut adnvoluptatem doloribus vel accusantium quis pariaturnmolestiae porro eius odio et labore et velit aut',
		},
		{
			id: 7,
			title: 'eum et est occaecati',
			body: 'ullam et ssit aadcdsmcom ifomdovm iofdmi midfmif m mfi quis sunt voluptatem rerum illo velit',
		},
	]);

	const [modalActive, setModalActive] = useState(false);

	return (
		<>
			<Modal active={modalActive} setActive={setModalActive}>
				<MainInput placeholder='Введіть заголовок...'/>
				<MainInput placeholder='Введіть тіло поста...'/>
				<WhiteButton>Додати</WhiteButton>
			</Modal>
			<Header />
			<div className={styles.container}>
				<h1 className={styles['main__header']}>Сторінка з постами</h1>
				<div className={styles['main__top']}>
					<Select />
					<div className={styles['main__top-add']}>
						<WhiteButton onClick={() => setModalActive(true)}>Додати пост 🔥</WhiteButton>
					</div>
					<div className={styles['main__top-search']}>
						<MainInput placeholder="Пошук..." />
					</div>
				</div>

				{posts.length !== 0 ? (
					<PostList posts={posts} />
				) : (
					<h1 className={styles['main__header']}>Добавте пост!</h1>
				)}
				<Pagination />
			</div>
		</>
	);
}

export default Main;
