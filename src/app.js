import _ from "lodash";
import "./assets/css/styles.css";
//button
const ButtonDeposit = document.getElementById("ButtonDeposit");
const ButtonWithdraw = document.getElementById("buttonWithdraw");
//button

//Ajout/retrait argent
const addMoney = document.getElementById("Deposit");
const WithdrawMoney = document.getElementById("Withdraw");
//Ajout/retrait argent

//algo
const Zero = addMoney > 0;
let totalBalance = 25;
//algo

//Si on met 0 alors sa marche pas
Zero.prototype.User = function (addMoney) {
  console.log("zae");
  if (!Zero) {
    console.error("Amount must be positive!");
    return false;
  }
  return true;
};

//button click
ButtonDeposit.addEventListener("click", () => {
  console.log(User);
});

let user = {
  numberAccount: 12548545,
  iban: "FR76584755",
  codeBank: 454578,
  addMoney: 1,
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

// Fontawesome @import
// import '@fortawesome/fontawesome-free/js/all';
// //  Tailwind @import
//   import "./assets/css/styles.css";

// // const btn = document.getElementById("dark-mode");
// // const body = document.querySelector("body");
// // const title = document.querySelectorAll("h1");

// // const darkMode = () => {
// //     body.classList.toggle("bg-black");
// //     body.classList.toggle("text-white");
// //     title.forEach((value) => {
// //         value.classList.toggle("bg-red-500")
// //     })
// // };

// // btn.addEventListener("click", darkMode);

// import Computer from './computer';

// let hatim = new Computer("ssd", "Rtx3090", "intel 7");
// let warren = new Computer("hdd", "lorem", "amd 5");

// console.log(hatim);
// console.log(warren);

// const btn = document.getElementById("submit");
// const hardDisk = document.getElementById("hard-disk");
// const gpu = document.getElementById("gpu");
// const cpu = document.getElementById("cpu");
// const category = document.getElementById("category");

// const resultsHdd = document.getElementById("results-hdd");
// const resultsgpu = document.getElementById("results-gpu");
// const resultscpu = document.getElementById("results-cpu");
// const resultsCategory = document.getElementById("results-category");

// const submitForm = () => {
//     let computer = new Computer(hardDisk.value, gpu.value, cpu.value, category.value);
//     resultsHdd.append(computer.hardDisk);
//     resultsgpu.append(computer.gpu);
//     resultscpu.append(computer.cpu);
//     resultsCategory.append(computer.category);
//     console.log(computer);
// }
// btn.addEventListener("click", submitForm);

// let a = new Computer("hdd", "rtc", "intel", "keybo");
// console.log(a);
// class AccessoryPc {
//     constructor(category) {
//         this.category = category;
//     };

//     keyboard(value) {
//         value = this.category;
//         try {
//             if(value === "keyboard") {
//                 return "je suis un clavier.";
//             } else {
//                 return "keyboard error";
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };
// }

// class Computer extends AccessoryPc {
//     constructor(hardDisk, gpu, cpu, category) {
//         super(category);
//         this.hardDisk = hardDisk;
//         this.gpu = gpu;
//         this.cpu = cpu;
//     };
// };
