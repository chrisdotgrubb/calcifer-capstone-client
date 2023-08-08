import React, {useState} from "react";
import AddItemForm from "../components/AddItemForm.tsx";

interface IItem {
	name: string,
	description: string,
	price: number | string,
	img: string,
}

export default function ManageAddPage() {
	const defaultItem: IItem = {
		name: "",
		description: "",
		price: "",
		img: "",
	};
	const [item, setItem] = useState(defaultItem);
	
	function handleChange(evt: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void {
		if (evt.currentTarget.name === "price") {
			// only digits and up to 2 decimal places allowed
			if (!/^\d{0,4}(\.\d{0,2})?$/.test(evt.currentTarget.value)) return;
		}
		setItem({...item, [evt.currentTarget.name]: evt.currentTarget.value});
	}
	
	return (
		<>
			<AddItemForm item={item} handleChange={handleChange} />
		</>
	);
}