import {useLocation} from "react-router-dom";
import {formatPrice} from "../../util/format.ts";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {IOrder} from "./OrdersPage.tsx";

export default function OrderDetailPage() {
	const currOrder: IOrder = useLocation().state.order;
	const date = new Date(currOrder.createdAt);
	
	return (
		<Container>
			<Row className={"d-flex justify-content-center"}>
				<Col md={10} className={"d-flex justify-content-center"}>
					<h2>{formatPrice(currOrder.price)}</h2>
				</Col>
			</Row>
			<Row>
				<Col>
					<h3>{date.toLocaleDateString()}</h3>
				</Col>
			</Row>
		</Container>
	);
}