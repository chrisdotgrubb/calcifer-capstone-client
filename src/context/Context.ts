import {Dispatch, SetStateAction, useContext} from "react";
import {ItemsContext} from "./ItemsContext.tsx";
import {CartContext} from "./CartContext.tsx";


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
	_id: string;
	qty: number;
}

export interface ICartContext {
	cartQty: number;
	cartItems: ICartItem[];
	totalPrice: number;
	getItemById: (id: string) => IItem | void;
	getItemQty: (id: string) => number;
	increaseCartQty: (id: string) => void;
	decreaseCartQty: (id: string) => void;
	removeFromCart: (id: string) => void;
	emptyCart: () => void;
}

export function useCartContext() {
	return useContext(CartContext);
}