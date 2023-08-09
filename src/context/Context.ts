import {useContext} from "react";
import {ItemsContext} from "./ItemsContext.tsx";

export function useItemsContext() {
	return useContext(ItemsContext);
}