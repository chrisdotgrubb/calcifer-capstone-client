import {Link} from "react-router-dom";

export default function ManagePage() {
	return (
		<>
			<h1>Manage</h1>
			<Link to={"/manage/add"}>
				<h2>Add item</h2>
			</Link>
		</>
	);
}