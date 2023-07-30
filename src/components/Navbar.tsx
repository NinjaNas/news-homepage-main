import { Index, createEffect, createSignal, onCleanup } from "solid-js";
import { Portal } from "solid-js/web";
import { A } from "@solidjs/router";

interface NavbarProps {
	tabsArr: string[];
}

const Navbar = (props: NavbarProps) => {
	const [tabs, _] = createSignal(props.tabsArr);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);

	createEffect(() => {
		if (isMobileMenuOpen()) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		onCleanup(() => {
			document.body.classList.remove("overflow-hidden");
		});
	});

	return (
		<nav
			role="navigation"
			class="flex origin-center items-center justify-between py-10 5xl:scale-150"
		>
			<A href="/">
				<img src="/images/logo.svg" alt="logo"></img>
			</A>
			<ul class="m-0 hidden list-none gap-8 md:flex">
				<Index each={tabs()}>
					{tab => {
						return (
							<>
								<li>
									<A
										class="text-body text-dark-gray-blue hover:text-soft-orange"
										href={tab() === "Home" ? "/" : `/${tab().toLowerCase()}`}
									>
										{tab()}
									</A>
								</li>
							</>
						);
					}}
				</Index>
			</ul>
			<img
				class="md:hidden"
				src="/images/icon-menu.svg"
				alt="hamburger"
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen())}
			></img>
			<Portal>
				<div
					class="pointer-events-none fixed inset-0 z-10 bg-black transition-opacity duration-500 md:hidden"
					classList={{
						"opacity-20 overscroll-y-none": isMobileMenuOpen(),
						"opacity-0": !isMobileMenuOpen()
					}}
				></div>
				<ul
					class="fixed inset-y-0 left-36 right-0 z-10 flex transform flex-col gap-6 overflow-y-auto overscroll-contain bg-off-white transition-transform duration-500 md:hidden"
					classList={{
						"translate-x-0": isMobileMenuOpen(),
						"translate-x-full": !isMobileMenuOpen()
					}}
				>
					<li class="z-20 mr-6 mt-16 h-8 w-8 self-end">
						<img
							src="/images/icon-menu-close.svg"
							alt="close"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen())}
						></img>
					</li>
					<li>
						<div class="grid gap-5 p-8">
							<Index each={tabs()}>
								{tab => {
									return (
										<>
											<li>
												<A
													class="z-50 text-xl text-dark-blue hover:text-soft-orange"
													href={tab() === "Home" ? "/" : `/${tab().toLowerCase()}`}
												>
													{tab()}
												</A>
											</li>
										</>
									);
								}}
							</Index>
						</div>
					</li>
				</ul>
			</Portal>
		</nav>
	);
};

export default Navbar;
