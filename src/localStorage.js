export const loadToken = () => {
	try {
		// const tokenString = localStorage.getItem('token');
		const tokenString = localStorage.getItem('token');
		console.log('loadToken', JSON.parse(tokenString));
		return JSON.parse(tokenString);
	} catch (error) {
		return null;
	}
};

export const saveToken = (token) => {
	try {
		console.log('localStorage.js ', token);
		const tokenString = JSON.stringify(token);
		localStorage.setItem('token', tokenString);
	} catch (error) {
		console.log(error);
	}
};

export const deleteToken = () => {
	try {
		localStorage.setItem('token', null);
	} catch (error) {
		console.log(error);
	}
};
