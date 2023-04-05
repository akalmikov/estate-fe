import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import Logo from './radius_logo.svg'

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return (
		<header className={styles.header} {...props} >
			<div className={styles.logo_group}>
				<Logo /> 
				<span className={styles.title}> Radius Estate</span>
			</div>
		</header>
	);
};