import {ChangeEvent, useState} from "react";
import AddItemForm from "../../components/manage/AddItemForm.tsx";

export interface IFormItem {
	name: string,
	description: string,
	price: number | string,
	img: string,
}

export default function AddItemPage() {
	const defaultFormItem: IFormItem = {
		name: "",
		description: "",
		price: "",
		img: "",
	};
	const [formItem, setFormItem] = useState(defaultFormItem);
	
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
			<AddItemForm formItem={formItem} handleChange={handleChange} />
		</>
	);
}