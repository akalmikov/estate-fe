import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { Realty } from '@/interfaces/realty.interface';

function Home({  }: HomeProps): JSX.Element {

	return (
		<>
			
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const { data: realty } = await axios.get<Realty[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/ads?offset=0');
	return {
		props: {
			realty
		}
	};
};

export interface HomeProps extends Record<string, unknown> {
	realty: Realty[]
}
