import {
	VISIBLE_MINI_CART,
	VISIBLE_SEARCH_FORM,
	VISIBLE_MENU,
	ALL_DATA,
	PRODUCTS_DATA,
	
} from "./actions"; 

const setVisibleMiniCart = (event) => ({
	type: VISIBLE_MINI_CART,
	event,
});

const setVisibleSearchForm = (event) => ({
	type: VISIBLE_SEARCH_FORM,
	event,
});

const setVisibleMenu = (event) => ({
	type: VISIBLE_MENU,
	event,
});

const setAllData = (event) => ({
	type: ALL_DATA,
	event,
});

const setProductsData = (event) => ({
	type: PRODUCTS_DATA,
	event,
});

export {
	setVisibleMiniCart,
	setVisibleSearchForm,
	setVisibleMenu,
	setAllData,
	setProductsData,

};
