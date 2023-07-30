import { A } from "@solidjs/router";

interface SidebarArticleProps {
	title: string;
	desc: string;
	href: string;
}

export default function SidebarArticle(props: SidebarArticleProps) {
	return (
		<>
			<article>
				<A href={props.href}>
					<h2 class="py-2 font-inter-bold text-xl text-off-white hover:text-soft-orange">
						{props.title}
					</h2>
				</A>
				<p class="text-body text-gray-blue">{props.desc}</p>
			</article>
		</>
	);
}
