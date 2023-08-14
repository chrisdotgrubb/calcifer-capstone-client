import {useItemsContext} from "../../context/Context.ts";
import ItemCard from "../../components/store/ItemCard.tsx";
import Container from "react-bootstrap/Container";

export default function StorePage() {
	const context = useItemsContext();
	const allItems = context.items.map(item => {
		return <ItemCard item={item} key={item._id} />;
	});
	
	return (
		<div className={"mb-5"}>
			<Container className={"d-flex flex-column align-items-center"}>
				<h1>Store</h1>
			</Container>
			{allItems}
		</div>
	);
}