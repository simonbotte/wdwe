export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Where do we eat ?",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content:
					"Where do we eat (WDWE) est un site web qui vous aide à prendre une décision lorsque vous êtes indécis sur où manger. Il suffit de sélectionner au moins deux endroits où vous aimeriez manger, et WDWE vous donnera une suggestion sur lequel choisir. Le site peut être utile lorsque vous êtes en groupe et que vous avez du mal à vous mettre d'accord sur un endroit où manger, ou lorsque vous êtes seul et que vous avez envie de changer de routine en essayant un nouvel endroit. Avec WDWE, vous pouvez facilement explorer de nouvelles options de restaurants et prendre une décision rapidement et facilement.",
			},
			{
				hid: "og:title",
				property: "og:title",
				content: "Where do we eat ?",
			},
			{
				hid: "og:description",
				property: "og:description",
				content:
					"Where do we eat (WDWE) est un site web qui vous aide à prendre une décision lorsque vous êtes indécis sur où manger. Il suffit de sélectionner au moins deux endroits où vous aimeriez manger, et WDWE vous donnera une suggestion sur lequel choisir. Le site peut être utile lorsque vous êtes en groupe et que vous avez du mal à vous mettre d'accord sur un endroit où manger, ou lorsque vous êtes seul et que vous avez envie de changer de routine en essayant un nouvel endroit. Avec WDWE, vous pouvez facilement explorer de nouvelles options de restaurants et prendre une décision rapidement et facilement.",
			},
			{
				hid: "og:image",
				property: "og:image",
				content: "https://wdwe.fr/og-image.jpg",
			},
			{
				hid: "og:url",
				property: "og:url",
				content: "https://wdwe.fr/",
			},
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/png", href: "/icons/icon-96.png" }],
		link: [
			{
				rel: "apple-touch-icon",
				type: "image/png",
				href: "https://wdwe.fr/icons/icon-192.png",
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["@/assets/css/fonts.scss", "@/assets/css/main.scss"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		// https://go.nuxtjs.dev/pwa
		"@nuxtjs/pwa",
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: "/",
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			name: "Where do we eat",
			short_name: "wdwe",
			start_url: "https://wdwe.fr",
			display: "standalone",
			icons: [
				{
					src: "https://wdwe.fr/icons/icon-96.png",
					sizes: "96x96",
					type: "image/png",
				},
				{
					src: "https://wdwe.fr/icons/icon-192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "https://wdwe.fr/icons/icon-svg.svg",
					type: "image/svg+xml",
					sizes: "512x512",
				},
			],
			orientation: "portrait-primary",
			theme_color: "white",
			lang: "en",
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
