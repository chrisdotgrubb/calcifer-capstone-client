import {IOrder} from "../../pages/orders/OrdersPage.tsx";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {formatPrice} from "../../util/format.ts";

interface OrderCardProps {
	order: IOrder;
}

export default function OrderCard({order}: OrderCardProps) {
	
	return (
		<>
			
			<Card className="text-center mt-3 mx-5">
				<Card.Body>
					<Card.Title>{order._id}</Card.Title>
					<Card.Text>
						{order._id}
					</Card.Text>
					<Link to={`/orders/${order._id}`} state={{order}}>
						<Button className={"m-2"} variant="outline-secondary">View Details</Button>
					</Link>
				</Card.Body>
				<Card.Footer>{formatPrice(order.price)}</Card.Footer>
			</Card>
		</>
	);
}