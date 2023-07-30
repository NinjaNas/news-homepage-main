import { A } from "@solidjs/router";

interface HomeRowArticleProps {
	src: string;
	alt: string;
	num: string;
	title: string;
	desc: string;
	href: string;
}

export default function HomeRowArticle(props: HomeRowArticleProps) {
	return (
		<article class="flex">
			<img class="mr-4 h-24" src={props.src} alt={props.alt}></img>
			<div>
				<h2 class="font-inter-bold text-2xl text-gray-blue">{props.num}</h2>
				<A href={props.href}>
					<h3 class="font-inter-bold text-dark-blue hover:text-soft-orange">{props.title}</h3>
				</A>
				<p class="text-body text-dark-gray-blue">{props.desc}</p>
			</div>
		</article>
	);
}
