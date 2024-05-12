import { $, component$, useStore } from "@builder.io/qwik";

import type { CounterStore } from "~/typescript/types/CounterStore";

export default component$(() => {
	const counter = useStore<CounterStore>({
		count: 0,
		increment: $(function (this: CounterStore) {
			this.count++;
		}),
		decrement: $(function (this: CounterStore) {
			this.count--;
		}),
		reset: $(function (this: CounterStore) {
			this.count = 0;
		}),
	});

	return (
		<div>
			<p>Count: {counter.count}</p>
			<button onClick$={() => counter.increment()}>+</button>
			<button onClick$={() => counter.decrement()}>-</button>
			<button onClick$={() => counter.reset()}>Reset</button>
		</div>
	);
});
