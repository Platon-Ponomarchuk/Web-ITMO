const before_load_time = new Date().getTime();

export function page_load_time() {
	document.querySelector(".load_time").textContent =
		"Loaded in " + (new Date().getTime() - before_load_time) / 1000 + " seconds";
}