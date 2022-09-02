import "./assets/css/styles.css";
import { Shirt, Shoes } from "./clothes";

let KillianShirt = new Shirt("blue", "XXL", "Nike", "shirt");
let KillianShoes = new Shoes("white", "34", "Abibas", "shoes");
KillianShirt.FindCategory();
let aze = 0;

let solde = 5;
solde <= -100 ? console.log("true") : console.log("false");

console.log(KillianShirt, KillianShoes);
//button
const ButtonDeposit = document.getElementById("ButtonDeposit");
const ButtonWithdraw = document.getElementById("buttonWithdraw");
//button

//Ajout/retrait argent
const Deposit = document.getElementById("Deposit");
const WithdrawMoney = document.getElementById("Withdraw");
const result = document.getElementById("result");
//Ajout/retrait argent



//algo
let amount = Deposit;
let startingMoney = 25;
let sold = 0;
//algo

// const add = (value) => {
//   return (sold += value);
// };
// console.log(add(5));
// console.log(sold);

// console.log(add(5));
// console.log(sold);

// let a = 50;
// let b = 56;
// Math.random(a, b);

// function PutMoney() {
//   //Deposit.startingMoney = Deposit.startingMoney + amount;
//   Deposit.value;

//   //if (a < b) {
//   alert("test");
// }

//button click
ButtonDeposit.addEventListener("click", () => {
  console.log(test);
});

let user = {
  numberAccount: 12548545,
  iban: "FR76584755",
  codeBank: 454578,
};

class User {
  constructor(
    numberAccount,
    iban,
    codeBank,
    Deposit,
    withdrawMoney,
    giveMoney,
    balanceManagement,
    authorizedOverdraft,
    startingMoney
  ) {
    this.numberAccount = numberAccount;
    this.iban = iban;
    this.codeBank = codeBank;
    this.Deposit = Deposit;
    this.withdrawMoney = withdrawMoney;
    this.giveMoney = giveMoney;
    this.balanceManagement = balanceManagement;
    this.authorizedOverdraft = authorizedOverdraft;
    this.startingMoney = startingMoney;
  }
}

let ruben = new User(12548545, "FR76584755", 454578, 25);
let safwan = new User(12548545, "FR76584755", 454578, 25);

