import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import ItemIndexCard from "../components/manage/ItemIndexCard.tsx";

export default function ManagePage() {
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