import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import { Header, Footer } from "~/components";
import Container from "~/container/container";

import styles from "./styles.css?inline";

export const onRequest: RequestHandler = async ({
	locale,
	sharedMap,
	next,
	url,
}) => {
	locale("en-US");
	sharedMap.set("db", "mysql");
	console.log("Before request", url);
	await next();
	console.log("After request", url);
};

export default component$(() => {
	useStyles$(styles);

	return (
		<Container>
			<Header />
			<main>
				<Slot />
			</main>
			<Footer />
		</Container>
	);
});
