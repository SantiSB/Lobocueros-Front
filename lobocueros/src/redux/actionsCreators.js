import {
	VISIBLE_MINI_CART,
	VISIBLE_SEARCH_FORM
} from "./actions"; 

const setVisibleMiniCart = (event) => ({
	type: VISIBLE_MINI_CART,
	event,
});

const setVisibleSearchForm = (event) => ({
	type: VISIBLE_SEARCH_FORM,
	event,
});

export {
	setVisibleMiniCart,
	setVisibleSearchForm,
};
