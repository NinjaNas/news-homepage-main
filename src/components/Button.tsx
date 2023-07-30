import { A } from "@solidjs/router";

interface ButtonProps {
	href: string;
	value: string;
	className: string;
}

export default function Button(props: ButtonProps) {
	return (
		<A href={props.href} class={props.className}>
			{props.value}
		</A>
	);
}
