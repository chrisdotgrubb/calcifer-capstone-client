import {Dispatch, SetStateAction, useContext} from "react";
import {ItemsContext} from "./ItemsContext.tsx";


// Items Context
export interface IItem {
	_id: string;
	name: string;
	description: string;
	price: number | string;
	img: string;
}

export interface IItemsContext {
	items: IItem[];
	setItems: Dispatch<SetStateAction<IItem[]>>;
}

export function useItemsContext() {
	return useContext(ItemsContext);
}


// Cart Context
export interface ICartItem {
	id: string;
	qty: number;
}

export interface ICartContext {
	cartQty: number;
	cartItems: ICartItem[];
	getItemQty: (id: string) => number;
	increaseCartQty: (id: string) => void;
	decreaseCartQty: (id: string) => void;
	removeFromCart: (id: string) => void;
}
