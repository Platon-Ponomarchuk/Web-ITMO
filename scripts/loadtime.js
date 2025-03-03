export function page_load_time() {
	document.querySelector(".load_time").textContent =
		"Loaded in " + document.timeline.currentTime + "ms";
}