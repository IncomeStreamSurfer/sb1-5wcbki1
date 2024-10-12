/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
		},
	},
	plugins: [],
}