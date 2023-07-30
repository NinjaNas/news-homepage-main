/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				"3xl": "1920px",
				"4xl": "2048px",
				"5xl": "4096px"
			},
			fontFamily: {
				"inter-bold": ["Inter-Bold"],
				"inter-extrabold": ["Inter-ExtraBold"],
				"inter-regular": ["Inter-Regular"]
			},
			colors: {
				"soft-orange": "hsl(35, 77%, 62%)",
				"soft-red": "hsl(5, 85%, 63%)",
				"off-white": "hsl(36, 100%, 99%)",
				"gray-blue": "hsl(233, 8%, 79%)",
				"dark-gray-blue": "hsl(236, 13%, 42%)",
				"dark-blue": "hsl(240, 100%, 5%)",
				blueish: "hsl(228, 44.90%, 44.10%)"
			},
			fontSize: {
				footer: "11px",
				body: "15px"
			}
		}
	},
	plugins: []
};
