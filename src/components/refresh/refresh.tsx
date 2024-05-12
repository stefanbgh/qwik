import { component$ } from "@builder.io/qwik";
import { Link, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
	const navigate = useNavigate();

	return (
		<>
			<Link reload>Refresh (better accessibility)</Link>
			<button onClick$={() => navigate()}>Refresh</button>
		</>
	);
});
