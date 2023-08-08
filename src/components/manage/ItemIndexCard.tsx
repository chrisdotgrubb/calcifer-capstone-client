import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

export default function ItemIndexCard() {
	return (
		<Card style={{width: "15rem"}}>
			<Card.Img variant="top" src="/public/vite.svg" style={{height: "10rem"}} />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
				<Link to={`/manage/${123}`} state={"123"}>
					<Button variant="primary">Go somewhere</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}
