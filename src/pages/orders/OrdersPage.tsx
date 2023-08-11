import axios from "axios";
import {useEffect, useState} from "react";
import OrderCard from "../../components/orders/OrderCard.tsx";

const URL = "http://localhost:3001";

export interface IUser {
	username: string;
	password: string;
	role: string;
	isActive: boolean;
}

export interface IOrder {
	_id: string;
	price: number;
	isDelivery: boolean;
	isPaid: boolean;
	user: IUser;
	orderItems: IOrderItem;
	createdAt: string;
}

export interface IOrderItem {
	name: string;
	price: number;
	qty: number;
	img: string;
	order: IOrder;
	
}


export default function OrdersPage() {
	const [orders, setOrders] = useState([] as IOrder[]);
	
	async function getOrders() {
		try {
			const response = await axios.get(`${URL}/api/orders/`);
			console.log(response);
			setOrders(response.data);
		} catch (err) {
			console.log(err);
		}
	}
	
	useEffect(() => {
		getOrders();
	}, []);
	
	const allOrders = orders.map(order => <OrderCard key={order._id} order={order} />);
	
	
	return (
		<>
			<h1>Orders</h1>
			{allOrders}
		</>
	);
}