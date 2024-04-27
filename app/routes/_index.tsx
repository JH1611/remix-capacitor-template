import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix Capacitor App" },
		{ name: "description", content: "Welcome to Remix + Capacitor!" },
	];
};

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<h1>Welcome to Remix + Capacitor</h1>
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
