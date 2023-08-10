import {IItem} from "../../context/Context.ts";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext.tsx";
import {formatPrice} from "../../util/format.ts";

interface ItemCardProps {
	item: IItem;
}

export default function ItemCard({item}: ItemCardProps) {
	const {getItemQty, increaseCartQty, decreaseCartQty, removeFromCart} = useContext(CartContext);
	const qty = getItemQty(item._id);
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
				<Container className={"d-flex flex-column align-items-center col-md-6"}>
					{qty === 0 ?
						<Button className={""} onClick={() => increaseCartQty(item._id)}>add to cart</Button>
						
						: <div>
							<div className={"d-flex align-items-center"}>
								<Button onClick={() => decreaseCartQty(item._id)}>-</Button>
								<div>{qty} in cart</div>
								<Button onClick={() => increaseCartQty(item._id)}>+</Button>
							</div>
							<Button
								variant={"danger"} size={"sm"} onClick={() => removeFromCart(item._id)}>remove</Button>
						</div>}
				</Container>
			</Card.Body>
			<Card.Footer>{formatPrice(item.price)}</Card.Footer>
		</Card>
	);
}