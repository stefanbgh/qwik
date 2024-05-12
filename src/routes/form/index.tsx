import { component$ } from "@builder.io/qwik";
import { routeAction$, Form, validator$ } from "@builder.io/qwik-city";

// eslint-disable-next-line
export const useAddUser = routeAction$(
	async (data, requestEvent) => {
		// This will only run on the server when the user submits the form (or when the action is called programmatically)
		const response = await fetch(
			"https://65a6e1fe74cf4207b4f0fe58.mockapi.io/products",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					productName: "article",
					productPrice: 100,
				}),
			}
		);

		const d = await response.json();

		return {
			success: true,
			productId: d.id,
		} satisfies { success: boolean; productId: number };
	},
	validator$(async (ev, data) => {
		return {
			success: false,
			error: {
				message: "Product code is not valid",
			},
		} satisfies {
			success: boolean;
			error: {
				message: string;
			};
		};
	})
);

export default component$(() => {
	const action = useAddUser();

	return (
		<>
			<Form action={action}>
				<button type="submit">Add products</button>
			</Form>
			{action.value?.success ? (
				// When the action is done successfully, the `action.value` property will contain the return value of the action
				<p>Product {action.value.productId} added successfully</p>
			) : (
				<p>{action.value?.message}</p>
			)}
		</>
	);
});
