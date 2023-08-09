import {ItemsProvider} from "./ItemsContext.tsx";
import {CartProvider} from "./CartContext.tsx";
import {ReactNode} from "react";

interface AllContextProvidersProps {
	children: ReactNode;
}

export default function AllContextProviders({children}: AllContextProvidersProps) {
	return (
		<ItemsProvider>
			<CartProvider>
				{children}
			</CartProvider>
		</ItemsProvider>
	);
}