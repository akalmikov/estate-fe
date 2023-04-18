import { FilterProps } from './Filter.props';
import styles from './Filter.module.css';
import cn from 'classnames';
import Logo from './radius_logo.svg'
import { Button } from '@/components';
import { CheckboxDropdown } from '@/components/CheckboxDropdown/CheckboxDropdown';

export const Filter = ({ ...props }: FilterProps): JSX.Element => {
	return (
		<div className={styles.filter} {...props} >
			<CheckboxDropdown options={['1', '2', '3', '4', '5+']} label='Кімнати '>Кімнати </CheckboxDropdown>
			<CheckboxDropdown options={['1', '2', '3', '4', '5+']} label='Район '>Райони </CheckboxDropdown>
			<CheckboxDropdown options={['1', '2', '3', '4', '5+']} label='Ціна '>Кількість кімнат </CheckboxDropdown>
		</div>
	);
};