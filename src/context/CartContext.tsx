import {createContext, ReactNode} from "react";
import {ICartContext, ICartItem, IItem, useItemsContext} from "./Context.ts";
import useLocalStorage from "../hooks/useLocalStorage.ts";


interface CartProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);


export function CartProvider({children}: CartProviderProps) {
	const [cartItems, setCartItems] = useLocalStorage("cart", [] as ICartItem[]);
	
	const cartQty = cartItems.reduce(((acc, item) => item.qty + acc), 0);
	
	const context = useItemsContext();
	
	const totalPrice = cartItems.reduce(((acc, item: ICartItem) => {
		const currItem = getItemById(item._id);
		if (!currItem) return acc;
		const subTot = multiply(item.qty, Number(currItem.price));
		return add(subTot, acc);
	}), 0);
	
	function add(x: number, y: number): number {
		return ((x * 100) + (y * 100)) / 100;
	}
	
	function multiply(qty: number, price: number): number {
		return Number(((qty * (price * 100)) / 100).toFixed(2));
	}
	
	function getItemById(id: string): IItem | void {
		return context.items.find(i => i._id === id);
	}
	
	function getItemQty(id: string) {
		return cartItems.find(item => item._id === id)?.qty || 0;
	}
	
	
	function increaseCartQty(id: string) {
		let newCartItems: ICartItem[] = [];
		
		if (!cartItems.find(item => item._id === id)) {
			newCartItems = [...cartItems, {_id: id, qty: 1}];
		} else {
			newCartItems = cartItems.map(item => {
				if (item._id === id) {
					return {
						_id: id, qty: item.qty + 1
					};
				} else return item;
			});
		}
		
		setCartItems(newCartItems);
	}
	
	function decreaseCartQty(id: string) {
		let newCartItems: ICartItem[];
		
		if (!cartItems.find(item => item._id === id)) {
			newCartItems = [...cartItems];
		} else {
			newCartItems = cartItems.map(item => {
				if (item._id === id) {
					return {
						_id: id, qty: item.qty - 1
					};
				} else return item;
			});
			newCartItems = newCartItems.filter(item => item.qty > 0);
		}
		
		setCartItems(newCartItems);
	}
	
	function removeFromCart(id: string) {
		setCartItems(cartItems.filter(item => item._id !== id));
	}
	
	function emptyCart() {
		setCartItems([] as ICartItem[]);
	}
	
	
	return <CartContext.Provider
		value={{
			cartItems,
			cartQty,
			totalPrice,
			getItemById,
			getItemQty,
			increaseCartQty,
			decreaseCartQty,
			removeFromCart,
			emptyCart,
		}}>
		{children}
	</CartContext.Provider>;
}