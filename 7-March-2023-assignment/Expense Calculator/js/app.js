const $ = document;

const MONTHLY_INCOME = $.getElementById("monthlyIncome");
const MONTHLY_EXPENSE = $.getElementById("monthlyExpense");
const LOGIN_BUTTON = $.getElementById("formBtn");
const CONTAINER = $.getElementById("income-result");

const getExpenseDetailsFromUser = () => {
    let monthlyIncome = MONTHLY_INCOME.value;
    let monthlyExpense = MONTHLY_EXPENSE.value;
    let balance = getBalanceFromIncome(monthlyIncome,monthlyExpense)
    displayExpenseCalculationResult(monthlyIncome,monthlyExpense,balance);
}

const getBalanceFromIncome = (monthlyIncome,monthlyExpense) => {
    return monthlyIncome - monthlyExpense;
}

const displayExpenseCalculationResult = (monthlyIncome,monthlyExpense,balance) => {
    let resultMessage = `Your Monthly Income is ${monthlyIncome} & your current Monthly Expense is ${monthlyExpense}, Balance you have : ${balance}`;
    CONTAINER.innerHTML = resultMessage;
}

const submitLoginForm = (e) => {
    e.preventDefault();
    getExpenseDetailsFromUser();
}

LOGIN_BUTTON.addEventListener('click',submitLoginForm);

