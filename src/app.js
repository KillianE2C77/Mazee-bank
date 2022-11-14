import "./assets/css/styles.css";
import "@fortawesome/fontawesome-free/js/all";

//ajouter argent
// const button = document.getElementById("submit-add");
const inputDeposit = document.getElementById("input-deposit");
const buttonAddSold = document.getElementById("add-sold");
const inputAddSold = document.getElementById("input-addsold");

//retirer argent
const inputWithdraw = document.getElementById("input-withdraw");
const buttonWithdrawSold = document.getElementById("withdraw-sold");
const inputWithdrawSold = document.getElementById("input-withdrawsold");

const inputTransfer = document.getElementById("input-transfer");
const inputTransfertest = document.getElementById("input-transfer");

console.log(inputWithdraw);
//algo
console.log(inputAddSold);
let currentSold = 100;

// const balanceShowTotal = balanceShow.innerText;
const currentSoldTotal = document.getElementById("currentSoldTotal");
currentSoldTotal.innerHTML = `${currentSold}`;

console.log(currentSoldTotal);

class User {
  constructor(balanceManagement, authorizedOverdraft, initialSold) {
    this.balanceManagement = balanceManagement;
    this.authorizedOverdraft = authorizedOverdraft;
    this.initialSold = initialSold;
  }
}
let ruben = new User(12548545, "FR76584755", 454578, 25, 0, 0, 0, 0, 100);
let safwan = new User(12548541, "FR76584755", 454571, 25, 0, 0, 0, 0, 100);

// //algo ajouter argent
const addSold = () => {
  let parse = parseInt(inputDeposit.value);
  let results = (parse += currentSold);
  console.log(results);
  //let results = parseInt(inputAddSold.value);
  // let a = (results += currentSold);
  // console.log(a);
  // return console.log((results += currentSold));
};

//Algo retirer argent
const withdraw = () => {
  let results = parseInt(inputWithdrawSold.value);
  console.log(results);
  // let parse = parseInt(inputDeposit.value);
  // let results = (parse += currentSold);
  if (currentSold >= -1 && currentSold < 0) {
    console.log("A Découvert");
    alert("Vous êtes a découvert");
  } else if (currentSold >= 0 && currentSold <= -1) {
    console.log((currentSold -= results));
  } else {
    console.log("error");
  }
};

//Algo Transfer argent

// function sendMoneyToUser(){
//     if (currentSold > -1) {
//        alert("Fond insuffisant.")
//     }
//  else {

console.log(currentSold);

//boutton click
buttonAddSold.addEventListener("click", () => addSold());
if (currentSold <= -300) {
  console.log("Découvert");
}

buttonWithdrawSold.addEventListener("click", () => withdraw());
if (currentSold <= -300) {
  console.log("Découvert");
}
