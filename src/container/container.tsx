import { Slot, component$, useStyles$ } from "@builder.io/qwik";

import style from "./styles.css?inline";

export default component$(() => {
	useStyles$(style);

	return (
		<div class="container">
			<Slot />
		</div>
	);
});
