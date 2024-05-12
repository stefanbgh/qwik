import { $, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
	const isClicked = useSignal<boolean>(false);

	// Because event handling is asynchronous, you can't use event.currentTarget.
	// To solve this Qwik handlers provide a currentTarget as a second argument.
	const printMessage = $((event: MouseEvent, currentTarget: Element) =>
		console.log("CLICKED!", event, currentTarget)
	);

	const printSmile = $(() => console.log("xd"));

	const handleClick = $(() => (isClicked.value = !isClicked.value));

	return (
		<button
			preventdefault:click
			onClick$={[handleClick, printMessage, printSmile]}
		>
			{isClicked.value ? "Cancel" : "Click me"}
		</button>
	);
});
