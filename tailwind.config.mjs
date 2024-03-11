/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
		  keyframes: {
			animatedgradient: {
			  '0%': { backgroundPosition: '0% 50%' },
			  '50%': { backgroundPosition: '100% 50%' },
			  '100%': { backgroundPosition: '0% 50%' },
			},
		  },
		  backgroundSize: {
			'300%': '300%',
		  },
		  animation: {
			gradient: 'animatedgradient 6s ease infinite alternate',
		  },
		},
	  },
	plugins: [
		require('tailwindcss-animated')
	  ],
}
