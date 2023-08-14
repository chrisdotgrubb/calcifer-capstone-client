import {useLocation} from "react-router-dom";
import {IItem} from "../../context/Context.ts";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext.tsx";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import {formatPrice} from "../../util/format.ts";

export default function StoreDetailPage() {
	const currItem: IItem = useLocation().state.item;
	const {getItemQty, increaseCartQty, decreaseCartQty, removeFromCart} = useContext(CartContext);
	const qty = getItemQty(currItem._id);
	return (
		<>
			<Container>
				<Row className={"d-flex justify-content-center"}>
					<Col md={10} className={"d-flex justify-content-center"}>
						<h2>{currItem.name}</h2>
					</Col>
				</Row>
				<Row className={"d-flex justify-content-center align-items-center"}>
					<Image src={currItem.img} style={{height: "25rem", width: "25rem"}} />
				</Row>
				<Row className={"d-flex justify-content-center"}>
					<Col md={6} className={"d-flex justify-content-center"}>
						<p>{currItem.description}</p>
					</Col>
					<Col md={6} className={"d-flex justify-content-center"}>
						<h3>{formatPrice(currItem.price)}</h3>
					</Col>
				</Row>
			</Container>
			<Container className={"d-flex flex-column align-items-center col-md-6 text-center"}>
				{qty === 0 ?
					<Button className={"w-25"} onClick={() => increaseCartQty(currItem._id)}>add to cart</Button>
					
					: <div>
						<div className={"d-flex align-items-center"}>
							<Button onClick={() => decreaseCartQty(currItem._id)}>-</Button>
							<div>{qty} in cart</div>
							<Button onClick={() => increaseCartQty(currItem._id)}>+</Button>
						</div>
						<Button
							variant={"danger"} size={"sm"} onClick={() => removeFromCart(currItem._id)}>remove</Button>
					</div>}
			</Container>
		</>
	);
}