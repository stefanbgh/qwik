import { component$, useContext } from "@builder.io/qwik";
import { ctx } from "~/context/ctx";

interface IProps {
	title: string;
}

export default component$<IProps>(({ title }) => {
	const themeCtx = useContext(ctx);

	return (
		<>
			<div>{title}</div>
			<p>Theme: {themeCtx.theme}</p>
		</>
	);
});
