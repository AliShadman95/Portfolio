/**
 * Pages route
 * =====================
 * Express routes
 *
 * @contributors: Patryk Rzucidło [@ptkdev] <support@ptkdev.io> (https://ptk.dev)
 *
 * @license: MIT License
 *
 */
const core = require("./../core/core");
const Log = require("./../logger/log");
const lang = require(`./../routes/languages`);
const fetch = require("node-fetch");

class Pages {
	constructor() {
		this.core = core;

		this.LOG_NAME = "pages";
		this.log = new Log(this.LOG_NAME);
		this.lang = lang;
	}

	/**
	 * Initialize pages (all)
	 * =====================
	 * Express render
	 *
	 */
	index() {
		let self = this;
		this.core.app.get("/", function(req, res) {
			let cookies = {};
			if (typeof req.cookies.style === "undefined") {
				cookies = req.cookies;
				cookies.style = "nightmode";
			} else {
				cookies = req.cookies;
			}

			self.core.config.system.language = (req.query.lang ? req.query.lang : self.core.config.system.language);

			res.set("Content-Type", "text/html");
		    res.render("./pages/index.html", {"config": self.core.config, "translate": self.lang[self.core.config.system.language], "cookie": cookies});
		});
	}

	/**
	 * Initialize pages (all)
	 * =====================
	 * Express render
	 *
	 */
	offline() {
		let self = this;
		this.core.app.get("/offline", function(req, res) {
			let cookies = {};
			if (typeof req.cookies.style === "undefined") {
				cookies = req.cookies;
				cookies.style = "nightmode";
			} else {
				cookies = req.cookies;
			}

			self.core.config.system.language = (req.query.lang ? req.query.lang : self.core.config.system.language);

			res.set("Content-Type", "text/html");
		    res.render("./pages/offline/index.html", {"config": self.core.config, "translate": self.lang[self.core.config.system.language], "cookie": cookies});
		});
	}

	/**
	 * Initialize backers page
	 * =====================
	 * Express render
	 *
	 */
	async backers() {
		this.core.app.get("/backers", async function(req, res) {
			let response = await fetch("https://api.ptkdev.io/backers/", {
				method: "get",
				headers: {"Content-Type": "application/json"},
			});
			res.set("Content-Type", "application/json");
		    res.send(JSON.stringify(await response.json()));
		});
	}

	/**
	 * Initialize errors (404)
	 * =====================
	 * Express render
	 *
	 */
	error_404() {
		let self = this;
		this.core.app.get("/*", function(req, res) {
			let cookies = {};
			if (typeof req.cookies.style === "undefined") {
				cookies = req.cookies;
				cookies.style = "nightmode";
			} else {
				cookies = req.cookies;
			}

			self.core.config.system.language = (req.query.lang ? req.query.lang : self.core.config.system.language);

			res.set("Content-Type", "text/html");
			res.status(404);
		    res.render("./pages/errors/404/index.html", {"config": self.core.config, "translate": self.lang[self.core.config.system.language], "cookie": cookies});
		});
	}
}

module.exports = Pages;