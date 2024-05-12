import { type RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({
	headers,
	cacheControl,
	platform,
	locale,
	query,
	params,
	json,
	request,
}) => {
	cacheControl({
		immutable: true,
		noStore: true,
		noCache: true,
		private: true,
	});

	const obj: Record<string, string> = {};

	// e.g.-> ?country=denmark&lang=en&weather=cloudy
	query.forEach((v, k) => (obj[k] = v));
	headers.forEach((v, k) => (obj[k] = v));
	request.headers.forEach((v, k) => (obj[k] = v));

	const plt = Object.keys(platform);

	json(200, { ...params, ...obj, platform: plt, locale: locale() });
};
