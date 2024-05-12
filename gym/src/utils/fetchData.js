
export const fetchData = async (url,options) => {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		return result
	} catch (error) {
		console.error(error);
	}
};
