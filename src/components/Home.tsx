import FrontPageArticle from "./FrontPageArticle";
import HomeRowArticle from "./HomeRowArticle";
import SidebarArticle from "./SidebarArticle";

export default function Home() {
	return (
		<div class="grid gap-10 xl:grid-cols-3">
			<div class="xl:col-span-2">
				<div class="hidden xl:block">
					<FrontPageArticle
						href="articles/the-bright-future-of-web-3.0"
						src="/images/image-web-3-desktop.jpg"
						alt="blocks"
						title="The Bright Future of Web 3.0?"
						desc="We dive into the next evolution of the web that claims to put the power of the platforms
back into the hands of the people. But is it really fulfilling its promise?"
					></FrontPageArticle>
				</div>

				<div class="block xl:hidden">
					<FrontPageArticle
						href="articles/the-bright-future-of-web-3.0"
						src="/images/image-web-3-mobile.jpg"
						alt="blocks"
						title="The Bright Future of Web 3.0?"
						desc="We dive into the next evolution of the web that claims to put the power of the platforms
back into the hands of the people. But is it really fulfilling its promise?"
					></FrontPageArticle>
				</div>
			</div>

			<div class="flex flex-col justify-between bg-dark-blue p-8">
				<h1 class="font-inter-extrabold text-4xl text-soft-orange">New</h1>
				<SidebarArticle
					title="Hydrogen VS Electric Cars"
					desc="Will hydrogen-fueled cars ever catch up to EVs?"
					href="articles/hydrogen-vs-electric-cars"
				></SidebarArticle>

				<div class="py-2">
					<hr class=" solid border-gray-blue" />
				</div>

				<SidebarArticle
					title="The Downsides of AI Artistry"
					desc="What are the possible adverse effects of on-demand AI image generation?"
					href="articles/the-downsides-of-ai-artistry"
				></SidebarArticle>

				<div class="py-2">
					<hr class=" solid border-gray-blue" />
				</div>

				<SidebarArticle
					title="Is VC Funding Drying Up?"
					desc="Private funding by VC firms is down 50% YOY. We take a look at what that means."
					href="articles/is-vc-funding-drying-up"
				></SidebarArticle>
			</div>

			<HomeRowArticle
				src="/images/image-retro-pcs.jpg"
				alt="retro pcs"
				num="01"
				title="Reviving Retro PCs"
				desc="What happens when old PCs are given modern upgrades?"
				href="articles/reviving-retro-pcs"
			></HomeRowArticle>

			<HomeRowArticle
				src="/images/image-top-laptops.jpg"
				alt="laptop keyboard"
				num="02"
				title="Top 10 Laptops of 2022 "
				desc="Our best picks for various needs and budgets."
				href="articles/top-10-laptops-2022"
			></HomeRowArticle>

			<HomeRowArticle
				src="/images/image-gaming-growth.jpg"
				alt="thrown gaming controller"
				num="03"
				title="The Growth of Gaming"
				desc="How the pandemic has sparked fresh opportunities."
				href="articles/the-growth-of-gaming"
			></HomeRowArticle>
		</div>
	);
}
