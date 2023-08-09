import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {ChangeEventHandler, Dispatch, FormEvent, SetStateAction} from "react";
import {IFormItem} from "../../pages/manage/AddItemPage.tsx";


interface AddItemFormProps {
	formItem: IFormItem;
	setFormItem: Dispatch<SetStateAction<IFormItem>>;
	handleChange: ChangeEventHandler<HTMLInputElement>;
	handleCreate: (createdItem: IFormItem) => Promise<void>;
	defaultFormItem: IFormItem;
}

export default function AddItemForm({
										formItem,
										handleChange,
										handleCreate,
										setFormItem,
										defaultFormItem
									}: AddItemFormProps) {
	// const context: IContext = useItemsContext();
	
	function handleSubmit(evt: FormEvent): void {
		evt.preventDefault();
		handleCreate(formItem);
		setFormItem(defaultFormItem);
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
