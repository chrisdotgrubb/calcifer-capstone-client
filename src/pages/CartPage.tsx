import {useContext} from "react";
import {CartContext} from "../context/CartContext.tsx";

export default function CartPage() {
	const cart = useContext(CartContext);
	console.log(cart);
	return (
		<h1>Cart</h1>
	);
}