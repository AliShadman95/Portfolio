/**
 * ASHD
 * =====================
 * Portfolio di Ali Shadman (ASHD)
 *
 *
 *
 * @license: MIT License
 *
 * @link:    Homepage: https://ashd.dev
 *
 *
 *
 *
 */
const argv = require("yargs").argv;
const config = argv.config
	? require(argv.config)
	: require("./configs/config.js");
const ASHD = require("./modules/core/main");

/**
 * Start the app
 * =====================
 * Run
 *
 */
let ashd = new ASHD(config);
ashd.init();
ashd.start();
