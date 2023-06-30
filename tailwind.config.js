/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.tsx', '.index.html'],
	theme: {
		extend: {
			fontFamily: {
				ComicNeue: 'Comic Neue, sans-serif',
			},
			colors: {
				'bg-dark': '#6471D4',
				'bg-light': '#CFD6FF',

				blue: {
					900: '#001587',
					800: '#5C6FD7',
					500: '#8797EF',
					400: '#5668C8',
					200: '#CED6FF',
					100: '#EFF2FF',
				},
				red: {
					500: '#EC667E',
					300: '#FFA8B7',
					250: '#FFC9CC',
				},
				yellow: {
					800: '#F9B434',
					500: '#FFD772',
					200: '#FFE9B2',
					100: '#FFF7E3',
				},
				grey: {
					200: '#303030',
				},
				// 				pencil: {
				// 					#EC64A1
				// #F08CB9
				// #F9B233
				// #FDC73D
				// #CD9065
				// #F8C8A6
				// 				}

				buttons: {
					primary: {
						background: '#FFFFFF',
						border: '#000000',
						accent: '#5C6FD7',
					},
					secondary: {
						background: '#C1CAFF',
						border: '#001587',
						accent: '#5668C8',
					},
					tertiary: {
						background: '#FFC9CC',
						border: '#000000',
						accent: '#EC667E',
					},
				},
			},
			boxShadow: {
				inset: 'inset 0px 4px 24px rgba(0,0,0,0.25)',
				footer: '3px 4px 4px 0px rgba(0, 0, 0, 0.25)',
				tasks: '0px 2px 4px 0px rgba(0,0,0,0.25)',
			},
			backgroundImage: {
				notes: 'linear-gradient(0deg, transparent 45%, #ffe9b2 45%, #ffe9b2 55%, transparent 55%, transparent 20%, #ffe9b2 20%, #ffe9b2 30%,transparent 30%)',
			},
			backgroundSize: {
				notes: '3em 3em',
			},
			backgroundColor: {
				notes: '#FFF7E3',
			},
			width: {
				phone: 'calc(100vh * 0.56221889055)',
			},
			maxWidth: {
				phone: 'calc(100vh * 0.56221889055)',
			},
			screens: {
				notphone: 'calc(100vh * 0.56221889055)',
			},
		},
	},
	plugins: [],
};
