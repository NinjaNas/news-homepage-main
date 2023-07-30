import { JSXElement } from "solid-js";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App(props: { children: JSXElement | JSXElement[] }) {
	return (
		<div class="flex min-h-screen flex-col justify-around p-5 md:mx-[10%] xl:mx-[15%]">
			<Navbar tabsArr={["Home", "New", "Popular", "Trending", "Categories"]}></Navbar>
			{props.children}
			<Footer></Footer>
		</div>
	);
}

export default App;
