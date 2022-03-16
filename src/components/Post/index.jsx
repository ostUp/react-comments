import React from 'react';
import Button from '../UI/Button';
import styles from './styles.module.scss';

function Post(props) {
	return (
		<div className={styles['post__wrapper']}>
			<div className={styles['post__left-side']}>
				<strong className={styles['post__id']}>{props.number}</strong>
				<h3 className={styles['post__header']}>{props.post.title}</h3>
				<p className={styles['post__text']}>{props.post.body}</p>
			</div>
			<div className={styles['post__btns']}>
				<Button s={'small_blue'} style={{ marginRight: '30px' }}>
					🔍
				</Button>
				<Button s={'small_red'} onClick={() => props.remove(props.post)}>
					🗑️
				</Button>
			</div>
		</div>
	);
}

export default Post;
