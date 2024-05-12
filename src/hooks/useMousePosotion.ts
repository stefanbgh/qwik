import { $, useOn, useStore } from "@builder.io/qwik";

export const useMousePosition = () => {
	const position = useStore({ x: 0, y: 0 });

	useOn(
		"mousemove",
		$((event: MouseEvent) => {
			const { x, y } = event;
			position.x = x;
			position.y = y;
		})
	);

	return position;
};
