import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	plugins: [solid()],
	server: {
		host: true,
		port: 3000,
		hmr: { port: 3000 },
		watch: {
			usePolling: true
		}
	}
});
