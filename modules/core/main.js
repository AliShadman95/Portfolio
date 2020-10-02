/**
 * Ptkdev
 * =====================
 * Portfolio di Patryk Rzucidlo (PTKDev)
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 * @link:    Homepage: https://ptk.dev
 *           Docs:     https://ptk.dev/README.md
 *           NPM:      https://npmjs.com/package/@ptkdevio/ptkdev
 *           GitHub:   https://github.com/ptkdev/ptkdev
 *
 */
const express = require("express");
const nunjucks = require("nunjucks");
const cookie_parser = require("cookie-parser");
const http = require("http");
const core = require("./core");
const Log = require("./../logger/log");
const Utils = require("./../commons/utils");
const Translate = require("./../commons/translate");
const Pages = require("./../routes/pages");

class Ptkdev {
	constructor(config) {
		this.core = core;
		this.core.app = express();
		this.core.config = config;

		this.core.config.system.year = new Date().getFullYear();

		this.LOG_NAME = "start";
		this.log = new Log(this.LOG_NAME);
		this.utils = new Utils();
		this.lang = new Translate();
		this.oauth = new Pages.Oauth();
		this.pwa = new Pages.Pwa();
		this.seo = new Pages.Seo();
		this.static = new Pages.Static_files();
		this.pages = new Pages.Pages();
		this.pages_policy = new Pages.Policy();
	}

	/**
	 * Initialize the app
	 * =====================
	 * Set config options and integrity of app
	 *
	 */
	init() {
		this.log.info("Ptkdev::init()", this.lang.translate("start"));
		this.utils.create_files();
		this.core.config = this.utils.fix_config(this.core.config);

		nunjucks.configure(`./themes/${this.core.config.site.theme}/`, {
		    autoescape: false,
		    express: this.core.app
		});

		this.core.app.use(cookie_parser());

		// @credits: Akseli Palén
		// @link: https://stackoverflow.com/questions/13442377/redirect-all-trailing-slashes-globally-in-express
		this.core.app.use(function(req, res, next) {
		    if (req.path.substr(-1) === "/" && req.path.length > 1) {
		        let query = req.url.slice(req.path.length);
		        res.redirect(301, req.path.slice(0, -1) + query);
		    } else {
		        next();
		    }
		});

		this.static.static_files();

		// this.oauth.express();
		// this.oauth.twitter_init();
		// this.oauth.twitter();
		// this.oauth.serialize();

		if (this.core.config.site.pwa.status === "enabled") {
			this.pwa.webmanifest();
			this.pwa.serviceworker();
			this.pwa.updates();
		}

		this.pages.index();
		this.pages.offline();
		this.seo.sitemap();
		this.seo.robotstxt();
		this.pages_policy.privacy();
		this.pages_policy.cookie();
		this.pages.backers();
		this.pages.error_404();

	}

	/**
	 * Start the app
	 * =====================
	 * Run express
	 *
	 */
	start() {
		const server = http.createServer(this.core.app);
		server.listen(parseInt(this.core.config.server.express_port));
	}
}

module.exports = Ptkdev;