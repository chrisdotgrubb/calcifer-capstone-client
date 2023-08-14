import {createContext, ReactNode, useEffect, useState} from "react";
import axios from "axios";
import {IItem, IItemsContext} from "./Context.ts";
import {URL} from "../main.tsx";


interface ItemsProviderProps {
	children: ReactNode;
}

export const ItemsContext = createContext({} as IItemsContext);


export function ItemsProvider({children}: ItemsProviderProps) {
	const [items, setItems] = useState([] as IItem[]);
	
	async function getItems() {
		try {
			const response = await axios.get(`${URL}/api/items/`);
			setItems(response.data);
		} catch (err) {
			console.log(err);
		}
	}
	
	const context: IItemsContext = {
		items,
		setItems,
	};
	
	useEffect(() => {
		getItems();
	}, []);
	
	return (
		<ItemsContext.Provider value={context}>
			{children}
		</ItemsContext.Provider>
	);
}