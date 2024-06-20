import inquirer from "inquirer";

// define tha list of currencies and thire exchange rate
let exchange_rate : any= {
    "USD": 1,
    "EUR":0.9,
    "JYP":113,
    "CAD":1.3,
    "AUD":1.65,
    "PKR":280,
    // And more currencies and thire exchange rate here
}

// promt the user to Select currenies to convert from and to
let user_answers = await inquirer.prompt([
    {
        name:" from currency",
        type:"list",
        message:"select the currency to convert from",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"to currency",
        type:"list",
        message:"select the currency to convert into",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount to convert:"
    },
]);

// perform currency conversion by using formula
let from_amount = exchange_rate[user_answers.from_currency];
let to_amount = exchange_rate[user_answers.to_currency];
let amount = user_answers.amount

// formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount
console.log(converted_amount);


