import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddItemForm({item, handleChange}) {
	return (
		<Form>
			<Form.Group className="mb-3">
				<Form.Label>Name</Form.Label>
				<Form.Control type={"text"} placeholder={"Name"} name={"name"} value={item.name}
							  onChange={handleChange} />
			</Form.Group>
			
			<Form.Group className="mb-3">
				<Form.Label>Description</Form.Label>
				<Form.Control type={"text"} placeholder={"Description"} name={"description"} value={item.description}
							  onChange={handleChange} />
			</Form.Group>
			
			<Form.Group className="mb-3">
				<Form.Label>Price</Form.Label>
				<Form.Control type={"text"} placeholder={"Price"} name={"price"} value={item.price}
							  onChange={handleChange} />
			</Form.Group>
			
			<Form.Group className="mb-3">
				<Form.Label>Image location</Form.Label>
				<Form.Control type={"text"} placeholder={"Image path"} name={"img"} value={item.img}
							  onChange={handleChange} />
			</Form.Group>
			
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	);
}
