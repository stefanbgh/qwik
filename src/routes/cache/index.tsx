import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
	cacheControl(
		{
			staleWhileRevalidate: 60 * 60 * 24 * 365,
		},
		"CDN-Cache-Control"
	);
};
