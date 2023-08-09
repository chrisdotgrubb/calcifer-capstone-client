import {createContext, ReactNode} from "react";

interface ItemsProviderProps {
	children: ReactNode;
}

export const ItemsContext = createContext({});


export function ItemsProvider({children}: ItemsProviderProps) {
	const items = [1, 2, 3];
	return (
		<ItemsContext.Provider value={items}>
			{children}
		</ItemsContext.Provider>
	);
}