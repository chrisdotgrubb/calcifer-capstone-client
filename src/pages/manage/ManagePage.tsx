import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import ItemCard from "../../components/manage/ItemCard.tsx";
import {useItemsContext} from "../../context/Context.ts";
import {IContext} from "../../context/Context.tsx";


export default function ManagePage() {
	const context: IContext = useItemsContext();
	
	const allItems = (context.items.length > 0) ?
		context.items.map(item => <ItemCard key={item._id} item={item} />) :
		[];
	
	return (
		<>
			<h1>Manage</h1>
			<Link to={"/manage/add"}>
				<h2>Add item</h2>
			</Link>
			<Container className={"d-flex flex-wrap"}>
				{allItems}
			</Container>
		</>
	);
}