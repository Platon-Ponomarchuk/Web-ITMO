const main_page_button = document.querySelector("#home");
const profile_page_button = document.querySelector("#profile");
const toBuy_page_button = document.querySelector("#toBuy");

if(document.location.pathname.includes("profile.html")) {
	main_page_button.classList.remove("header__menu_item_active");
	toBuy_page_button.classList.remove("header__menu_item_active");
	profile_page_button.classList.add("header__menu_item_active");
} else if (document.location.pathname.includes("toBuy.html")) {
	main_page_button.classList.remove("header__menu_item_active");
	profile_page_button.classList.remove("header__menu_item_active");
	toBuy_page_button.classList.add("header__menu_item_active");
} else {
	main_page_button.classList.add("header__menu_item_active");
	profile_page_button.classList.remove("header__menu_item_active");
	toBuy_page_button.classList.remove("header__menu_item_active");
}