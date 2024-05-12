import { component$, useStore, useStyles$ } from "@builder.io/qwik";

import style from "./styles.css?inline";

export default component$(() => {
	useStyles$(style);

	const digits = useStore([1, 13, 24, 11, 27]);

	return (
		<ul class="lists">
			<p>Digits: </p>
			{digits.map((d, i) => (
				<li key={i}>{d}</li>
			))}
		</ul>
	);
});
