import React from 'react';
import styles from './styles.module.scss';

const Select = ({ options, defaultValue, value, onChange }) => {
	return (
		<select className={styles.select} value={value} onChange={(event) => onChange(event.target.value)}>
			<option disabled value="">{defaultValue}</option>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
};

export default Select;
