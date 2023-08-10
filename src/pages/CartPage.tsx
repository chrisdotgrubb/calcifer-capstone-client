import ItemCard from "../components/store/ItemCard.tsx";
import {useCartContext, useItemsContext} from "../context/Context.ts";

export default function CartPage() {
	const context = useItemsContext();
	const cart = useCartContext();
	const isEmpty = (!cart.cartItems || !cart.cartItems.length);
	const allItems = cart.cartItems.map(item => {
		const currItem = context.items.find(i => i._id === item._id);
		if (!currItem) return;
		return <ItemCard item={currItem} key={item._id} />;
	});
	return (
		<>        {
			isEmpty
				? <h1>empty</h1>
				: <h1>{allItems}</h1>
		}
		</>
	);
}