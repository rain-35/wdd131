const theForm = document.querySelector('#checkoutForm');
const creditNumber = document.querySelector('#card_number');
const cardHolder = document.querySelector('#card_holder');
const cardExpYear = document.querySelector('#year');
const cardExpMonth = document.querySelector('#month');
const cardCvc = document.querySelector('#cvc');
const currentDate = new Date()

function displayError(msg) {
	// display error message
	document.querySelector('.errors').textContent = msg
}

function isCardNumberValid(number) {
	return number === '1234123412341234';
}

function testCardNumberLength(number) {
	return number.length === 16;
}

function checkDate(month, year) {
    if (2000 + year < currentDate.getFullYear() || (2000 + year === currentDate.getFullYear() && month <= currentDate.getMonth())) {
        return false;
    }
    return true;
}

function checkCVC(cvc) {
	
}

function submitHandler(event) {
	event.preventDefault();
    let errorMsg = '';
	displayError('');
    let cardNumber = creditNumber.value.trim();
    if (!testCardNumberLength(cardNumber)) {
        errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is not valid\n';
    } else if (!checkDate(cardExpMonth.value, cardExpYear.value)) {
        errorMsg += 'Card is expired\n';
    }
    if (errorMsg !== '') {
        displayError(errorMsg);
        return;
    }
    const formContainer = document.getElementById('checkoutForm');
    formContainer.innerHTML = '<h2>Thank you for your purchase.</h2>';


}
	


document.querySelector('#checkoutForm').addEventListener('submit', submitHandler)



























