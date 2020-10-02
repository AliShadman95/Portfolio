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
