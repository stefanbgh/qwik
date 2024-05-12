import { component$, useComputed$, useStyles$ } from "@builder.io/qwik";
import type { IUser } from "~/typescript/interfaces/IUser";

import style from "./styles.css?inline";

interface IProps {
	user: IUser;
}

export default component$<IProps>(
	({ user: { id, username, profession, framework } }) => {
		useStyles$(style);

		const fw = useComputed$(() => framework.toLowerCase());

		return (
			<div>
				<div class="user">
					<p>Profile Info</p>
					<p>ID: {id}</p>
					<p>Username: @{username}</p>
					<p>Profession: {profession}</p>
					<p>Framework: {fw}</p>
				</div>
			</div>
		);
	}
);
