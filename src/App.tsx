import Navbar from "./components/Navbar.tsx";
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import CartPage from "./pages/CartPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ManagePage from "./pages/manage/ManagePage.tsx";
import EditItemPage from "./pages/manage/EditItemPage.tsx";
import AddItemPage from "./pages/manage/AddItemPage.tsx";
import OrdersPage from "./pages/OrdersPage.tsx";
import StorePage from "./pages/store/StorePage.tsx";
import {ItemsProvider} from "./context/ItemsContext.tsx";
import DetailPage from "./pages/store/DetailPage.tsx";

export default function App() {
	return (
		<ItemsProvider>
			<Navbar />
			<Container>
				<Routes>
					<Route path={"/"} element={<HomePage />} />
					<Route path={"/store"} element={<StorePage />} />
					<Route path={"/store/:itemId"} element={<DetailPage />} />
					
					<Route path={"/orders"} element={<OrdersPage />} />
					<Route path={"/cart"} element={<CartPage />} />
					
					<Route path={"/manage"} element={<ManagePage />} />
					<Route path={"/manage/add"} element={<AddItemPage />} />
					<Route path={"/manage/:itemId"} element={<EditItemPage />} />
				</Routes>
			</Container>
		</ItemsProvider>
	);
}
