module.exports = {
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Raleway:300,600,700,800,900`,
					`Open+Sans`
				]
			}
		}
	]
}