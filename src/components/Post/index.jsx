import React from 'react';
import SmallButton from '../UI/SmallButton';
import SmallButtonDanger from '../UI/SmallButton/SmallButtonDanger';
import styles from './styles.module.scss';

function Post(props) {
	console.log(props);
	return (
		<div className={styles['post__wrapper']}>
			<div className={styles['post__left-side']}>
					<strong className={styles['post__id']}>{props.post.id}</strong>
				<h3 className={styles['post__header']}>
					{props.post.title}
				</h3>
				<p className={styles['post__text']}>{props.post.body}</p>
			</div>
			<div className={styles['post__btns']}>
				<SmallButton style={{ marginRight: '30px' }}>🔍</SmallButton>
				<SmallButtonDanger>🗑️</SmallButtonDanger>
			</div>
		</div>
	);
}

export default Post;
