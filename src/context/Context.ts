import {Dispatch, SetStateAction, useContext} from "react";
import {ItemsContext} from "./ItemsContext.tsx";

export interface IItem {
	_id: string;
	name: string;
	description: string;
	price: number | string;
	img: string;
}

export interface IContext {
	items: IItem[];
	setItems: Dispatch<SetStateAction<IItem[]>>;
}

export function useItemsContext() {
	return useContext(ItemsContext);
}