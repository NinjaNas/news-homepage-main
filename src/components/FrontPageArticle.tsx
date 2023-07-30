import Button from "./Button";

interface FrontPageArticleProps {
	href: string;
	src: string;
	alt: string;
	title: string;
	desc: string;
}

export default function FrontPageArticle(props: FrontPageArticleProps) {
	return (
		<div class="flex flex-col justify-between gap-4 xl:col-span-2 xl:grid xl:grid-cols-2 xl:gap-10">
			<img class="xl:col-span-2" src={props.src} alt={props.alt}></img>
			<h1 class="font-inter-extrabold text-5xl text-dark-blue">{props.title}</h1>
			<div class="flex flex-col justify-between gap-4">
				<p class="text-body leading-relaxed text-dark-gray-blue">{props.desc}</p>
				<Button
					href={props.href}
					value="R E A D   M O R E"
					className="self-start whitespace-pre bg-soft-red px-9 py-3 font-inter-bold text-body text-off-white hover:bg-dark-blue"
				></Button>
			</div>
		</div>
	);
}
