const page = document.location.pathname;
const pageName = page.slice(page.lastIndexOf('/') + 1, page.lastIndexOf('.'));

document.querySelector(`#${pageName}`).classList.add("header__menu_item_active");