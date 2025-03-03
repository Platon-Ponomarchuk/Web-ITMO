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
	const itemTemp = document.querySelector("#item-template");
	const itemClone = itemTemp.content.cloneNode(true);
	const item = itemClone.querySelector(".shopping_item");
	

	item.querySelector(".marker").style.backgroundColor = color;
	item.querySelector(".text__name").textContent = name;
	item.querySelector(".text__quantity").textContent = ` - ${quantity} шт`;
	item.querySelector(".text__category").textContent = ` (${category})`;

	item.querySelector(".item__delete_button").addEventListener("click", () => {
		shopping_items = shopping_items.filter(
			(item) => !(item.name === name && item.quantity === quantity && item.category === category)
		);
		item.remove();
		save_shopping_list();
	});

	shopping_list.append(item);
}

function add_product(name, quantity, category, color) {
	const new_item = { name, quantity, category, color };
	shopping_items.push(new_item);
	render_product(name, quantity, category, color);
	save_shopping_list();
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	let name = product_name_input.value.trim();
	const quantity = product_quantity_input.value;
	const category = product_category_input.value;
	const color = product_category_input.selectedOptions[0].dataset.color;

	if (name === "") {
		name = "Без названия";
	}

	add_product(name, quantity, category, color);

	form.reset();
});

window.onload = () => {
	load_shopping_list();
	page_load_time();
};
