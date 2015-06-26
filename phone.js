window.ParsleyValidator.addValidator('phone', function (value) {
	var phoneExp = /\+*[78] \(*\d{3}\)* \d{3}\-\d{2}\-\d{2}/;

	return phoneExp.test(val);
}, 32)
.addMessage('ru', 'phone', 'Телефон должен быть в формате +7 999 999-99-99');