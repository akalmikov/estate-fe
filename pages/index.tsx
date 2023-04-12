import { withLayout } from '@/layout/Layout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Realty } from '@/interfaces/realty.interface';
import { RealtyProps } from '@/layout/Realty/Realty.props';

function Home({ }: RealtyProps): JSX.Element {
	return (
		<>		
		</>
	);
}

export default withLayout(Home);

// export const getStaticProps: GetStaticProps<HomeProps> = async ({ }) => {
// 	const page  = 0 * 50;
// 	const { data: realty } = await axios.get<Realty[]>(process.env.NEXT_PUBLIC_DOMAIN + `/api/ads?offset=${page}`);
// 	return {
// 		props: {
// 			realty,
// 		}
// 	};
// };

export interface HomeProps extends Record<string, unknown> {
	// realty: Realty[],
}
