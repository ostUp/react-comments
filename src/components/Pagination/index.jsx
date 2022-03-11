import React from 'react';
import PaginationButton from '../UI/PaginationButton';
import styles from './styles.module.scss';

function Pagination() {
	return (
		<div className={styles.pagination}>
			<PaginationButton>1</PaginationButton>
			<PaginationButton>2</PaginationButton>
			<PaginationButton>3</PaginationButton>
			<PaginationButton>4</PaginationButton>
			<PaginationButton>5</PaginationButton>
			<PaginationButton>6</PaginationButton>
			<PaginationButton>7</PaginationButton>
			<PaginationButton>8</PaginationButton>
			<PaginationButton>9</PaginationButton>
			<PaginationButton>10</PaginationButton>
		</div>
	);
}

export default Pagination;
