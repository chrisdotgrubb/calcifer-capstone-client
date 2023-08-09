import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {ChangeEvent, useState} from "react";
import {useLocation} from "react-router-dom";

export interface IFormItem {
	name: string,
	description: string,
	price: number | string,
	img: string,
}

export default function EditItemPage() {
	const editedItem = useLocation().state.item;
	console.log(editedItem);
	const [formItem, setFormItem] = useState(editedItem as IFormItem);
	
	function handleChange(evt: ChangeEvent<HTMLInputElement>): void {
		if (evt.currentTarget.name === "price") {
			// only digits and up to 2 decimal places allowed
			if (!/^\d{0,4}(\.\d{0,2})?$/.test(evt.currentTarget.value)) return;
		}
		setFormItem({...formItem, [evt.currentTarget.name]: evt.currentTarget.value});
	}
	
	return (
		<Form>
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
