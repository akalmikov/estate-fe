import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 'm', children, color = 'gray', href, className, ...props }: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, className, {
				[styles.s]: size == 's',
				[styles.m]: size == 'm',
				[styles.l]: size == 'l',
				[styles.gray]: color == 'gray',
				[styles.blue]: color == 'blue',
				[styles.red]: color == 'red',
				[styles.primary]: color == 'primary',
			})}
			{...props}
		>
			{
				href
					? <a href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
	);
};