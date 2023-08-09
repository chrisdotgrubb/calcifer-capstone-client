import {createContext, ReactNode, useState} from "react";
import {ICartContext, ICartItem} from "./Context.ts";


interface CartProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as ICartContext);


export function CartProvider({children}: CartProviderProps) {
	const [cartItems, setCartItems] = useState([] as ICartItem[]);
	const cartQty = cartItems.reduce(((acc, item) => item.qty + acc), 0);
	
	function getItemQty(id: string) {
		return cartItems.find(item => item.id === id)?.qty || 0;
	}
	
	function increaseCartQty(id: string) {
		let newCartItems: ICartItem[] = [];
		
		if (!cartItems.find(item => item.id === id)) {
			newCartItems = [...cartItems, {id, qty: 1}];
		} else {
			newCartItems = cartItems.map(item => {
				if (item.id === id) {
					return {
						id, qty: item.qty + 1
					};
				} else return item;
			});
		}
		
		setCartItems(newCartItems);
	}
	
	function decreaseCartQty(id: string) {
		let newCartItems: ICartItem[];
		
		if (!cartItems.find(item => item.id === id)) {
			newCartItems = [...cartItems];
		} else {
			newCartItems = cartItems.map(item => {
				if (item.id === id) {
					return {
						id, qty: item.qty - 1
					};
				} else return item;
			});
			newCartItems = newCartItems.filter(item => item.qty > 0);
		}
		
		setCartItems(newCartItems);
	}
	
	function removeFromCart(id: string) {
		setCartItems(cartItems.filter(item => item.id !== id));
	}
	
	
	return <CartContext.Provider
		value={{
			cartItems,
			cartQty,
			getItemQty,
			increaseCartQty,
			decreaseCartQty,
			removeFromCart,
		}}>
		{children}
	</CartContext.Provider>;
}