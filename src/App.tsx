import Navbar from "./components/Navbar.tsx";
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import CartPage from "./pages/CartPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import OrdersPage from "./pages/OrdersPage.tsx";
import StorePage from "./pages/StorePage.tsx";

export default function App() {
	return (
		<>
			<Navbar />
			<Container>
				<Routes>
					<Route path={"/"} element={<HomePage />} />
					<Route path={"/store"} element={<StorePage />} />
					<Route path={"/orders"} element={<OrdersPage />} />
					<Route path={"/cart"} element={<CartPage />} />
				</Routes>
			</Container>
		</>
	);
}
