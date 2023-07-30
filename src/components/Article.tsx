import { useParams } from "@solidjs/router";
import { lazy } from "solid-js";

export default function Article() {
	const params = useParams();
	const Body = lazy(() => import(/* @vite-ignore */ `../articles/${params.path}.tsx`));
	return (
		<div>
			Article.tsx wrapper
			<Body></Body>
			Article.tsx wrapper
		</div>
	);
}
