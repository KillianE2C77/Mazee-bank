class FindClothes {
  constructor(category) {
    this.category = category;
  }
  SearchCategory(value) {
    value = this.category;
    switch (value) {
      case "shirt":
        console.log("je suis un t-shirt");
        break;
      case "shoes":
        console.log("je suis une chaussure");
      default:
        console.log("je suis une alerte");
        break;
    }
  }
}

export default FindClothes;

// //button
// const ButtonDeposit = document.getElementById("ButtonDeposit");
// const ButtonWithdraw = document.getElementById("buttonWithdraw");
// //button

// //Ajout/retrait argent
// const Deposit = document.getElementById("Deposit");
// const WithdrawMoney = document.getElementById("Withdraw");
// const result = document.getElementById("result");
// const deposits = [];
// const withdrawals = [];
// //Ajout/retrait argent

// const balanceShow = document.getElementById("balance-show");
// const balanceShowTotal = balanceShow.innerText;
// const balanceShowTotalValue = parseFloat(balanceShowTotal);

// //algo
// let amount = [];
// let initialSold = 0;
// //algo
// //button click

// // let user = {
// //   numberAccount: 12548545,
// //   iban: "FR76584755",
// //   codeBank: 454578,
// //   initialSold: 0,
// // };

// class User {
//   constructor(
//     numberAccount,
//     iban,
//     codeBank,
//     Deposit,
//     withdrawMoney,
//     giveMoney,
//     balanceManagement,
//     authorizedOverdraft,
//     initialSold
//   ) {
//     this.numberAccount = numberAccount;
//     this.iban = iban;
//     this.codeBank = codeBank;
//     this.Deposit = Deposit;
//     this.withdrawMoney = withdrawMoney;
//     this.giveMoney = giveMoney;
//     this.balanceManagement = balanceManagement;
//     this.authorizedOverdraft = authorizedOverdraft;
//     this.initialSold = initialSold;
//   }
// }
// let ruben = new User(12548545, "FR76584755", 454578, 25, 0, 0, 0, 0, 100);

// //button click
// // ButtonDeposit.addEventListener("click", () => {
// //   // console.log((ruben.initialSold += ruben.Deposit));
// //   console.log((ruben.initialSold += ruben.Deposit));

// //   if (ruben.initialSold > 0) {
// //     const initialSold = Deposit + depositInputFieldValue;
// //     initialSold.innerText = totalBalanceAmount;
// //   }

// //   // console.log(user);
// //   // deposits.push(Number(Deposit.value));
// //   // initialSold += Number(Deposit.value);
// // });

// // console.log(ruben.initialSold + 100);
// let safwan = new User(12548545, "FR76584755", 454578, 25);

// // const withdraw = () => {
// //   let results = parseInt(inputAddSold.value)
// //   if (currSold >= -301 && currSold < 0) {
// //     console.log("A Découvert");
// //   } else if (currSold >= 0 && currSold <= -300) {
// //     console.log(currSold -= results);
// //   } else {
// //     console.log("error");
// //   }

// // }

//NV CODE

// import "./assets/css/styles.css";
// //boutton
// // const button = document.getElementById("submit-add");

// const inputDeposit = document.getElementById("input-deposit");
// const buttonAddSold = document.getElementById("add-sold");

// //algo
// // console.log(inputAddSold);
// let currentSold = 100;

// //algo ajouter argent
// const addSold = () => {
//   let parse = parseInt(inputDeposit.value);
//   let results = (parse += currentSold);
//   console.log(results);
//   // let results = parseInt(inputAddSold.value);
//   // let a = results += currentSold;
//   // console.log(a);
//   // return console.log((results += currentSold));
// };

// // Algo retirer argent
// const withdraw = () => {
//   let results = parseInt(inputAddSold.value);
//   if (currSold >= -1 && currSold < 0) {
//     console.log("A Découvert");
//   } else if (currSold >= 0 && currSold <= -1) {
//     console.log((currSold -= results));
//   } else {
//     console.log("error");
//   }
// };

// console.log(currentSold);

// //boutton click
// buttonAddSold.addEventListener("click", () => addSold());
// if (currentSold <= -300) {
//   console.log("Découvert");
// }

// import "./assets/css/styles.css";
// //boutton
// // const button = document.getElementById("submit-add");

// const inputDeposit = document.getElementById("input-deposit");
// const buttonAddSold = document.getElementById("add-sold");

// //algo
// // console.log(inputAddSold);
// let currentSold = 100;

// //algo ajouter argent
// const addSold = () => {
//   let parse = parseInt(inputDeposit.value);
//   let results = (parse += currentSold);
//   console.log(results);
//   // let results = parseInt(inputAddSold.value);
//   // let a = results += currentSold;
//   // console.log(a);
//   // return console.log((results += currentSold));
// };

// // Algo retirer argent
// const withdraw = () => {
//   let results = parseInt(inputAddSold.value);
//   if (currSold >= -1 && currSold < 0) {
//     console.log("A Découvert");
//   } else if (currSold >= 0 && currSold <= -1) {
//     console.log((currSold -= results));
//   } else {
//     console.log("error");
//   }
// };

// console.log(currentSold);

// //boutton click
// buttonAddSold.addEventListener("click", () => addSold());
// if (currentSold <= -300) {
//   console.log("Découvert");
// }
