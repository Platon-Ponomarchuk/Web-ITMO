const table = document.querySelector("tbody");

const num_of_rows = table.querySelectorAll("tr").length;

if (num_of_rows % 2 === 0) {
	table.style.gridTemplateRows = `repeat(${num_of_rows / 2}, 1fr 2fr)`;
} else {
	table.style.gridTemplateRows = `repeat(${Math.floor(num_of_rows / 2)}, 1fr 2fr) 1fr`;
}
