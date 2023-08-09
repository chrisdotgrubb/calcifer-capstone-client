import {createContext, ReactNode, useEffect, useState} from "react";
import axios from "axios";

interface ItemsProviderProps {
	children: ReactNode;
}

interface IContext {
	items: {
		_id: string
		name: string
		description: string
		price: number
		img: string
	}[];
}

const URL = "http://localhost:3001";

export const ItemsContext = createContext({} as IContext);


export function ItemsProvider({children}: ItemsProviderProps) {
	const [items, setItems] = useState([]);
	
	async function getItems() {
		try {
			const response = await axios.get(`${URL}/api/items/`);
			setItems(response.data);
		} catch (err) {
			console.log(err);
		}
	}
	
	const context = {items};
	useEffect(() => {
		getItems();
	}, []);
	
	return (
		<ItemsContext.Provider value={context}>
			{children}
		</ItemsContext.Provider>
	);
}