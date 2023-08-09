import {ChangeEvent, useState} from "react";
import AddItemForm from "../../components/manage/AddItemForm.tsx";
import axios from "axios";
import {useItemsContext} from "../../context/Context.ts";
import {IContext} from "../../context/Context.tsx";

export interface IFormItem {
	name: string,
	description: string,
	price: number | string,
	img: string,
}

const URL = "http://localhost:3001";

export default function AddItemPage() {
	const defaultFormItem: IFormItem = {
		name: "",
		description: "",
		price: "",
		img: "",
	};
	const [formItem, setFormItem] = useState(defaultFormItem);
	const context: IContext = useItemsContext();
	
	async function handleCreate(createdItem: IFormItem) {
		try {
			const response = await axios.post(`${URL}/api/items/`, createdItem);
			context.setItems([...context.items, response.data]);
		} catch (err) {
			console.log(err);
		}
	}
	
	function handleChange(evt: ChangeEvent<HTMLInputElement>): void {
		if (evt.currentTarget.name === "price") {
			// only digits and up to 2 decimal places allowed
			if (!/^\d{0,4}(\.\d{0,2})?$/.test(evt.currentTarget.value)) return;
		}
		setFormItem({...formItem, [evt.currentTarget.name]: evt.currentTarget.value});
	}
	
	return (
		<>
			<h1>Add an item</h1>
			<AddItemForm
				formItem={formItem} handleChange={handleChange} handleCreate={handleCreate} setFormItem={setFormItem}
				defaultFormItem={defaultFormItem} />
		</>
	);
}