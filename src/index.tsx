/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Routes, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import New from "./components/New";
import Popular from "./components/Popular";
import Trending from "./components/Trending";
import Categories from "./components/Categories";
import Article from "./components/Article";
import Home from "./components/Home";

const root = document.getElementById("root");

render(
	() => (
		<Router>
			<Routes>
				<Route
					path="/"
					component={() => (
						<App>
							<Home />
						</App>
					)}
				/>
				<Route
					path="/new"
					component={() => (
						<App>
							<New />
						</App>
					)}
				/>
				<Route
					path="/popular"
					component={() => (
						<App>
							<Popular />
						</App>
					)}
				/>
				<Route
					path="/trending"
					component={() => (
						<App>
							<Trending />
						</App>
					)}
				/>
				<Route
					path="/categories"
					component={() => (
						<App>
							<Categories />
						</App>
					)}
				/>
				<Route
					path="/articles/*path"
					component={() => (
						<App>
							<Article />
						</App>
					)}
				/>
			</Routes>
		</Router>
	),
	root!
);
