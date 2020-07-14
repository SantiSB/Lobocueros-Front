import {
	CONSTANTE,
} from "./actions";

const accion = (parametro) => ({
	type: CONSTANTE,
	parametro,
});

export {
	accion,
};
