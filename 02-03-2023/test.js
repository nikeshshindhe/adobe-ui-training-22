const $ = document;

const USER_NAME = $.getElementById("userName");
const LOGIN_BUTTON = $.getElementById("formBtn");
const CONTAINER = $.getElementById("container");

const getLoginFormValues = () => {
    let userName = USER_NAME.value;
    displayThankYouMessage(userName);
}

const displayThankYouMessage = (userName) => {
    let thankyouMessage = `Thank you Boss ${userName}`;
    CONTAINER.innerHTML = thankyouMessage;
}

const submitLoginForm = (e) => {
    e.preventDefault();
    getLoginFormValues();
}

LOGIN_BUTTON.addEventListener('click',submitLoginForm);

