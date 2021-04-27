export const loadToken = () => {
	try {
		const tokenString = localStorage.getItem('token');
		return tokenString.parse();
	} catch (error) {
		return null;
	}
};

export const saveToken = (token) => {
	try {
		const tokenString = JSON.stringify(token);
		localStorage.setItem('token', tokenString);
	} catch (error) {
		console.log(error);
	}
};
