const increaseBtn = document.getElementById("inBtn");
const resetBtn = document.getElementById("resBtn");
const decreaseBtn = document.getElementById("deBtn");
const submitBtn = document.getElementById("subBtn"); 
let message =  document.getElementById("message");
let countLabel = document.getElementById("countLabel"); 

 
let count = 0;

increaseBtn.onclick = function() {
  count++;
  countLabel.textContent = count;
}

resetBtn.onclick = function () {
  count = 0; 
  countLabel.textContent = count; 
  message.textContent = ``; 
}

decreaseBtn.onclick = function () {
  count--; 
  countLabel.textContent = count; 
}

submitBtn.onclick = function () {

  if (count < 0) {
    message.textContent = `IMPOSSIBLE!`; 
  }

  else if (count == 0) {
    message.textContent = `You were just born!`
  }

  else {
  
    message.textContent = `You are ${count} years old`; 

  }
}


let countLabel2 = document.getElementById("countLabel2"); 
let countLabel3 = document.getElementById("countLabel3"); 
let countLabel4 = document.getElementById("countLabel4"); 

const rollBtn = document.getElementById("rollBtn");

let count2 = 0; 
let count3 = 0; 
let count4 = 0; 


let max = 7;
let min = 0;

rollBtn.onclick = function ()  {
  count2 = Math.floor(Math.random() * 7); 
  count3 = Math.floor(Math.random() * 7); 
  count4 = Math.floor(Math.random() * 7); 

  countLabel2.textContent = count2;
  countLabel3.textContent = count3;
  countLabel4.textContent = count4;
}


let text = document.getElementById("text"); 
let response = document.getElementById("response"); 
let submit = document.getElementById("submitBtn"); 
let age; 

submit.onclick = function () {
  age = text.value; 
  age = Number(age); 

  if (age >= 100) {
      response.textContent = `${age}? You are to old for this site`;
  }

  else if (age < 18) {
      response.textContent = `You are not old enough for this site. Leave!`
  }

  else {
      response.textContent = `Welcome to the site`
  }

}
