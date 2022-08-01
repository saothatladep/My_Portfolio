module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
		defaultLineHeights: true,
		standardFontWeights: true,
	},
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			aurore: ["'La Belle Aurore', cursive"],
		},
		fontSize: {
			'2sl': '8px',
			'1sl': '10px',
			base: '12px',
			sl: '14px',
			xl: '16px',
			'1xl': '18px',
			'1.5xl': '20px',
			'2xl': '24px',
			'3xl': '34px',
			'4xl': '36px',
		},

		boxShadow: {
			input: '0 0 0px 1000px #2b2b2b inset',
			box: 'rgba(253, 16, 86, 0.4) -5px 5px, rgba(253, 16, 86, 0.3) -10px 10px, rgba(253, 16, 86, 0.2) -15px 15px',
		},
		extend: {
			colors: {
				// set up theme colors
				primary: {
					50: '#FD1056',
					100: '#08fdd8',
				},
				secondary: {
					400: '#FFD1AC',
				},
				white: {
					500: '#ffffff',
				},
				gray: {
					100: '#a5a5a5',
					200: '#909096',
					300: '#282828',
					400: '#181818',
					500: '#8d8d8d',
					600: '#ffffff0a',
					900: '#000',
				},
				background: {
					50: '#1d1d1d',
				},
			},
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'1xl': '5px',
				'2xl': '10px',
			},
			boxShadow: {
				rainbow:
					'0 0 0 10px #ff0000,0 0 0 20px #ff7700,0 0 0 30px #FFDD00,0 0 0 40px #00FF00,0 0 0 50px #0000FF,0 0 0 60px #C77DF3,0 0 0 70px #8A2BE2',
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(-10px)' },
					'100%': { transform: 'translateX(4px)' },
				},
			},
			animation: {
				scroll: 'scroll 0.5s linear infinite alternate-reverse',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
