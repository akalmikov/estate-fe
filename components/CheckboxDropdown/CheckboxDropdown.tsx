import { CheckboxDropdownProps } from './CheckboxDropdown.props';
import styles from './CheckboxDropdown.module.css';
import cn from 'classnames';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AppContext } from '@/context/app.context';

export const CheckboxDropdown = ({ options, label, arrow = 'top', children, className, ...props }: CheckboxDropdownProps): JSX.Element => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

	const handleCheckboxChange = (option: string) => {
		const index = selectedOptions.indexOf(option);
		if (index == -1) {
			setSelectedOptions([...selectedOptions, option]);
		} else {
			const newSelectedOptions = [...selectedOptions];
			newSelectedOptions.splice(index, 1);
			setSelectedOptions(newSelectedOptions);
		}
	};
	return (
		<div className={styles.dropdown}>
			<div className={cn(styles.dropdownHeader, {
				[styles.ifOptionsSelected]: selectedOptions.length != 0
			})} onClick={() => setIsOpen(!isOpen)}>
				<div>
					<span>
						{label}
					</span>
					<div className={styles.selectedOptions}>
						<span>
							{selectedOptions.sort().join(', ')}
						</span>
					</div>
				</div>
				<div>
					<span className={isOpen ? styles.arrowUp : styles.arrowDown} />
				</div>
			</div>
			{isOpen && (
				<div className={styles.dropdownOptions}>
					{options.map((option) => (
						<label key={option} className={styles.option}>
							<input
								type="checkbox"
								checked={selectedOptions.indexOf(option) !== -1}
								onChange={() => handleCheckboxChange(option)}
							/>
							<span>
								{option}
							</span>
						</label>
					))}
				</div>
			)}
		</div>
	);
};