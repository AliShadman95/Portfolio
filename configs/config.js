module.exports = {
	// Developer Configs
	system: {
		config_version: "1.0.0", // version of this file, version increase if change values from previously config
		debug: "enabled", // debug mode, disabled for prod
		platform: "express", // platform (cordova, electron, express)
		language: "it", // available: en = English / it = Italian
		nginx: "disabled", // Better performance if you use ngnix for serve static files, example: configs/nginx.conf.tpl
		terminal_colors: "enabled", // enabled/disabled if you want colors in windows power shell/cmd, mac console or linux terminal
	},

	// Server
	server: {
		express_port: 3002, // express port and prod port
		bs_port: 3003, // browsersync port
		ui_port: 3004, // ui port
	},

	services: {
		google: {
			analytics_id: "UA-179483900-1", // example: UA-XXXXXXXX-1
			webmaster_id: "NXoS3U8G2mj3vtWlYoNGCEVauVyQK8ox2UDHeFpDux0", // google webmaster meta-tag verify
			adsense_id: "",
		},
		facebook: {
			app_id: "", // facebook app id from developer console
			pixel_id: "", // facebook ads pixel id
		},
	},

	site: {
		theme: "default",
		author: "Ali Shadman (ASHD)",
		email: "alishadman955@gmail.com",
		protocol: "https://", // force https urls or http urls
		www: "hide", // with www or without www url (values: hide / show)
		url: "ashd.dev", // website short url, fullurl is generated automatically
		charset: "UTF-8", // html encoding
		dns_prefetch: [
			// array of external cdn urls
		],
		pingback: "disabled",
		social: {
			"facebook:": "alishadman123", // nickname from url
			twitter: "alishadman13", // nickname, without @
			instagram: "alishadman95", // nickname, without @
		},
		pwa: {
			status: "disabled",
			install: "disabled",
			manifest: "/manifest.webmanifest",
			service_worker: "/sw.js",
			color: "#ffffff",
			bgcolor: "#46aef7",
			colornightmode: "#0f0f0f",
			bgcolornightmode: "#0f0f0f",
			files: [
				"/js/full.min.js",
				"/css/full.min.css",
				"/css/skin-default.min.css",
				"/css/skin-nightmode.min.css",
				"/css/fonts/EYq0maZfwr9S9-ETZc3fKXt8UrOS43o.woff2",
				"/css/fonts/EYq0maZfwr9S9-ETZc3fKXt8XLOS.woff2",
				"/css/fonts/mem8YaGs126MiZpBA-UFW50bbck.woff2",
				"/css/fonts/mem8YaGs126MiZpBA-UFVZ0b.woff2",
				"/img/lazy.png",
				"/img/logo.png",
				"/img/logo.webp",
				"/img/icons/pwa/icon-192x192.png",
				"/img/icons/pwa/icon-512x512.png",
				"/img/icons/menu/english.png",
				"/img/icons/menu/english.webp",
				"/img/icons/menu/italian.png",
				"/img/icons/menu/italian.webp",
				"/img/icons/menu/banksim_logo.png",
				"/img/icons/menu/banksim_logo.webp",
				"/img/icons/menu/letschat-logo.png",
				"/img/icons/menu/letschat-logo.webp",
				"/img/icons/menu/cv.png",
				"/img/icons/menu/cv.webp",
				"/img/ashd_ali_shadman_avatar.png",
				"/img/ashd_ali_shadman_real.png",
				"/img/icons/menu/offline.png",
				"/img/icons/menu/offline.webp",
				"/img/icons/menu/planemode.png",
				"/img/icons/menu/planemode.webp",
				"/img/icons/menu/error404.png",
				"/img/icons/menu/error404.webp",
			],
			pages: [
				"/",
				"/?pwa=1",
				"/manifest.webmanifest",
				"/offline",
				"/policy/privacy",
				"/policy/cookie",
			],
			version: "", // if empty: automatically is taken from package.json (recommended)
		},
		mui: {
			status: "disabled",
			languages: [
				{
					lang: "it",
					url: "https://ashd.dev",
				},
				{
					lang: "en",
					url: "https://en.ashd.dev",
				},
			],
		},
	},

	// LOGS
	log: {
		path: {
			debug_log: "./logs/debug.log",
			error_log: "./logs/errors.log",
		},
		debug: "enabled", // enabled/disabled all logs with tag debug
		info: "enabled", // enabled/disabled all logs with tag info
		warning: "enabled", // enabled/disabled all logs with tag warning
		errors: "enabled", // enabled/disabled all logs with tag errors
	},
};
