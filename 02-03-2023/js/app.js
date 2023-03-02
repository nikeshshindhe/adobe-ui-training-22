const $ = document;

const USER_NAME = $.getElementById("userName");
const U_Number = $.getElementById("uNumber");
const LOGIN_BUTTON = $.getElementById("formBtn");
const CONTAINER = $.getElementById("container");

const getLoginFormValues = () => {
    let userName = USER_NAME.value;
    let uNumber = Number(U_Number.value) + 10;
    displayUserNameAndNumber(userName.toUpperCase(),uNumber);
}

const displayUserNameAndNumber = (userName,uNumber) => {
    let thankyouMessage = `Entered Input Value is ${userName} & Number is ${uNumber}`;
    //CONTAINER.innerHTML = thankyouMessage;
    $.write(`Entered Input Value is ${userName} & Number is ${uNumber}`);
}

const submitLoginForm = (e) => {
    //e.preventDefault();
    getLoginFormValues();
}

LOGIN_BUTTON.addEventListener('click',submitLoginForm);

