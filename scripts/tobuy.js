import "./header.js";
import { page_load_time } from "./loadtime.js";

const form = document.querySelector(".shopping_form");
const shopping_list = document.querySelector(".shopping_list");
const product_name_input = form.querySelector(".name-input");
const product_quantity_input = form.querySelector(".quantity-input");
const product_category_input = form.querySelector(".category-select");

let shopping_items = [];

function load_shopping_list() {
	shopping_items = JSON.parse(localStorage.getItem("shopping_list")) || [];
	shopping_items.forEach(({ name, quantity, category, color }) =>
		render_product(name, quantity, category, color)
	);
}

function save_shopping_list() {
	localStorage.setItem("shopping_list", JSON.stringify(shopping_items));
}

function render_product(name, quantity, category, color) {
	const li = document.createElement("li");
	const marker = document.createElement("span");
	const text_wrapper = document.createElement("div");
	const name_span = document.createElement("span");
	const quantity_span = document.createElement("span");
	const category_span = document.createElement("span");
	const delete_button = document.createElement("button");

	li.classList.add("shopping_item");
	marker.classList.add("marker");
	text_wrapper.classList.add("item_text");
	name_span.classList.add("item_name");
	quantity_span.classList.add("item_quantity");
	category_span.classList.add("item_category");
	delete_button.classList.add("delete_button");

	marker.style.backgroundColor = color;
	name_span.textContent = name;
	quantity_span.textContent = ` - ${quantity} шт`;
	category_span.textContent = ` (${category})`;
	delete_button.textContent = "×";

	delete_button.addEventListener("click", () => {
		shopping_items = shopping_items.filter(
			(item) => !(item.name === name && item.quantity === quantity && item.category === category)
		);
		li.remove();
		save_shopping_list();
	});

	text_wrapper.append(name_span);
	text_wrapper.append(quantity_span);
	text_wrapper.append(category_span);
	li.append(marker);
	li.append(text_wrapper);
	li.append(delete_button);
	shopping_list.append(li);
}

function add_product(name, quantity, category, color) {
	const new_item = { name, quantity, category, color };
	shopping_items.push(new_item);
	render_product(name, quantity, category, color);
	save_shopping_list();
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const name = product_name_input.value.trim();
	const quantity = product_quantity_input.value;
	const category = product_category_input.value;
	const color = product_category_input.selectedOptions[0].dataset.color;

	add_product(name, quantity, category, color);

	form.reset();
});

window.onload = () => {
	load_shopping_list();
	page_load_time();
};
