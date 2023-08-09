import Navbar from "./components/Navbar.tsx";
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import CartPage from "./pages/CartPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ManagePage from "./pages/ManagePage.tsx";
import ManageAddPage from "./pages/ManageAddPage.tsx";
import OrdersPage from "./pages/OrdersPage.tsx";
import StorePage from "./pages/StorePage.tsx";
import {ItemsProvider} from "./context/ItemsContext.tsx";

export default function App() {
	return (
		<ItemsProvider>
			<Navbar />
			<Container>
				<Routes>
					<Route path={"/"} element={<HomePage />} />
					<Route path={"/store"} element={<StorePage />} />
					<Route path={"/orders"} element={<OrdersPage />} />
					<Route path={"/cart"} element={<CartPage />} />
					
					<Route path={"/manage"} element={<ManagePage />} />
					<Route path={"/manage/add"} element={<ManageAddPage />} />
					<Route path={"/manage/:itemId"} element={<ManagePage />} />
				</Routes>
			</Container>
		</ItemsProvider>
	);
}
