import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Realty } from '@/interfaces/realty.interface';

function Home({ }: HomeProps): JSX.Element {
	return (
		<>		
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async ({ }) => {
	const page  = 0 * 50;
	const { data: realty } = await axios.get<Realty[]>(process.env.NEXT_PUBLIC_DOMAIN + `/api/ads?offset=${page}`);
	return {
		props: {
			realty,
			page
		}
	};
};

export interface HomeProps extends Record<string, unknown> {
	realty: Realty[],
	page: number
}
