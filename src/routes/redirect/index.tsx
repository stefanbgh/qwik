import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ redirect, url }) => {
	throw redirect(
		308,
		new URL("http://localhost:5173/status", url).toString()
	);
};
