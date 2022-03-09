import React, { useState } from 'react';
import { oneOfType, string, object, array } from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from './styles.module.scss';
import arrowDown from '../../assets/images/select-arrow.svg';

function Select({
	options = ['1', '2', '3', '4'],
	value = '',
	placeholder = 'Сортування',
	onChange = () => {},
}) {
	const [open, setOpen] = useState(false);

	const changeOpen = (v) => {
		setOpen(v);
	};

	const clickOption = (i) => {
		onChange(i);
		changeOpen(false);
	};

	return (
		<div className={styles['select__wrapper']}>
			<OutsideClickHandler onOutsideClick={() => changeOpen(false)}>
				<div className={styles['select__head']} onClick={() => changeOpen(true)}>
					<p>{value.title ?? placeholder}</p>
					<div>
						<img src={arrowDown} alt="arrow" />
					</div>
				</div>
				{open && (
					<>
						<div className={styles['select__context']}>
							{options.map((i) => (
								<p
									key={i.value}
									className={styles['select__context__item']}
									onClick={() => clickOption(i)}
								>
									По 20 штук
								</p>
							))}
						</div>
					</>
				)}
			</OutsideClickHandler>
		</div>
	);
}

Select.propTypes = {
	options: array,
	placeholder: string,
	value: oneOfType([string, object]),
};

export default Select;
