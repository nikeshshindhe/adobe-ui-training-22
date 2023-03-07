const $ = document;

const NUMBER_OF_PERSONS = $.getElementById("numberOfPersons");
const AMOUNT_SPENT = $.getElementById("amountSpent");
const TIP_AMOUNT = $.getElementById("tipAmount");
const LOGIN_BUTTON = $.getElementById("formBtn");
const CONTAINER = $.getElementById("amountSplitResult");


const getPersonCount = () => {
    return NUMBER_OF_PERSONS.value;
}

const getTipAmountPercentage = () => {
    return TIP_AMOUNT.value;
}

const getAmountSpentTotal = () => {
    return AMOUNT_SPENT.value;
}

function getExpenseDetailsFromUser(){
    calculateContributionAmount(getAmountSpentTotal(),getPersonCount(),getTipAmountPercentage());
}

const calculateContributionAmount = (getAmountSpentTotal,getPersonCount,getTipAmountPercentage) => {
    let distributionAmount= getAmountSpentTotal / getPersonCount;
    displayExpenseContributionResult((distributionAmount + calculateTotalContributionWithTip(getAmountSpentTotal,getTipAmountPercentage,getPersonCount)),getPersonCount,getAmountSpentTotal)
}

const calculateTotalContributionWithTip = (totalAmount,tipPercentage,numberOfPersons) => {
    return (totalAmount * tipPercentage / 100) / numberOfPersons;
}


const displayExpenseContributionResult = (distributionAmount,numberOfPersons,amountSpentTotal) => {
    let resultMessage = `${numberOfPersons} Persons involved in this Expense, Spent ${amountSpentTotal} and the Contribution amount is ${distributionAmount}`;
    CONTAINER.innerHTML = resultMessage;
}

const submitLoginForm = (e) => {
    e.preventDefault();
    getExpenseDetailsFromUser();
}

LOGIN_BUTTON.addEventListener('click',submitLoginForm);

