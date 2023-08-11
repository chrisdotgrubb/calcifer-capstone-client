import Container from "react-bootstrap/Container";

export default function HomePage() {
	return (
		<Container className={"d-flex flex-column align-items-center justify-context-center m-3"}>
			<h1 className={"m-5"}>Home</h1>
			<h2>Welcome to the store, please shop</h2>
		</Container>
	);
}