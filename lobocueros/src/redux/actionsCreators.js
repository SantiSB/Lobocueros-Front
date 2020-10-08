import {
	VISIBLE_MINI_CART,
	VISIBLE_SEARCH_FORM,
	VISIBLE_MENU,
	ALL_DATA,
	PRODUCTS_DATA,
	PRINCIPAL_IMAGE_DETAIL,
	MAIN_PICTURE_CARD,
	SET_COUNTER,
	SET_COLOR,
	SET_ITEMS_IN_CART,
	SET_LIST_FILTER
	
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

const setPrincipalImageDetail = (event) => ({
	type: PRINCIPAL_IMAGE_DETAIL,
	event,
});

const setMainPictureCard = (event) => ({
	type: MAIN_PICTURE_CARD,
	event,
});

const setCounter = (event) => ({
	type: SET_COUNTER,
	event,
});

const setColorSelected = (event) => ({
	type: SET_COLOR,
	event,
});

const setItemsInCart = (event) => ({
	type: SET_ITEMS_IN_CART,
	event,
});

const setListFilter = (event) => ({
	type: SET_LIST_FILTER,
	event,
});

export {
	setVisibleMiniCart,
	setVisibleSearchForm,
	setVisibleMenu,
	setAllData,
	setProductsData,
	setPrincipalImageDetail,
	setMainPictureCard,
	setCounter,
	setColorSelected,
	setItemsInCart,
	setListFilter
};
