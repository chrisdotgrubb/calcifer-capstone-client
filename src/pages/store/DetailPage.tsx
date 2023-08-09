import {useLocation} from "react-router-dom";
import {IItem} from "../../context/Context.ts";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";


export default function DetailPage() {
	const currItem: IItem = useLocation().state.item;
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
		</Container>
	);
}