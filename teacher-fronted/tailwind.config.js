module.exports = {
	mode: "jit",
	// These paths are just examples, customize them to match your project structure
	purge: ["./public/**/*.html", "./src/**/*.js"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/aspect-ratio")],
};
