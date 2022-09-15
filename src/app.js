import "./assets/css/styles.css";
//boutton
// const button = document.getElementById("submit-add");

const inputDeposit = document.getElementById("input-deposit");
const buttonAddSold = document.getElementById("add-sold");
const inputAddSold

//algo
console.log(inputAddSold);
let currentSold = 100;

// //algo ajouter argent
const addSold = () => {
  let parse = parseInt(inputDeposit.value);
  let results = (parse += currentSold);
  console.log(results);
  // let results = parseInt(inputAddSold.value);
  // let a = (results += currentSold);
  // console.log(a);
  // return console.log((results += currentSold));
};

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

console.log(currentSold);

//boutton click
buttonAddSold.addEventListener("click", () => addSold());
if (currentSold <= -300) {
  console.log("Découvert");
}
