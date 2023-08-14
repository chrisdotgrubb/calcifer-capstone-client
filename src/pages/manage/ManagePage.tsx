import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import ItemCard from "../../components/manage/ItemCard.tsx";
import {useItemsContext} from "../../context/Context.ts";
import {IItemsContext} from "../../context/Context.tsx";
import Button from "react-bootstrap/Button";


export default function ManagePage() {
	const context: IItemsContext = useItemsContext();
	
	const allItems = (context.items.length > 0) ?
		context.items.map(item => <ItemCard key={item._id} item={item} />) :
		[];
	
	return (
		<Container className={"d-flex flex-column align-items-center"}>
			<h1 className={"m-5"}>Manage items</h1>
			<Link to={"/manage/add"}>
				<Button className={"mb-4"}>Add item</Button>
			</Link>
			<Container className={"d-flex flex-wrap"}>
				{allItems}
			</Container>
		</Container>
	);
}