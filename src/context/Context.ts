import {Dispatch, SetStateAction, useContext} from "react";
import {ItemsContext} from "./ItemsContext.tsx";

export interface IContext {
	items: {
		_id: string
		name: string
		description: string
		price: number
		img: string
	}[];
	setItems: Dispatch<SetStateAction<never[]>>;
}

export function useItemsContext() {
	return useContext(ItemsContext);
}