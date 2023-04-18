import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';
import { Header } from './Header/Header';
import { Map } from './Map/Map';
import { Footer } from './Footer/Footer';
import { FunctionComponent } from 'react';
import { AppContextProvider, IAppContext } from '@/context/app.context';
import { RealtyItem } from './Realty/Realty';
import { Filter } from './Filter/Filter';

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Map className={styles.map} />
			<Filter className={styles.filter} />
			<div className={styles.body} >
				{children}
				<RealtyItem realty={[]} />
			</div>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider realty={props.realty}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		)
	}
}