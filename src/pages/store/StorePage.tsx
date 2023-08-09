import {useItemsContext} from "../../context/Context.ts";
import ItemCard from "../../components/store/ItemCard.tsx";

export default function StorePage() {
	const context = useItemsContext();
	const allItems = context.items.map(item => {
		return <ItemCard item={item} key={item._id} />;
	});
	
	return (
		<>
			<h1>Store</h1>
			{allItems}
		</>
	);
}