import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

export default defineConfig({
	base: "/",
	plugins: [react(), tailwindcss()],
});
