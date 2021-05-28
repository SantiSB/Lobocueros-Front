import {
	VISIBLE_MINI_CART,
	VISIBLE_SEARCH_FORM,
	VISIBLE_MENU,
	ALL_DATA,
	PRODUCTS_DATA,
	PRODUCTS_DATA_HOME,
	PRINCIPAL_IMAGE_DETAIL,
	MAIN_PICTURE_CARD,
	SET_COUNTER,
	SET_COLOR,
	SET_ITEMS_IN_CART,
	SET_LIST_FILTER,
	CHANGE_EMAIL,
	CHANGE_FULL_NAME,
	CHANGE_SHIPPING_ADDRESS,
	CHANGE_DOCUMENT,
	CHANGE_SHIPPING_CITY,
	CHANGE_TELEPHONE,
	SEND_BUY,
	SET_PAGE_ACTUAL
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

const setProductsDataHome = (event) => ({
	type: PRODUCTS_DATA_HOME,
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

const changeDocument= (event) => ({
	type: CHANGE_DOCUMENT,
	event,
});

const changeEmail = (event) => ({
	type: CHANGE_EMAIL,
	event,
});

const changeFullName = (event) => ({
	type: CHANGE_FULL_NAME,
	event,
});

const changeShippingAddress = (event) => ({
	type: CHANGE_SHIPPING_ADDRESS,
	event,
});

const changeShippingCity = (event) => ({
	type: CHANGE_SHIPPING_CITY,
	event,
});

const changeTelephone = (event) => ({
	type: CHANGE_TELEPHONE,
	event,
});

const sendBuy = (event) => ({
	type: SEND_BUY,
	event,
});

const setPageActual = (event) => ({
	type: SET_PAGE_ACTUAL,
	event,
});

export {
	setVisibleMiniCart,
	setVisibleSearchForm,
	setVisibleMenu,
	setAllData,
	setProductsData,
	setProductsDataHome,
	setPrincipalImageDetail,
	setMainPictureCard,
	setCounter,
	setColorSelected,
	setItemsInCart,
	setListFilter,
	changeEmail,
	changeFullName,
	changeShippingAddress,
	changeShippingCity,
	changeTelephone,
	changeDocument,
	sendBuy,
	setPageActual
};
