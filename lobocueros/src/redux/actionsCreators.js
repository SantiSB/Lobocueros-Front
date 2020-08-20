import {
	VISIBLE_MINI_CART,
} from "./actions"; 

const setVisibleMiniCart = (event) => ({
	type: VISIBLE_MINI_CART,
	event,
});

export {
	setVisibleMiniCart,
};
