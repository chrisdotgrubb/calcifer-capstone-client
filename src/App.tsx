import Navbar from "./components/Navbar.tsx";
import Container from "react-bootstrap/Container";
import {Route, Routes} from "react-router-dom";
import CartPage from "./pages/CartPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import ManagePage from "./pages/manage/ManagePage.tsx";
import EditItemPage from "./pages/manage/EditItemPage.tsx";
import AddItemPage from "./pages/manage/AddItemPage.tsx";
import OrdersPage from "./pages/orders/OrdersPage.tsx";
import StorePage from "./pages/store/StorePage.tsx";
import StoreDetailPage from "./pages/store/StoreDetailPage.tsx";
import AllContextProviders from "./context/AllContextProviders.tsx";
import OrderDetailPage from "./pages/orders/OrderDetailPage.tsx";

export default function App() {
	return (
		<AllContextProviders>
			<Navbar />
			<Container>
				<Routes>
					<Route path={"/"} element={<HomePage />} />
					<Route path={"/store"} element={<StorePage />} />
					<Route path={"/store/:itemId"} element={<StoreDetailPage />} />
					
					<Route path={"/orders"} element={<OrdersPage />} />
					<Route path={"/orders/:orderId"} element={<OrderDetailPage />} />
					<Route path={"/cart"} element={<CartPage />} />
					
					<Route path={"/manage"} element={<ManagePage />} />
					<Route path={"/manage/add"} element={<AddItemPage />} />
					<Route path={"/manage/:itemId"} element={<EditItemPage />} />
				</Routes>
			</Container>
		</AllContextProviders>
	);
}
