import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './styles.module.scss';
import arrowDown from '../../assets/images/select-arrow.svg';

function MySelect({ options, defaulValue, value, onChange }) {
	const [open, setOpen] = useState(false);

	function clickOption() {
		onChange();
		setOpen(false);
	}

	return (
		<div className={styles['select__wrapper']}>
			<OutsideClickHandler onOutsideClick={() => setOpen(false)}>
				<div className={styles['select__head']} onClick={() => setOpen(true)}>
					<p>{options[0].name ?? defaulValue}</p>
					<div>
						<img src={arrowDown} alt="arrow" />
					</div>
				</div>
				{open && options.length && (
					<div className={styles['select__context']}>
						{options.map((option) => (
							<div
								value={option.value}
								key={option.value}
								onClick={() => clickOption}
								className={styles['select__context__item']}
							>
								{option.name}
							</div>
						))}
					</div>
				)}
			</OutsideClickHandler>
		</div>
	);
}

export default MySelect;

