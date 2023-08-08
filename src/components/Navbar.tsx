import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBS from "react-bootstrap/Navbar";


export default function Navbar() {
	return (
		<NavbarBS expand="lg" sticky={"top"}>
			<Container>
				<NavbarBS.Brand href="/">Home</NavbarBS.Brand>
				<NavbarBS.Toggle />
				<NavbarBS.Collapse>
					<Nav className={"me-auto"}>
						<Nav.Link href={"/store"}>Store</Nav.Link>
						<Nav.Link href={"/orders"}>Orders</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href={"/cart"}>Cart</Nav.Link>
					</Nav>
				</NavbarBS.Collapse>
			</Container>
		</NavbarBS>
	);
}
