function go_offline() {
	$(".offline").css("display", "flex");
	$("#backers").hide();
}

fetch("{{ config.site.fullurl }}/backers")
	.then(function (response) {
		var content_type = response.headers.get("content-type");
		if (
			response.status === 200 &&
			content_type &&
			content_type.includes("application/json")
		) {
			return response.json();
		} else if (response.status !== 404 && response.status !== 500) {
			go_offline();
		}
	})
	.then(function (json) {
		if (typeof json !== "undefined") {
			let html = "";
			for (let i = 0; i < json.length; i++) {
				html += `<a href="${json[i].url}"  rel="nofollow external noopener noreferrer" target="_new"><img src="${json[i].pic}" alt="Backer" class="patreon-backer" /></a>`;
			}
			$("#patreon-backers").html(html);
		}
	});

function load_particles(title) {
	console.log(title);

	particlesJS.load(
		"particles-js",
		title === "nightmode"
			? "/js/particles-night.json"
			: "/js/particles.json"
	);
}
