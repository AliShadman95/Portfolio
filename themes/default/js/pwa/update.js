function pwa_cache_update(pages = true, files = true, force = false){
	caches.open("{{ config.site.url }}").then(function(cache) {

		let current_url = window.location.href;
		let url = new URL(current_url);
		let lang = url.searchParams.get("lang");
		let refresh = url.searchParams.get("refresh");

		if(lang !== null || refresh !== null){
			console.log("{{ translate.pwa_clean }}");

			if(files){
				{% for url in config.site.pwa.files %}
				cache.delete("{{ config.site.fullurl }}{{ url }}");
				{% endfor %}
			}

			if(pages){
				{% for url in config.site.pwa.pages %}
				cache.delete("{{ config.site.fullurl }}{{ url }}");
				{% endfor %}
			}

			sw_refresh();
		}

		fetch("{{ config.site.fullurl }}/pwa-updates").then(function(response) {
			var content_type = response.headers.get("content-type");
			if (content_type && content_type.includes("application/json")) {
				return response.json();
			}
		}).then(function(json) {
			if ((typeof json !== "undefined" && typeof json.version !== "undefined" && "{{ config.site.pwa.version }}" !== json.version) || (typeof json !== "undefined" && typeof json.version !== "undefined" && force !== false)) {
				console.log("{{ translate.pwa_clean }}");

				if(files){
					{% for url in config.site.pwa.files %}
					cache.delete("{{ config.site.fullurl }}{{ url }}");
					{% endfor %}
				}

				if(pages){
					{% for url in config.site.pwa.pages %}
					cache.delete("{{ config.site.fullurl }}{{ url }}");
					{% endfor %}
				}

				sw_refresh();
			}
		});
	});
}

pwa_cache_update(true, true);