export default function Footer() {
	return (
		<div class="grid grid-cols-3 py-10 text-center text-footer">
			<div class="col-start-2 col-end-3">
				Challenge by
				<a class="text-blueish" href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					{" "}
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a class="text-blueish" href="https://github.com/NinjaNas/">
					Khang Tran
				</a>
				.
			</div>
			<div class="justify-self-end">
				<a class="inline-block" href="https://github.com/NinjaNas/news-homepage-main">
					<img class="h-4 w-4" src="/images/github-mark.svg" alt="github"></img>
				</a>
				<a class="inline-block pl-2" href="https://www.linkedin.com/in/ktra1/">
					<img class="h-4 w-4" src="/images/linkedin.png" alt="linkedin"></img>
				</a>
			</div>
		</div>
	);
}
