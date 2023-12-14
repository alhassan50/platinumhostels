/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F4858',
        secondary: '#E5E4E2',
      },
      fontFamily: {
        custom: ['Lexend', 'system-ui', '-apple-system', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif']
      },
      screens: {
        's-sm': '480px',
				's-lg': '950px',
				
			},
      boxShadow: {
				'primary': '0 0 10px -3px rgb(0 0 0 / 0.1), 0 0px 6px -4px rgb(0 0 0 / 0.1);',
				'secondary': '0 0 15px -3px rgb(0 0 0 / 0.2), 0 0px 6px -4px rgb(0 0 0 / 0.2);',
				'tertiary': '0 2px 7px rgba(0, 0, 0, .04);',
			},

    },
  },
  plugins: [],
}

