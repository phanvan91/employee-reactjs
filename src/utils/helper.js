export const camelToRoute = str => {
	return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
};
