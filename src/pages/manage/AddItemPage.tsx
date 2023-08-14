import {ChangeEvent, useState} from "react";
import AddItemForm from "../../components/manage/AddItemForm.tsx";
import axios, {AxiosResponse} from "axios";
import {IItem, IItemsContext, useItemsContext} from "../../context/Context.ts";
import {URL} from "../../main.tsx";

export default function AddItemPage() {
	const defaultFormItem: IItem = {
		_id: "",
		name: "",
		description: "",
		price: "",
		img: "",
	};
	const [formItem, setFormItem] = useState(defaultFormItem);
	const context: IItemsContext = useItemsContext();
	
	async function handleCreate(createdItem: IItem) {
		const itemToSend: {
			_id?: string,
			name: string,
			description: string,
			price: string | number,
			img: string
		} = {...createdItem};
		delete itemToSend._id;
		try {
			const response: AxiosResponse<IItem> = await axios.post(`${URL}/api/items/`, itemToSend);
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