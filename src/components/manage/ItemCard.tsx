import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {IItem, IItemsContext, useItemsContext} from "../../context/Context.ts";
import Container from "react-bootstrap/Container";
import axios from "axios";
import {formatPrice} from "../../util/format.ts";
import { URL } from "../../main.tsx";
interface ItemIndexCardProps {
	item: IItem;
}


export default function ItemCard({item}: ItemIndexCardProps) {
	const context: IItemsContext = useItemsContext();
	
	
	async function handleDelete(deletedItem: IItem) {
		try {
			await axios.delete(`${URL}/api/items/${deletedItem._id}/`);
			const notDeletedItems = context.items.filter(item => item._id !== deletedItem._id);
			context.setItems(notDeletedItems);
		} catch (err) {
			console.log(err);
		}
	}
	
	function handleClick(): void {
		handleDelete(item);
	}
	
	return (
		<Card className={"m-2"} style={{width: "15rem"}}>
			<Card.Img variant="top" src={item.img} style={{height: "10rem"}} />
			<Card.Body className={"d-flex flex-column justify-content-between"}>
				<Card.Title>{item.name}<br />{formatPrice(item.price)}</Card.Title>
				<Card.Text>
					{item.description}
				</Card.Text>
				<Container className={"d-flex"}>
					<Link to={`/manage/${item._id}`} state={{item}} className={"me-auto"}>
						<Button variant={"primary"}>Edit</Button>
					</Link>
					<Button variant={"danger"} onClick={handleClick}>Delete</Button>
				</Container>
			</Card.Body>
		</Card>
	);
}
