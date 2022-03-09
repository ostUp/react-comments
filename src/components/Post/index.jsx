import React from 'react';
import SmallButton from '../UI/SmallButton';
import SmallButtonDanger from '../UI/SmallButton/SmallButtonDanger';
import styles from './styles.module.scss';

function Post() {
	return (
		<div className={styles['post__wrapper']}>
			<div className={styles['post__left-side']}>
				<h3 className={styles['post__header']}>
					1. Лорем ипсум долор сит амет, ин агам дицам еффициантур вел, ин яуо.
				</h3>
				<p className={styles['post__text']}>
					Lorem Ipsum є псевдо- латинський текст використовується у веб - дизайні, типографіка,
					верстка, і друку замість англійської підкреслити елементи дизайну над змістом. Це також
					називається заповнювач ( або наповнювач) текст.
				</p>
			</div>
			<div className={styles['post__btns']}>
				<SmallButton style={{ marginRight: '20px' }}>🔍</SmallButton>
				<SmallButtonDanger>🗑️</SmallButtonDanger>
			</div>
		</div>
	);
}

export default Post;
