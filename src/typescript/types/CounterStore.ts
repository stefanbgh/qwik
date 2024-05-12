import type { QRL } from "@builder.io/qwik";

export type CounterStore = {
	count: number;
	increment: QRL<(this: CounterStore) => void>;
	decrement: QRL<(this: CounterStore) => void>;
	reset: QRL<(this: CounterStore) => void>;
};
