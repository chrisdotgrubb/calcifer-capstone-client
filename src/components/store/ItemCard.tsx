import {IItem} from "../../context/Context.ts";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

interface ItemCardProps {
	item: IItem;
}

export default function ItemCard({item}: ItemCardProps) {
	return (
		<Card className="text-center mt-3 mx-5">
			{/*<Card.Header>{item.name}</Card.Header>*/}
			<Card.Body>
				<Card.Title>{item.name}</Card.Title>
				<Card.Text>
					{item.description}
				</Card.Text>
				<Container className={"d-flex justify-content-center"}>
					<Button className={"m-2"} variant="outline-secondary">View Details</Button>
					<Button className={"m-2"} variant="outline-success">Add to cart</Button>
				</Container>
			</Card.Body>
			<Card.Footer className="text-muted">${item.price}</Card.Footer>
		</Card>
	);
}