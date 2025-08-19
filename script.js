//  COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLable = document.getElementById("countLabel");
const submitBtn = document.getElementById("submitBtn"); 
let count = 0; 

increaseBtn.onclick = function() {
  count++; 
  countLable.textContent = count; 
}


resetBtn.onclick = function() {
  count = 0;
  countLable.textContent = count;  
}

decreaseBtn.onclick = function () {
  count--; 
  countLable.textContent = count;
}

submitBtn.onclick = function () {
  document.getElementById("result").textContent = `You are ${count} years old`;

}