function checkPassword() {
	let password = document.getElementById('passwordBox');
	let passwordText = password.value;
	if (passwordText === 'Ernest300') {
		return true;
	}
	alert('Access Denied! Incoreect Password!');
	return false;
}
