import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import ItemIndexCard from "../components/manage/ItemIndexCard.tsx";
import {useItemsContext} from "../context/Context.ts";

export default function ManagePage() {
	const items = useItemsContext();
	console.log(items);
	return (
		<>
			<h1>Manage</h1>
			<Link to={"/manage/add"}>
				<h2>Add item</h2>
			</Link>
			<Container>
				<ItemIndexCard />
			</Container>
		</>
	);
}