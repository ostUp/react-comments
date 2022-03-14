import React from 'react';
import Button from '../UI/Button';
import styles from './styles.module.scss';

function Pagination() {
	return (
		<div className={styles.pagination}>
			<Button s={'pagination'}>1</Button>
			<Button s={'pagination'}>2</Button>
			<Button s={'pagination'}>3</Button>
			<Button s={'pagination'}>4</Button>
			<Button s={'pagination'}>5</Button>
			<Button s={'pagination'}>6</Button>
			<Button s={'pagination'}>7</Button>
			<Button s={'pagination'}>8</Button>
			<Button s={'pagination'}>9</Button>
			<Button s={'pagination'}>10</Button>
		</div>
	);
}

export default Pagination;
