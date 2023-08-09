import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {ChangeEvent, FormEvent, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import {IItem, useItemsContext} from "../../context/Context.ts";


const URL = "http://localhost:3001";
export default function EditItemPage() {
	const editedItem = useLocation().state.item;
	const [formItem, setFormItem] = useState(editedItem as IItem);
	const context = useItemsContext();
	const navigate = useNavigate();
	
	function handleChange(evt: ChangeEvent<HTMLInputElement>): void {
		if (evt.currentTarget.name === "price") {
			// only digits and up to 2 decimal places allowed
			if (!/^\d{0,4}(\.\d{0,2})?$/.test(evt.currentTarget.value)) return;
		}
		setFormItem({...formItem, [evt.currentTarget.name]: evt.currentTarget.value});
	}
	
	async function handleEdit(updatedItem: IItem) {
		try {
			await axios.put(`${URL}/api/items/${updatedItem._id}/`, updatedItem);
			const newItems = context.items.map(i => {
				return i._id !== updatedItem._id ? i : updatedItem;
			});
			context.setItems(newItems);
		} catch (err) {
			console.log(err);
		}
	}
	
	function handleSubmit(evt: FormEvent) {
		evt.preventDefault();
		handleEdit(formItem);
		navigate("/manage");
	}
	
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3">
				<Form.Label>Name</Form.Label>
				<Form.Control
					type={"text"} placeholder={"Name"} name={"name"} value={formItem.name}
					onChange={handleChange} />
			</Form.Group>
			
			<Form.Group className="mb-3">
				<Form.Label>Description</Form.Label>
				<Form.Control
					type={"text"} placeholder={"Description"} name={"description"} value={formItem.description}
					onChange={handleChange} />
			</Form.Group>
			
			<Form.Group className="mb-3">
				<Form.Label>Price</Form.Label>
				<Form.Control
					type={"text"} placeholder={"Price"} name={"price"} value={formItem.price}
					onChange={handleChange} />
			</Form.Group>
			
			<Form.Group className="mb-3">
				<Form.Label>Image location</Form.Label>
				<Form.Control
					type={"text"} placeholder={"Image path"} name={"img"} value={formItem.img}
					onChange={handleChange} />
			</Form.Group>
			
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}
