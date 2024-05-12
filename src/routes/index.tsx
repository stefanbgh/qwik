import { component$, useContextProvider, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Button, Counter, Digits, SayHi, Title, User } from "~/components";
import { ctx } from "~/context/ctx";
import { useMousePosition } from "~/hooks/useMousePosotion";
import type { IUser } from "~/typescript/interfaces/IUser";
import type { Theme } from "~/typescript/types/Theme";

export default component$(() => {
	const { x, y } = useMousePosition();
	const theme = useStore<{ theme: Theme }>({ theme: "dark" });

	const user = useStore<IUser>({
		id: 1,
		username: "stefan022",
		profession: "FrontEnd developer",
		framework: "Qwik",
	});

	useContextProvider(ctx, theme);

	return (
		<>
			<SayHi />
			<Title title="Welcome to the Home page! :D" />
			<Digits />
			<Button />
			<User user={user} />
			<Counter />
			<div class="mouse">
				<p>Hover me</p>
				<div>
					<p>Mouse position:</p>
					<p>
						{x},{y}
					</p>
				</div>
			</div>
			<nav>
				<Link href="/docs">See Docs</Link>
				<Link prefetch href="/about">
					About
				</Link>
				<Link href="/form">Form</Link>
				<Link href="/greet">Greet</Link>
				<Link href="/status">Status</Link>
			</nav>
			<div>API URL: {process.env.PUBLIC_API_URL}</div>
		</>
	);
});
