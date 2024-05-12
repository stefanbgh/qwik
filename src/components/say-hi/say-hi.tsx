import { component$, useTask$ } from "@builder.io/qwik";

export default component$(() => {
	useTask$(async () => {
		// A task without `track` any state effectively behaves like a `on mount` hook.
		console.log(
			"Runs once when the component mounts in the server OR client."
		);
	});

	return <div>Hi!</div>;
});
