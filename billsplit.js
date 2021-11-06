// UI Vars
const billInput = document.querySelector(".bill-input");
const pplInput = document.querySelector(".people-input");
const tipBtn = document.querySelectorAll(".tip-btn");
const customTip = document.querySelector(".custom-tip");
const totalResult = document.querySelector(".total-per-person");
const totalTip = document.querySelector(".total-tip");
const resetBtn = document.querySelector(".reset-btn");
let bill;
let people;
let tip;

// Default when reload
window.addEventListener("DOMContentLoaded", function(){
    billInput.value = "";
    pplInput.value = "";
    customTip.value = "";
    
})

// Extract bill value
billInput.addEventListener("keyup", function(e){
    const input = Number(e.target.value);
    if(isNaN(input)){
        bill = 0;
    }else {
        bill = input;
    }
    calculateTip();
    calculateTotal();
})

/*
For looping tip button
adding active class on selected button
extracting value to pass to calculateTip func
*/
tipBtn.forEach(function(btn){
    btn.addEventListener("click", function(){

        btn.classList.add("active");

        tipBtn.forEach(function(test){
            if(test !== btn){
                test.classList.remove("active")
            }
        })

        if(btn.nodeName === "INPUT"){
            btn.addEventListener("keyup", function(e){
                tip = e.target.value;
                calculateTip(tip);
                calculateTotal(tip);
            })
        }else {
            tip = btn.value;
            calculateTip(tip);
            calculateTotal(tip);
        }
    })
})

// Extract number of people
pplInput.addEventListener("keyup", function(e){
    const input = Number(e.target.value);
    if(isNaN(input)){
        people = 0;
    }else {
        people = input;
    }
    calculateTip();
    calculateTotal();
})

// Reset button
resetBtn.addEventListener("click", function(){
    billInput.value = "";
    pplInput.value = "";
    customTip.value = "";
    totalResult.innerHTML = `$0.00`;
    totalTip.innerHTML = `$0.00`;
    tipBtn.forEach((btn) => btn.classList.remove("active"));
})

// Calculate tip
function calculateTip(){
    let total = bill * tip / 100;
    total = Number(total);
    total = total.toFixed(2);
    if(!isNaN(total) && isFinite(total)){
        totalTip.innerHTML = `$${total}`
    }
    calculateTotal(tip)
}

// Calculate total per person
function calculateTotal(tip){
    let total;
    tip = tip;
    let eachTip = (bill * tip / 100)
    total = (bill / people) + (eachTip / people);

    total = Number(total);
    total = total.toFixed(2)
    if(!isNaN(total) && isFinite(total)){
        totalResult.innerHTML = `$${total}`
    }
    
} 