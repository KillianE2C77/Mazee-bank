import _ from "lodash";
import "./assets/css/styles.css";
const addMoney = document.getElementById("Deposit");
const ButtonDeposit = document.getElementById("ButtonDeposit");
const Withdraw = document.getElementById("Withdraw");
const ButtonWithdraw = document.getElementById("buttonWithdraw");
const addMoney = [];
const Withdrawal = [];
let totalBalance = 25;

ButtonDeposit.addEventListener("click", () => {
  if (useraddMoney.value < 0.01 || useraddMoney.value > 10000) {
    alert("blablabla.");
  }
});

let user = {
  numberAccount: 12548545,
  iban: "FR76584755",
  codeBank: 454578,
  addMoney: 454,
};

class User {
  constructor(
    numberAccount,
    iban,
    codeBank,
    addMoney,
    withdrawMoney,
    giveMoney,
    balanceManagement,
    authorizedOverdraft,
    startingMoney
  ) {
    this.numberAccount = numberAccount;
    this.iban = iban;
    this.codeBank = codeBank;
    this.addMoney = addMoney;
    this.withdrawMoney = withdrawMoney;
    this.giveMoney = giveMoney;
    this.balanceManagement = balanceManagement;
    this.authorizedOverdraft = authorizedOverdraft;
    this.startingMoney = startingMoney;
  }
}

let ruben = new User(12548545, "FR76584755", 454578, 25);
