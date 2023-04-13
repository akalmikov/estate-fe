import styles from './Realty.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import { RealtyProps } from './Realty.props';
import { Realty } from '@/interfaces/realty.interface';

export const RealtyItem: React.FC<RealtyProps> = (): JSX.Element => {

	const [realty, setRealty] = useState<Realty[]>([]);
	const [page, setPage] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get<Realty[]>(process.env.NEXT_PUBLIC_DOMAIN + `/api/ads?offset=${page}`);
			setRealty([...realty, ...data]);
		};
		fetchData();
	}, [page]);

	if (!realty) {
		return <div>Loading...</div>;
	}

	const handleScroll = () => {
		const scrollY = window.scrollY;
		const windowHeight = window.innerHeight;
		const fullHeight = document.documentElement.scrollHeight;
		if (scrollY + windowHeight >= fullHeight) {
			setPage(page + 20);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [page]);

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
