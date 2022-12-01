const { fontFamily, screens } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/index.html'],
	darkMode: 'media',
	theme: {
		// colors: {},
		screens: {
			xs: '475px',
			...screens
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans]
			}
		}
	},
	plugins: []
};
