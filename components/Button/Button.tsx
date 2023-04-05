import { ButtonProps } from './Button.prop';
import styles from './Button.module.css';
import ArrowIcon from './arrow_big.svg';
import cn from 'classnames';

export const Button = ({ appearence, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {

	return <button
		className={cn(styles.button, className, {
			[styles.primary]: appearence == 'primary',
			[styles.gost]: appearence == 'gost'
		})}
		{...props}>
		{children}
		{arrow != 'none' && <span className={cn(styles.arrow, {
			[styles.down]: arrow == 'down'
		})}><ArrowIcon /></span>}
	</button>;
};