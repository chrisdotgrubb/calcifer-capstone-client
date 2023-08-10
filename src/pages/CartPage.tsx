import ItemCard from "../components/store/ItemCard.tsx";
import {useCartContext} from "../context/Context.ts";
import {formatPrice} from "../util/format.ts";

export default function CartPage() {
	// const context = useItemsContext();
	const cart = useCartContext();
	const isEmpty = (!cart.cartItems || !cart.cartItems.length);
	const allItems = cart.cartItems.map(item => {
		const currItem = cart.getItemById(item._id);
		if (!currItem) return;
		return <ItemCard item={currItem} key={item._id} />;
	});
	return (
		<>        {
			isEmpty
				? <h1>empty</h1>
				: <h1>{allItems}</h1>
		}
			<h1>{formatPrice(cart.totalPrice)}</h1>
		</>
	);
}