import {IItem} from "../../context/Context.ts";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

interface ItemCardProps {
	item: IItem;
}

export default function ItemCard({item}: ItemCardProps) {
	return (
		<Card className="text-center mt-3 mx-5">
			<Card.Body>
				<Card.Title>{item.name}</Card.Title>
				<Card.Text>
					{item.description}
				</Card.Text>
				<Container>
					<Link to={`/store/${item._id}`} state={{item}}>
						<Button className={"m-2"} variant="outline-secondary">View Details</Button>
					</Link>
				</Container>
				<Container>
					<Button className={"m-2"} variant="outline-success">Add to cart</Button>
				</Container>
			</Card.Body>
			<Card.Footer>${item.price}</Card.Footer>
		</Card>
	);
}