import cn from 'classnames';
import styles from './Realty.module.css'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/context/app.context';
import axios from 'axios';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import { GetStaticProps } from 'next';
import { RealtyProps } from './Realty.props';
import { Realty } from '@/interfaces/realty.interface';

interface Image {
	src: string;
	alt: string;
}

interface TgImg {
	tag: string;
	attrs: {
		src: string;
	}
}

export const RealtyItem: React.FC<RealtyProps> = ({ }): JSX.Element => {

	// const { realty, setRealty } = useContext(AppContext)

	const [realty, setRealty] = useState<Realty[]>([]);
	const [visiblePosts, setVisiblePosts] = useState(realty.slice(0, 10));

	useEffect(() => {
		const fetchData = async () => {
			const page = 0 * 50;
			const response = await axios.get<Realty[]>(process.env.NEXT_PUBLIC_DOMAIN + `/api/ads?offset=${page}`,
				{ headers: { 'Access-Control-Allow-Origin': '*', } });
			setRealty(response.data);
		};
		fetchData();
	}, []);

	if (!realty) {
		return <div>Loading...</div>;
	}

	const handleScroll = () => {
		const scrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const fullHeight = document.documentElement.scrollHeight;

		if (scrollY + windowHeight >= fullHeight) {
			setVisiblePosts((prevVisiblePosts) => {
				const lastVisiblePostIndex = realty.indexOf(prevVisiblePosts[prevVisiblePosts.length - 1]);
				const nextVisiblePosts = realty.slice(lastVisiblePostIndex + 1, lastVisiblePostIndex + 11);
				return [...prevVisiblePosts, ...nextVisiblePosts];
			});
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const makeImageSlider = (images: string) => {

		return (
			<AwesomeSlider
				animation='cubeAnimation'
				transitionDelay={200}>
				{images.split(',').map((image, index) => (
					<div key={index} data-src={'https://telegra.ph' + image} />
				))}
			</AwesomeSlider>
		);
	}

	return (

		<ul className={styles.ul}>
			<div className={styles.realties}>
				{realty.map((d: Realty) => <li key={d.id}>
					<div className={styles.li}>
						<div className={styles.details}>
							<div className={styles.rid}>
								Номер оголошення: <b>{d.id}</b>
							</div>
							{/* <div className={styles.rtitle}>
								Оренда {d.rooms}-x кімнатної квартири в {d.district.replace('ий', 'ому')} районі
							</div> */}
							<div className={styles.district}>
								Район: {d.district}
							</div>
							<div className={styles.district}>
								Кількість кімнат: {d.rooms} кімнатна
							</div>
							<div className={styles.floors}>
								Поверх: {d.floor} з {d.floors}
							</div>
							<div>
								Площа: {d.surface} м²
							</div>
							<div className={styles.price}>
								Ціна: {d.price} грн
							</div>
						</div>
						<div className={styles.awssld}>
							{makeImageSlider(d.photos)}
						</div>
					</div>
				</li>)}
			</div>
		</ul>
	);
};

// export { Realty };
