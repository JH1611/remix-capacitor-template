import { Link } from "@remix-run/react";
import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
			<Link to="/">Go back</Link>
			<h1>Count is: {count}</h1>
			<button onClick={() => setCount(count + 1)}>+</button>
			<button onClick={() => setCount(count - 1)}>-</button>
		</div>
	);
};
export default Counter;
