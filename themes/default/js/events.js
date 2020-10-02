var lazyload = new LazyLoad({elements_selector: ".lazy"});

$("#navbar-burger").on("click", function() {
	$(".navbar-burger").toggleClass("is-active");
	$(".navbar-menu").toggleClass("is-active");
});

$("#set-skin-default").on("click", function() {
	skin_set_active_stylesheet("default");
	skin_create_cookie("style", "default", 365);
	pwa_cache_update(true, false, true);
});

$("#set-skin-nightmode").on("click", function() {
	skin_set_active_stylesheet("nightmode");
	skin_create_cookie("style", "nightmode", 365);
	pwa_cache_update(true, false, true);
});

$(".menu-icon-trigger").on("click", function(event) {
	event.preventDefault();
	$(".menu-icon-wrapper").toggleClass("open");
});

if ("{{ config.system.platform }}" === "electron" && "{{ config.system.debug }}" === "disabled") {
	$("a.link-translation").on("click", function(e) {
		e.preventDefault();

		let data = e.target.getAttribute("data-url");
		let switch_folder = window.location.href.split("/themes_")[0];
		window.location.href = `${switch_folder + e.target.getAttribute("data-url")}/{{ config.site.theme }}/pages/index.html`;

		e.stopPropagation();
	}, false);

	$("a.link").on("click", function(e) {
		e.preventDefault();

		let data = e.target.getAttribute("data-url");
		let basepath = window.location.href.split("/{{ config.site.theme }}/")[0];
		let url = `${basepath}/{{ config.site.theme }}/pages${data}/content.html`;

		fetch(url).then(function(response) {
			return response.text();
		}).then(function(html) {
			$(".container").html(html);
		});

		history.pushState(null, null, `${basepath}/{{ config.site.theme }}/pages${data}`);
		document.title = routes[data];

		e.stopPropagation();
	}, false);
}

$("#bitcoin-modal .modal-close").on("click", function() {
	$("#bitcoin-modal").removeClass("is-active");
});

$("#bitcoin-donate").on("click", function() {
	$("#bitcoin-modal").addClass("is-active");
});

$("#ethereum-modal .modal-close").on("click", function() {
	$("#ethereum-modal").removeClass("is-active");
});

$("#ethereum-donate").on("click", function() {
	$("#ethereum-modal").addClass("is-active");
});