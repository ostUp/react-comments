import React, { useState } from 'react';
import Button from '../UI/Button';
import MainInput from '../UI/MainInput';

function PostForm({ create }) {
	const [post, setPost] = useState({ title: '', body: '' });

	function addNewPost(e) {
		e.preventDefault();
		const newPost = {
			...post,
			id: Date.now(),
		};
		create(newPost);
		setPost({ title: '', body: '' });
	}

	return (
		<form>
			<MainInput
				placeholder="Введіть заголовок..."
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
			/>
			<MainInput
				placeholder="Введіть тіло поста..."
				value={post.body}
				onChange={(e) => setPost({ ...post, body: e.target.value })}
			/>
			<Button s={'main_red'} onClick={addNewPost}>
				Додати
			</Button>
		</form>
	);
}

export default PostForm;
