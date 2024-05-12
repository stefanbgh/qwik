import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";

import style from "./styles.css?inline";

// By wrapping a function with `server$()` we mark it to always
// execute on the server. This is a form of RPC mechanism.
const serverGreeter = server$((emoji: string) => `Your emoji is ${emoji}`);

export default component$(() => {
	useStyles$(style);
	const emoji = useSignal(":D");

	return (
		<section>
			<div>
				<h3>Choose one emoji:</h3>
				<p
					class={emoji.value === ":D" ? "emoji active" : "emoji"}
					onClick$={() => (emoji.value = ":D")}
				>
					1. :D
				</p>
				<p
					class={emoji.value === "xd" ? "emoji active" : "emoji"}
					onClick$={() => (emoji.value = "xd")}
				>
					2. xd
				</p>
				<p
					class={emoji.value === ":v" ? "emoji active" : "emoji"}
					onClick$={() => (emoji.value = ":v")}
				>
					3. :v
				</p>
			</div>
			<button
				onClick$={async () => {
					const em = await serverGreeter(emoji.value);
					alert(em);
				}}
			>
				Send
			</button>
		</section>
	);
});
