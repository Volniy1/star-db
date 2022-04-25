export const splitpoint = (string) => {
	return parseInt(string).toLocaleString('en-US').split(',').join('.')
}