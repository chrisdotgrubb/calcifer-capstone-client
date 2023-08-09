import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

interface ItemIndexCardProps {
	item: {
		_id: string;
		name: string;
		description: string;
		price: number;
		img: string;
	};
}

export default function ItemIndexCard({item}: ItemIndexCardProps) {
	return (
		<Card style={{width: "15rem"}}>
			<Card.Img variant="top" src={item.img} style={{height: "10rem"}} />
			<Card.Body>
				<Card.Title>{item.name} {item.price}</Card.Title>
				<Card.Text>
					{item.description}
				</Card.Text>
				<Link to={`/manage/${item._id}`} state={{item}}>
					<Button variant="primary">Edit</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}
