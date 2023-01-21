/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontSize: {
				sm: ['2rem', { lineHeight: '2.5rem' }],
				lg: ['2.5rem', { lineHeight: '3rem' }],
				xl: ['3rem', { lineHeight: '3.5rem' }]
			},
			colors: {
				purpleLink: '#ABA9FF'
			},
			keyframes: {
				pulse: {
					'50%': {
						opacity: '0'
					}
				}
			}
		}
	},
	plugins: []
};
