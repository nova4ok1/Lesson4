//declaring variable at this level so they will be global
let money, time;

//creating function, gathering inmput from user 
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

//calling the function
start();
//creating object
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpences: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            b = prompt("Во сколько обойдется?", "");

            if ((typeof (a)) === "string" && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
                console.log("done");
                // we are adding to the object with key a and value b. Example boots:200
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }

        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Everyday budget: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Minimum level of daily budget");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
            console.log("Avarage level of daily budget");
        } else if (appData.moneyPerDay > 1000) {
            console.log("High level of daily budget");
        } else {
            console.log("An error accured");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("How much savings do you have?");
            percent = +prompt("What procent per month");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Monthly income from your deposit is " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let a = prompt("What are your irregulare expences?", "irregular expence");
            appData.optionalExpenses[i] = a;
            console.log("irregular expence - done " + i);
        }
    },
    chooseIncome: function () {
        let items = prompt("What will provide additiona income? (split your answers by comma)", "rent, gift, yoga, archery");
        while (items == "" || items == null) {
            items = prompt("What will provide additiona income? (split your answers by comma)", "rent, gift, yoga, archery");
        }
        console.log(items);
        appData.income = items.split(", ");
        console.log(appData.income);
        appData.income.push(prompt("maybe something else?"));
        appData.income.sort();
        console.log(appData.income);
        appData.income.forEach(function (item, index, income) {
            console.log(++index + ": " + item);
        });
    }
};
function showAppData(){
for (let key in appData) {
    console.log("Our program includes data: " + key);
}
}
showAppData();