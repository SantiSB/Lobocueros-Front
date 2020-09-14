import {
	VISIBLE_MINI_CART,
	VISIBLE_SEARCH_FORM,
	VISIBLE_MENU
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

export {
	setVisibleMiniCart,
	setVisibleSearchForm,
	setVisibleMenu,
};
