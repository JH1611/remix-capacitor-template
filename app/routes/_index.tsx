import type { MetaFunction } from "react-router";
import { Link } from "react-router";

export const meta: MetaFunction = () => {
	return [
		{ title: "New React Router Capacitor App" },
		{ name: "description", content: "Welcome to React Router + Capacitor!" },
	];
};

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<h1>Welcome to React Router + Capacitor</h1>
			<ul>
				<li>
					<a
						target="_blank"
						href="https://capacitorjs.com/docs/"
						rel="noreferrer"
					>
						See the capacitor documentation
					</a>
				</li>
				<li>
					<a
						target="_blank"
						href="https://capacitorjs.com/docs/apis"
						rel="noreferrer"
					>
						Get capacitor plugins
					</a>
				</li>
				<li>
					<Link to="/counter">Go to counter</Link>
				</li>
			</ul>
		</div>
	);
}
