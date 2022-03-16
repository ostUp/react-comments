import React from 'react';
import Post from '../Post';

function PostList({ posts, remove }) {
	return (
		<div>
			{posts.map((post, index) => (
				<Post remove={remove} number={index + 1} post={post} key={post.id} />
			))}
		</div>
	);
}

export default PostList;
