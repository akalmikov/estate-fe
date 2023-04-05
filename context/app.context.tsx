import { Realty } from '@/interfaces/realty.interface';
import { createContext, ReactNode, useState } from 'react';

export interface IAppContext {
	realty: Realty[];
	setRealty?: (newRealty: Realty[]) => void;
}

export const AppContext = createContext<IAppContext>({ realty: [] });

export const AppContextProvider = ({ realty, children }: IAppContext & { children: ReactNode }): JSX.Element => {
	const [realtyState, setRealtyState] = useState<Realty[]>(realty);
	const setRealty = (newRealty: Realty[]) => {
		setRealtyState(newRealty);
	}

	return <AppContext.Provider value={{ realty: realtyState, setRealty }}>
		{children}
	</AppContext.Provider>
}