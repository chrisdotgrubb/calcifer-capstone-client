import {useLocation} from "react-router-dom";
import {IItem} from "../../context/Context.ts";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext.tsx";

export default function DetailPage() {
	const currItem: IItem = useLocation().state.item;
	const cart = useContext(CartContext);
	const currItemCart = cart.cartItems.find(item => item.id === currItem._id) || 0;
	
	return (
		<Container>
			<Row className={"d-flex justify-content-center"}>
				<Col md={10} className={"d-flex justify-content-center"}>
					<h2>{currItem.name}</h2>
				</Col>
			</Row>
			<Row className={"d-flex justify-content-center"}>
				<Col md={6} className={"d-flex justify-content-center"}>
					<h2>{currItem.description}</h2>
				</Col>
				<Col md={6} className={"d-flex justify-content-center"}>
					<h3>${currItem.price}</h3>
				</Col>
			</Row>
			<h1 className={"text-danger"}>{currItemCart ? currItemCart.qty : 0} in cart</h1>
		</Container>
	);
}