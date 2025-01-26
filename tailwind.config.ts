import { Config } from "tailwindcss";

const config: Config = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				eth: "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url('/src/assets/eth.jpg')",
				eth2: "linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url('/src/assets/eth2.jpg')",
				react: "linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url('/src/assets/react.jpg')",
			},
		},
	},
	plugins: [],
};

export default config;
