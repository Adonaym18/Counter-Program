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

  if(count < 0){
    sountLabel.textContent = `Your age can't be less than 0 :)`
  }
}

submitBtn.onclick = function () {
  countLable.value;
  
  if(count < 0){
    countLable.textContent = `Your age can't be less than 0 :)`;
  }

  else {
    countLable.textContent = `You are ${count} years old`;

  }

  // document.getElementById("result").textContent = `You are ${count} years old`;

}