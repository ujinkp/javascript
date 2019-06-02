var money=prompt ("Ваш бюджет на місяць?", "");
var time=prompt ("Введіть дату в форматі YYYY-MM-DD", "");

var appData = {
    budjet: money,
    timeData: time,
    expenses: "",
    optionalExpenses: "",
    income: "",
    savings: false
}

console.log(appData);

var expenses=prompt ("Введіть обовязкову статтю витрат в цьому місяці", "");
var optionalExpenses=prompt ("В скільки обійдеться", "");

var expenses = {
    first: expenses,
    second: optionalExpenses,
}

alert ("На " + expenses.first +" на день потрібно " + optionalExpenses/30 + " грн.")
