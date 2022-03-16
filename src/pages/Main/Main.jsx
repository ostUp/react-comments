/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import PostForm from '../../components/PostForm';
import PostList from '../../components/PostList';
import Button from '../../components/UI/Button';
import MainInput from '../../components/UI/MainInput';
import Modal from '../../components/UI/Modal';
import styles from './styles.module.scss';
import Select from '../../components/Select';

function Main() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'surit', body: 'itecto' },
		{ id: 2, title: 'esse', body: 'nulla' },
		{ id: 3, title: ' aut', body: 'em aut' },
		{ id: 4, title: 'escaecati', body: 'velit' },
	]);

	const [modalActive, setModalActive] = useState(false);

	const [searchQuery, setSearchQuery] = useState('');

	const [selectedSort, setSelectedSort] = useState('');

	function createPost(newPost) {
		setPosts([...posts, newPost]);
		setModalActive(false);
	}

	function removePost(post) {
		setPosts(posts.filter((p) => p.id !== post.id));
	}

	function sortPosts(sort) {
		setSelectedSort(sort);
		setPosts([...posts].sort((a, b) => a[sort].toLocalCompare(b[sort])));
	}

	return (
		<>
			<Modal active={modalActive} setActive={setModalActive}>
				<PostForm create={createPost} />
			</Modal>
			<Header s={'login'} />
			<div className={styles.container}>
				<h1 className={styles['main__header']}>Сторінка з постами</h1>
				<div className={styles['main__top']}>
					<Select
						defaulValue={'Сортувати..'}
						value={selectedSort}
						onChange={sortPosts}
						options={[
							{ value: 'title', name: 'Сортувати по заголовку' },
							{ value: 'body', name: 'Сортувати по опису' },
						]}
					></Select>
					<div className={styles['main__top-add']}>
						<Button s={'main_red'} onClick={() => setModalActive(true)}>
							Додати пост 🔥
						</Button>
					</div>
					<div className={styles['main__top-search']}>
						<MainInput
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Пошук..."
						/>
					</div>
				</div>

				{posts.length !== 0 ? (
					<>
						<PostList remove={removePost} posts={posts} />
						<Pagination />
					</>
				) : (
					<h1 className={styles['main__header']}>Добавте пост!</h1>
				)}
			</div>
		</>
	);
}

export default Main;
