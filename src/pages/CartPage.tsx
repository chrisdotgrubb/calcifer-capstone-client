import ItemCard from "../components/store/ItemCard.tsx";
import {ICartItem, useCartContext} from "../context/Context.ts";
import {formatPrice} from "../util/format.ts";
import axios from "axios";
import Button from "react-bootstrap/Button";
import {URL} from "../main.tsx";


interface IReqData {
	isDelivery: boolean;
	cartItems: ICartItem[];
}

export default function CartPage() {
	// const context = useItemsContext();
	const cart = useCartContext();
	const isEmpty = (!cart.cartItems || !cart.cartItems.length);
	const allItems = cart.cartItems.map(item => {
		const currItem = cart.getItemById(item._id);
		if (!currItem) return;
		return <ItemCard item={currItem} key={item._id} />;
	});
	
	async function handleCreateOrder() {
		const data: IReqData = {
			isDelivery: false,
			cartItems: cart.cartItems,
		};
		try {
			const response = await axios.post(`${URL}/api/orders`, data);
			if (response.status === 201) {
				cart.emptyCart();
			}
		} catch (err) {
			console.log(err);
		}
	}
	
	return (
		<>        {
			isEmpty
				? <h1>empty</h1>
				: <div>{allItems}</div>
		}
			<h1>{formatPrice(cart.totalPrice)}</h1>
			<Button onClick={handleCreateOrder} disabled={cart.cartQty === 0}>Place order</Button>
		</>
	);
}