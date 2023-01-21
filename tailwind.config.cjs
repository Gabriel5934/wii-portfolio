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
				purpleLink: '#ABA9FF',
				lightGray: '#D1D1D1',
				gray: '#BEBEBE',
				darkGray: '#676767',
				lightBlue: '#00D1FF'
			},
			keyframes: {
				pulse: {
					'50%': {
						opacity: '0'
					}
				}
			},
			dropShadow: {
				sm: '0 5px 5px rgba(0, 0, 0, 0.3)',
				md: '0 10px 10px rgba(0, 0, 0, 0.5)'
			}
		}
	},
	plugins: []
};
