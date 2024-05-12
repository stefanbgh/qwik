import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Refresh } from "~/components";

export const useServerInfo = routeLoader$(({ sharedMap }) => {
	return {
		time: new Date().toLocaleString(),
		db: sharedMap.get("db"),
	};
});

export default component$(() => {
	const location = useLocation();
	const serverInfo = useServerInfo();

	return (
		<div>
			<p>Here are the details about the docs: {location.params.id}</p>
			<Refresh />
			<p>Server time: {serverInfo.value.time}</p>
			<p>Database: {serverInfo.value.db}</p>
		</div>
	);
});
