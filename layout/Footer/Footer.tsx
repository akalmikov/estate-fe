import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import classNames from 'classnames';
import { format } from 'date-fns';
import InstagramIcon from './inst.svg';
import TelegramIcon from './tg.svg';
import FBIcon from './fb.svg';
import FBMIcon from './fbm.svg';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (<footer className={cn(className, styles.footer)} {...props}>
		<div>
			Powered by Radius Real Estate ©. All rights reserved 2022 - {format(new Date(), 'yyyy')}
		</div>
		
		<div>
			<span className={cn(className, styles.span)}> Зв'яжіться з нами: </span>
			<a href='https://t.me/therealestatebot' target='_blank' ><TelegramIcon /></a>
			<a href='https://www.facebook.com/messages/t/157675048150136' target='_blank' ><FBMIcon /></a>
			<a href='https://www.instagram.com/radiusrent/' target='_blank' ><InstagramIcon /></a>
			<a href='https://www.facebook.com/radiusrent' target='_blank' ><FBIcon /></a>
		</div>
	</footer>
	);
};