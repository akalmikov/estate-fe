import cn from 'classnames';
import styles from './Realty.module.css'
import { Realty } from '@/interfaces/realty.interface';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/context/app.context';
import axios from 'axios';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/core/styles.scss';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

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

export const RealtyItem = (): JSX.Element => {

	const { realty, setRealty } = useContext(AppContext)

	const realtyItemBlock = () => {

	}

	const getImagesFromTelegraph = (link: string) => {
		const [images, setImages] = useState<Image[]>([]);

		useEffect(() => {
			axios.get(link)
				.then(response => {
					const images: Image[] = response.data['result']['content'].map((el: TgImg) => ({
						src: 'https://telegra.ph/' + el.attrs.src || '',
						alt: el.attrs.src || '',
					}));
					setImages(images);
				})
				.catch(error => {
					console.error(error);
				});
		}, []);

		return (
			<AwesomeSlider animation='cubeAnimation' transitionDelay={200} cssModule={AwesomeSliderStyles}>
				{images.map((image, index) => (
					<div key={index} data-src={image.src} />
				))}
			</AwesomeSlider>
		);
	}

	return (

		<ul className={styles.ul}>
			<div className={styles.realties}>
				{realty.map(d => <li key={d.id}>
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
							{/* {d.telegraph.split('/')[3]} */}
							{getImagesFromTelegraph('https://api.telegra.ph/getPage/' + d.telegraph.split('/')[3] + '?return_content=true')}
						</div>
					</div>
				</li>)}
			</div>
		</ul>
	);
};

// export { Realty };
