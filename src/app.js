import "./assets/css/styles.css";

//button
const ButtonDeposit = document.getElementById("ButtonDeposit");
const ButtonWithdraw = document.getElementById("buttonWithdraw");
//button

//Ajout/retrait argent
const Deposit = document.getElementById("Deposit");
const WithdrawMoney = document.getElementById("Withdraw");
const result = document.getElementById("result");
const deposits = [];
const withdrawals = [];
//Ajout/retrait argent

//algo
let amount = [];
let initialSold = 0;
//algo
//button click

// let user = {
//   numberAccount: 12548545,
//   iban: "FR76584755",
//   codeBank: 454578,
//   initialSold: 0,
// };

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
    initialSold
  ) {
    this.numberAccount = numberAccount;
    this.iban = iban;
    this.codeBank = codeBank;
    this.Deposit = Deposit;
    this.withdrawMoney = withdrawMoney;
    this.giveMoney = giveMoney;
    this.balanceManagement = balanceManagement;
    this.authorizedOverdraft = authorizedOverdraft;
    this.initialSold = initialSold;
  }
}
let ruben = new User(12548545, "FR76584755", 454578, 25, 0, 0, 0, 0, 100);

//button click
ButtonDeposit.addEventListener("click", () => {
  console.log((ruben.initialSold += ruben.Deposit));
  // console.log(user);
  // deposits.push(Number(Deposit.value));
  // initialSold += Number(Deposit.value);
});

// console.log(ruben.initialSold + 100);
let safwan = new User(12548545, "FR76584755", 454578, 25);
