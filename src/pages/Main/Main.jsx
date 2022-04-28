import React, { useEffect, useState } from 'react';
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
	const [posts, setPosts] = useState([]);
	const [modalActive, setModalActive] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedSort, setSelectedSort] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, []);

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModalActive(false);
	};

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const sortPosts = (sort) => {
		setSelectedSort(sort);
		console.log(sort);
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
	};

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
						value={selectedSort}
						onChange={sortPosts}
						defaultValue="Count of elems on the page"
						options={[
							{ value: 'name', name: 'Sort by name' },
							{ value: 'title', name: 'Sort by title' },
						]}
					/>

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
