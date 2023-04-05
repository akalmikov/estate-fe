// import { withLayout } from '@/layout/Layout';
// import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
// import { useState } from 'react';
// import axios from 'axios';
// import { District } from '@/interfaces/districts.interface';
// import { Realty } from '@/interfaces/realty.interface';
// import { ParsedUrlQuery } from 'querystring';

// function Realty ({ districts, realties }: RealtyProps): JSX.Element {

// 	return (
// 		<>
// 		{realties.length}
// 		</>
// 	);
// }

// export default withLayout(Realty);

// export const getStaticPaths: GetStaticPaths = async () => {
// 	const { data: realties } = await axios.get<Realty[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/ads');
// 	return {
// 		paths: realties.flatMap(r => 'realties' + r.id),
// 		fallback: true
// 	};
// }

// export const getStaticProps: GetStaticProps<RealtyProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
// 	if (!params)
// 		params = {'offset': '0'}
// 	const { data: districts } = await axios.get<District[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/districts');
// 	const { data: realties } = await axios.get<Realty[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/ads' + params );
// 	return {
// 		props: {
// 			districts,
// 			realties
// 		}
// 	};
// };

// export interface RealtyProps extends Record<string, unknown> {
// 	districts: District[];
// 	realties: Realty[];
// }
