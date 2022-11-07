const button=document.querySelector("#btn");
button.addEventListener("click",calculateAmount);

const buttonTip=document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);
function showTip(e) {
e.preventDefault();
tip.style.display="block";
}

const buttonDiscount=document.querySelector("#addDiscount");
buttonDiscount.addEventListener("click", showDiscount);
function showDiscount(e) {
e.preventDefault();
discount.style.display="block";
}


function calculateAmount(e){
    e.preventDefault();

    const bill=Number(document.querySelector("#bill").value);
    const people=Number(document.querySelector("#people").value);
    const tip=Number(document.querySelector("#tip").value);
   const discount=Number(document.querySelector("#discount").value);


   if (bill === "" || people=== ""|| people<1){
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please enter your information!',
   
      })
   }


let amountPerPerson=bill/people;
let tipPerPerson=(bill*tip)/people;
let discountPerPerson=(bill*discount)/people;

let totalSum=((amountPerPerson+tipPerPerson)-discountPerPerson);


amountPerPerson=amountPerPerson.toFixed(2);
tipPerPerson=tipPerPerson.toFixed(2);
discountPerPerson=discountPerPerson.toFixed(2);
totalSum=totalSum.toFixed(2);

document.querySelector("#dividedBill").textContent=amountPerPerson;
document.querySelector("#dividedTip").textContent=tipPerPerson;
document.querySelector("#dividedDiscount").textContent=discountPerPerson;
document.querySelector("#billAndTip").textContent=totalSum;


}